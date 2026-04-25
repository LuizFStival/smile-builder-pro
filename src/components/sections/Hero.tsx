import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import heroImage from "@/assets/hero-dentista.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute bottom-10 -right-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up space-y-6 text-center lg:text-left">
          <span className="inline-block rounded-full bg-card/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm shadow-card">
            CRO-PR 39945 · Cirurgiã Dentista
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Dra. Giullia <span className="text-gradient">Campioni</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Cuidando do seu sorriso com{" "}
            <span className="italic text-primary">carinho e excelência</span>.
            Atendimento humanizado para toda a família, com olhar especial para as crianças.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild variant="hero" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar consulta no WhatsApp
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground lg:justify-start">
            <div>
              <p className="text-2xl font-semibold text-primary">+5</p>
              <p>anos de experiência</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-semibold text-primary">100%</p>
              <p>atendimento humanizado</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft animate-float">
            <img
              src={heroImage}
              alt="Dra. Giullia Campioni atendendo uma criança com sorriso acolhedor"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
