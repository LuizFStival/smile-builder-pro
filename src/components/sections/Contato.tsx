import { CONTACT_INFO, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export function Contato() {
  return (
    <section id="contato" className="bg-background pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Onde nos encontrar
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-5 py-3 text-sm font-medium text-foreground shadow-card transition-smooth hover:scale-[1.02] hover:opacity-90"
            aria-label={`Abrir Instagram ${INSTAGRAM_HANDLE}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.88 1.18 4 4 0 0 1 7.88-1.18" />
              <path d="M17.5 6.5h.01" />
            </svg>
            <span>Instagram: {INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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

      <footer className="mx-auto mt-14 max-w-6xl border-t border-border px-6 pt-8 text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Dra. Giullia Campioni</p>
        <p>Cirurgiã Dentista · CRO-PR 39945 · Pós-graduanda em Odontopediatria</p>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
