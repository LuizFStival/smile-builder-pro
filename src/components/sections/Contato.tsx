import { CONTACT_INFO } from "@/lib/contact";

export function Contato() {
  return (
    <section id="contato" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Onde nos encontrar
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary/50 p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-xl">📍</span>
              <h3 className="text-xl font-semibold">Localização</h3>
            </div>
            <p className="mt-5 text-muted-foreground">{CONTACT_INFO.address}</p>
            <p className="text-muted-foreground">
              {CONTACT_INFO.city} - {CONTACT_INFO.state}
            </p>
          </div>

          <div className="rounded-2xl bg-secondary/50 p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-xl">🕐</span>
              <h3 className="text-xl font-semibold">Horário de atendimento</h3>
            </div>
            <ul className="mt-5 space-y-2">
              {CONTACT_INFO.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-border/60 pb-2 text-sm text-muted-foreground last:border-0"
                >
                  <span className="font-medium text-foreground">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-border px-6 pt-8 text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Dra. Giullia Campioni</p>
        <p>Cirurgiã Dentista · CRO-PR 39945 · Pós-graduanda em Odontopediatria</p>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
