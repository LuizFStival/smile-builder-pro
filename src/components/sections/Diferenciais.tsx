const diferenciais = [
  {
    titulo: "Atendimento humanizado",
    desc: "Cada paciente é único. Aqui você encontra escuta, empatia e atenção aos detalhes.",
  },
  {
    titulo: "Foco em crianças",
    desc: "Abordagem lúdica que transforma o medo em confiança e a consulta em momento leve.",
  },
  {
    titulo: "Ambiente acolhedor",
    desc: "Espaço pensado para o seu conforto, com decoração suave e atmosfera tranquila.",
  },
  {
    titulo: "Profissional atualizada",
    desc: "Pós-graduanda em Odontopediatria, sempre em busca das melhores técnicas.",
  },
];

export function Diferenciais() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Por que escolher a Dra. Giullia
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {diferenciais.map((d, i) => (
            <div
              key={d.titulo}
              className="flex gap-5 rounded-2xl bg-secondary/50 p-7 transition-smooth hover:bg-secondary"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-lg font-semibold text-primary-foreground shadow-card">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{d.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
