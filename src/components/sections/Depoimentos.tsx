const depoimentos = [
  {
    nome: "Mariana S.",
    texto:
      "Levei minha filha de 5 anos com muito receio e a Dra. Giullia foi um amor. Hoje ela pede para voltar ao dentista!",
    role: "Mãe da Helena",
  },
  {
    nome: "Carolina P.",
    texto:
      "Atendimento impecável, super atenciosa e cuidadosa. Me senti acolhida do início ao fim. Recomendo demais!",
    role: "Paciente",
  },
  {
    nome: "Rafael M.",
    texto:
      "Profissional excelente. Explicou cada passo do tratamento com paciência. Ambiente lindo e acolhedor.",
    role: "Paciente",
  },
];

export function Depoimentos() {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Histórias de sorrisos felizes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="flex flex-col rounded-2xl bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="text-3xl text-primary">"</div>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {d.texto}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{d.nome}</p>
                <p className="text-xs text-muted-foreground">{d.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
