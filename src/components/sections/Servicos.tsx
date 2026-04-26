const servicos = [
  {
    icon: "🦷",
    titulo: "Clínica Geral",
    desc: "Consultas, avaliações completas e tratamentos para manter sua saúde bucal em dia.",
  },
  {
    icon: "✨",
    titulo: "Limpeza & Profilaxia",
    desc: "Remoção de tártaro e placa bacteriana, deixando seu sorriso renovado e saudável.",
  },
  {
    icon: "🪥",
    titulo: "Restaurações",
    desc: "Restaurações estéticas com materiais modernos para devolver função e beleza.",
  },
  {
    icon: "🧒",
    titulo: "Odontopediatria",
    desc: "Atendimento especializado e lúdico para crianças, com paciência e carinho.",
  },
  {
    icon: "🛡️",
    titulo: "Prevenção",
    desc: "Aplicação de flúor, selantes e orientação para prevenir cáries e problemas futuros.",
  },
  {
    icon: "💬",
    titulo: "Orientação",
    desc: "Educação em saúde bucal personalizada para você e toda a sua família.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tratamentos modernos com abordagem suave, segura e focada no seu{" "}
            <span className="whitespace-nowrap">bem‑estar</span>.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <article
              key={s.titulo}
              className="group rounded-2xl border border-border/60 bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-2xl shadow-glow transition-smooth group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

