import sobreImg from "@/assets/sobre-dentista.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-primary opacity-15 blur-xl" />
          <img
            src={sobreImg}
            alt="Retrato profissional da Dra. Giullia Campioni"
            width={896}
            height={1024}
            loading="lazy"
            className="relative w-full max-w-md rounded-[2rem] object-cover shadow-card mx-auto"
          />
        </div>

        <div className="order-1 space-y-5 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Sobre a Dra.
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Um sorriso acolhedor por trás de cada atendimento
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">Dra. Giullia Campioni</strong> é Cirurgiã Dentista
            (CRO-PR 39945) e pós-graduanda em Odontopediatria. Sua missão é transformar a
            experiência odontológica em algo leve, seguro e afetuoso — especialmente para
            crianças e famílias que buscam um atendimento mais humano.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada consulta é pensada para que você se sinta cuidado, ouvido e confortável.
            Aqui, o sorriso vem antes do procedimento.
          </p>

          <ul className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              "Atendimento humanizado",
              "Especialista em crianças",
              "Profissional atualizada",
              "Ambiente acolhedor",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-medium text-secondary-foreground"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
