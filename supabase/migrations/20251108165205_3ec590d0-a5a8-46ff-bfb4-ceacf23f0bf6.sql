-- Create storage bucket for user photos and product images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'tryons',
  'tryons',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
);

-- Create RLS policies for storage bucket
CREATE POLICY "Anyone can upload images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'tryons');

CREATE POLICY "Anyone can view images"
ON storage.objects FOR SELECT
USING (bucket_id = 'tryons');

CREATE POLICY "Anyone can update their images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'tryons');

-- Create table for try-on results
CREATE TABLE public.tryon_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_photo_url TEXT NOT NULL,
  product_photo_url TEXT NOT NULL,
  result_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tryon_results ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view results (public demo app)
CREATE POLICY "Anyone can view try-on results"
ON public.tryon_results
FOR SELECT
USING (true);

-- Create policy to allow anyone to insert results
CREATE POLICY "Anyone can create try-on results"
ON public.tryon_results
FOR INSERT
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_tryon_results_created_at ON public.tryon_results(created_at DESC);