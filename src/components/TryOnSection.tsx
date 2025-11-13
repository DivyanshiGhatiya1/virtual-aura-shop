import { useState } from "react";
import { Upload, Loader2, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const TryOnSection = () => {
  const [userPhoto, setUserPhoto] = useState<File | null>(null);
  const [productPhoto, setProductPhoto] = useState<File | null>(null);
  const [userPhotoPreview, setUserPhotoPreview] = useState<string>("");
  const [productPhotoPreview, setProductPhotoPreview] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [paymentRequired, setPaymentRequired] = useState<boolean>(false);

  const handleUserPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserPhoto(file);
      setUserPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleProductPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductPhoto(file);
      setProductPhotoPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File, folder: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Math.random()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('tryons')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('tryons')
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleGenerate = async () => {
    if (!userPhoto || !productPhoto) {
      toast.error("Please upload both photos");
      return;
    }

    setIsProcessing(true);
    setResultUrl("");
    setPaymentRequired(false);

    try {
      // Upload both images
      const userPhotoUrl = await uploadImage(userPhoto, 'user-photos');
      const productPhotoUrl = await uploadImage(productPhoto, 'product-photos');

      // Process with AI
      const { data, error } = await supabase.functions.invoke('process-tryon', {
        body: { userPhotoUrl, productPhotoUrl }
      });

      if (error) {
        const msg = (error as any)?.message?.toString().toLowerCase() || "";
        if (msg.includes("402") || msg.includes("payment") || msg.includes("credits")) {
          setPaymentRequired(true);
          toast.error("Lovable AI credits required. Please add credits to your workspace to use AI features.", { duration: 6000 });
          return;
        }
        throw error;
      }

      if (data?.error) {
        // Handle specific error messages from the edge function
        if (data.error.includes("Payment required") || data.error.includes("credits")) {
          setPaymentRequired(true);
          toast.error("Lovable AI credits required. Please add credits to your workspace to use AI features.", {
            duration: 6000,
          });
        } else {
          toast.error(data.error);
        }
        return;
      }

      setResultUrl(data.resultUrl);
      toast.success("Virtual try-on complete!");
    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to process try-on");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (resultUrl) {
      const link = document.createElement('a');
      link.href = resultUrl;
      link.download = 'tryon-result.png';
      link.click();
    }
  };

  return (
    <section id="try-now" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Try It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Now
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Upload your photo and a product image to see the magic happen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* User Photo Upload */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm">
                  1
                </span>
                Upload Your Photo
              </h3>
              
              <label className="block cursor-pointer">
                <div className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary transition-colors relative overflow-hidden bg-muted/20">
                  {userPhotoPreview ? (
                    <img
                      src={userPhotoPreview}
                      alt="User preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Upload className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Click to upload</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUserPhotoChange}
                  className="hidden"
                />
              </label>
            </div>
          </Card>

          {/* Product Photo Upload */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm">
                  2
                </span>
                Upload Product Image
              </h3>
              
              <label className="block cursor-pointer">
                <div className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary transition-colors relative overflow-hidden bg-muted/20">
                  {productPhotoPreview ? (
                    <img
                      src={productPhotoPreview}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Upload className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Click to upload</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProductPhotoChange}
                  className="hidden"
                />
              </label>
            </div>
          </Card>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-6">
          <Button
            size="lg"
            onClick={handleGenerate}
            disabled={!userPhoto || !productPhoto || isProcessing}
            className="bg-gradient-primary hover:opacity-90 transition-all text-lg px-12 group"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Generate Look
              </>
            )}
          </Button>
        </div>

        {paymentRequired && (
          <div className="max-w-2xl mx-auto mb-8">
            <Alert variant="destructive">
              <AlertTitle>AI credits required</AlertTitle>
              <AlertDescription>
                This feature uses Lovable AI. Please add credits in Settings → Workspace → Usage, then try again.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {resultUrl && (
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/50 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">Your Virtual Try-On Result</h3>
              <div className="max-w-2xl mx-auto rounded-xl overflow-hidden">
                <img
                  src={resultUrl}
                  alt="Try-on result"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Result
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default TryOnSection;
