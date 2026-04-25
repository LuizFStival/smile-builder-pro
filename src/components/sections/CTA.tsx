import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-24">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center text-primary-foreground">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Vamos cuidar do seu sorriso?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Agende sua consulta agora mesmo pelo WhatsApp e dê o primeiro passo para um sorriso saudável.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="whatsapp" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agende sua consulta agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
