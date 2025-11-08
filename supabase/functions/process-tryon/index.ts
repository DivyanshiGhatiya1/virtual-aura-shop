import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userPhotoUrl, productPhotoUrl } = await req.json();
    
    console.log('Processing try-on request:', { userPhotoUrl, productPhotoUrl });

    if (!userPhotoUrl || !productPhotoUrl) {
      throw new Error('Both user photo and product photo URLs are required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Use Lovable AI's image generation to create a virtual try-on result
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Create a realistic virtual try-on image by blending the person from the first image with the clothing/accessory from the second image. Make it look natural and professional, as if the person is wearing the product. Maintain realistic lighting, shadows, and proportions.'
              },
              {
                type: 'image_url',
                image_url: {
                  url: userPhotoUrl
                }
              },
              {
                type: 'image_url',
                image_url: {
                  url: productPhotoUrl
                }
              }
            ]
          }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required. Please add credits to continue.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      throw new Error(`AI gateway error: ${errorText}`);
    }

    const data = await response.json();
    const resultImageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!resultImageUrl) {
      throw new Error('No image generated from AI');
    }

    // Store the result in the database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: insertData, error: insertError } = await supabase
      .from('tryon_results')
      .insert({
        user_photo_url: userPhotoUrl,
        product_photo_url: productPhotoUrl,
        result_url: resultImageUrl,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(`Failed to save result: ${insertError.message}`);
    }

    console.log('Try-on processed successfully:', insertData.id);

    return new Response(
      JSON.stringify({ 
        resultUrl: resultImageUrl,
        resultId: insertData.id
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in process-tryon function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
