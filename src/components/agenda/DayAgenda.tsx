"use client";

import ActivityCard from "./ActivityCard";
import { UsersThree } from "phosphor-react";
import { useState } from "react";
import TeamSearchModal from "@/components/team/TeamSearchModal";

type Dia = {
  fecha: string;
  dia: string;
  actividades: any[];
};

export default function DayAgenda({ dia }: { dia: Dia }) {
  const [openTeam, setOpenTeam] = useState(false);

  return (
    <>
      <section className="relative w-full mx-auto max-w-5xl mb-16 last:mb-0">
        
        {/* --- HEADER STICKY (PEGADO) --- */}
        <div className="sticky top-[60px] z-30 mb-6 bg-[#FAFCFF]/95 backdrop-blur-md py-4 border-b border-[#0B3C5D]/5 shadow-sm transition-all">
          <div className="flex items-center justify-between px-3 md:px-2">
            
            {/* Título de la Fecha */}
            <div className="relative pl-3 md:pl-4">
              {/* Decoración lateral */}
              <div className="absolute left-0 top-1 h-full w-1 rounded-full bg-gradient-to-b from-[#E11D2E] to-[#1E5AA8]" />
              
              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-3">
                <h2 className="font-bebas text-4xl sm:text-5xl text-[#0B3C5D] leading-none">
                  {dia.fecha}
                </h2>
                <span className="text-sm font-bold tracking-widest text-[#E11D2E] uppercase mb-1">
                  {dia.dia}
                </span>
              </div>
            </div>

            {/* BOTÓN BUSCAR TEAM (CORREGIDO: Texto visible en móvil) */}
            <button
              onClick={() => setOpenTeam(true)}
              className="
                group flex items-center justify-center gap-2 
                rounded-full bg-[#EAF2FB] 
                px-3 py-2 sm:px-4 sm:py-2 
                text-[10px] sm:text-xs font-bold text-[#1E5AA8] 
                ring-1 ring-[#1E5AA8]/20 
                transition-all hover:bg-[#1E5AA8] hover:text-white
                shrink-0
              "
              type="button"
            >
              <UsersThree size={16} weight="fill" className="sm:w-[18px] sm:h-[18px]" />
              {/* Quitamos el 'hidden' para que se vea siempre */}
              <span className="tracking-wide">BUSCÁ TU EQUIPO</span>
            </button>

          </div>
        </div>

        {/* --- LISTA DE ACTIVIDADES --- */}
        <div className="flex flex-col gap-4 px-1">
          {dia.actividades.map((act, i) => (
            <ActivityCard key={i} actividad={act} />
          ))}
        </div>
      </section>

      {/* --- MODAL --- */}
      {openTeam && (
        <TeamSearchModal onClose={() => setOpenTeam(false)} />
      )}
    </>
  );
}