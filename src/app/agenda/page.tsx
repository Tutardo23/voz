import { agenda } from "@/lib/data/agenda";
import DayAgenda from "@/components/agenda/DayAgenda";

export default function AgendaPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-title text-3xl font-extrabold text-[#0B3C5D]">
            Agenda · Programa 2026
          </h1>
          <p className="mt-3 max-w-xl text-[#0B3C5D]/70">
            Organización por día y horario del Programa de Desarrollo Docente.
          </p>
        </header>

        {/* Días */}
        <div className="space-y-10">
          {agenda.map((dia) => (
            <DayAgenda key={dia.fecha} dia={dia} />
          ))}
        </div>
      </div>
    </main>
  );
}
