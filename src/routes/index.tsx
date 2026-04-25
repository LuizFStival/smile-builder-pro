import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Servicos } from "@/components/sections/Servicos";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CTA } from "@/components/sections/CTA";
import { Contato } from "@/components/sections/Contato";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <CTA />
      <Contato />
      <WhatsAppFloat />
    </main>
  );
}
