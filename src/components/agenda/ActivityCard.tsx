"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, BookOpen, Users, ArrowRight, Coffee, Sparkle, Target, ClipboardText } from "phosphor-react";
import ObjectivesModal from "@/components/agenda/ObjectivesModal";

type Actividad = {
  horario: string;
  modulo: string;
  tema?: string;
  responsables?: string[];
  lugar?: string;
  tipo: string;
  materialUrl?: string;
  objetivos?: string[];
};

const styleConfig: Record<string, { bg: string; text: string; icon?: any; badge?: string }> = {
  institucional: { bg: "bg-[#1E5AA8]", text: "text-[#1E5AA8]", badge: "bg-[#1E5AA8]/10 text-[#1E5AA8]" },
  innovate: { bg: "bg-[#E11D2E]", text: "text-[#E11D2E]", badge: "bg-[#E11D2E]/10 text-[#E11D2E]" },
  give: { bg: "bg-[#3BAA75]", text: "text-[#3BAA75]", badge: "bg-[#3BAA75]/10 text-[#3BAA75]" },
  break: { bg: "bg-slate-500", text: "text-slate-600", badge: "bg-slate-100 text-slate-600", icon: Coffee },
  misa: { bg: "bg-purple-600", text: "text-purple-600", badge: "bg-purple-50 text-purple-600", icon: Sparkle },
};

export default function ActivityCard({ actividad }: { actividad: Actividad }) {
  const [openObjectives, setOpenObjectives] = useState(false);

  const config = styleConfig[actividad.tipo] || styleConfig.institucional;
  const isBreak = actividad.tipo === "break";
  const isMisa = actividad.tipo === "misa";
  // Detectamos si es la encuesta para darle un estilo especial al botón
  const isEncuesta = actividad.modulo.toLowerCase().includes("encuesta");

  const showVertical = actividad.responsables?.some(r => r.includes(":"));

  if (isBreak || isMisa) {
    const Icon = config.icon || Sparkle;
    return (
      <div className="group relative flex items-center gap-6 rounded-2xl bg-slate-50/50 px-6 py-4 ring-1 ring-slate-200/60 transition-all hover:bg-white hover:shadow-md hover:ring-slate-200">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.badge}`}>
          <Icon size={20} weight="duotone" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 grow">
          <span className="font-bebas text-xl text-slate-500 tracking-wide">{actividad.horario}</span>
          <span className="font-medium text-slate-700">{actividad.modulo}</span>
        </div>
        {actividad.lugar && (
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-400 uppercase tracking-wider">
            <MapPin size={14} weight="fill" />
            {actividad.lugar}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-100">
         <div className={`absolute top-0 left-0 h-1.5 w-full ${config.bg}`} />

        <div className="p-6 sm:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            
            <div className="space-y-4 md:w-3/4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${config.badge}`}>
                  {actividad.modulo}
                </span>
                {actividad.lugar && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <MapPin size={14} weight="bold" />
                    {actividad.lugar}
                  </span>
                )}
              </div>

              <div>
                <div className={`mb-1 font-bebas text-4xl leading-none ${config.text}`}>
                  {actividad.horario}
                </div>
                {actividad.tema && (
                  <h3 className="text-lg font-bold leading-snug text-[#0B3C5D] sm:text-xl">
                    {actividad.tema}
                  </h3>
                )}
              </div>

              {actividad.responsables?.length ? (
                <div className="mt-2 pt-2 border-t border-slate-100/80">
                  <div className="flex items-center gap-1.5 mb-1.5">
                     <Users size={16} className="text-[#E11D2E]" weight="duotone" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                       Encargados
                     </span>
                  </div>
                  
                  <div className="text-sm font-semibold text-[#0B3C5D]/90 pl-0.5">
                    {showVertical ? (
                      <div className="flex flex-col gap-1 mt-1">
                        {actividad.responsables.map((resp, i) => (
                          <span key={i} className="block">{resp}</span>
                        ))}
                      </div>
                    ) : (
                      <span>{actividad.responsables.join(", ")}</span>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 shrink-0 items-start md:items-end pt-4 md:pt-0">
              
              {actividad.materialUrl && (
                <Link
                  href={actividad.materialUrl}
                  target="_blank"
                  className={`group/btn flex w-full md:w-auto items-center justify-center md:justify-end gap-2 rounded-full border px-5 py-2.5 text-xs font-bold transition-all ${
                    isEncuesta 
                    ? "bg-[#3BAA75] border-[#3BAA75] text-white hover:bg-[#2d8a5d] shadow-md shadow-green-900/10" 
                    : "bg-slate-50 border-slate-200 text-[#0B3C5D] hover:border-[#E11D2E]/30 hover:bg-white hover:text-[#E11D2E]"
                  }`}
                >
                  {isEncuesta ? <ClipboardText size={18} weight="fill" /> : <BookOpen size={18} weight="duotone" />}
                  {isEncuesta ? "COMPLETAR ENCUESTA" : "MATERIAL"}
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              )}

              {actividad.objetivos && (
                <button
                  onClick={() => setOpenObjectives(true)}
                  className="btn-ghost group/btn flex w-full md:w-auto items-center justify-center md:justify-end gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2.5 text-xs font-bold text-[#1E5AA8] transition-all hover:border-[#1E5AA8]/30 hover:bg-white hover:shadow-sm"
                >
                  <Target size={18} weight="duotone" />
                  OBJETIVOS
                </button>
              )}

            </div>
          </div>
        </div>
      </div>

      {openObjectives && actividad.objetivos && (
        <ObjectivesModal 
          title={actividad.tema || actividad.modulo}
          objectives={actividad.objetivos}
          onClose={() => setOpenObjectives(false)}
        />
      )}
    </>
  );
}