"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MagnifyingGlass, User, UsersThree, X, IdentificationCard, Buildings, GraduationCap } from "phosphor-react";
import { teams } from "@/lib/data/teams"; // Asegurate que la ruta sea correcta

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function TeamSearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Lógica de búsqueda
  const person =
    query.length >= 3
      ? teams.find((t) => normalize(t.nombre).includes(normalize(query)))
      : null;

  // Filtramos para que no te muestre a ti mismo en la lista de "compañeros"
  const teamMates = person
    ? teams.filter((t) => t.equipo === person.equipo && t.nombre !== person.nombre)
    : [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop Blur */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#0B3C5D]/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div 
        ref={modalRef}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-[#0B3C5D]/10"
      >
        {/* Header con gradiente sutil */}
        <div className="bg-slate-50 px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="font-bebas text-2xl tracking-wide text-[#0B3C5D]">
              BUSCÁ TU EQUIPO
            </h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Base de datos 2026
            </p>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full bg-slate-200/50 p-2 text-slate-400 hover:bg-[#E11D2E] hover:text-white transition-all"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        <div className="p-6">
          {/* Input de Búsqueda */}
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#1E5AA8] transition-colors">
              <MagnifyingGlass size={20} weight="bold" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ingresá tu nombre o apellido..."
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm font-semibold text-[#0B3C5D] placeholder:text-slate-400 focus:border-[#1E5AA8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E5AA8]/10 transition-all"
              autoFocus
            />
          </div>

          {/* RESULTADOS */}
          <div className="mt-6 min-h-[120px]">
            {query.length < 3 ? (
              // Estado Inicial
              <div className="flex flex-col items-center justify-center py-8 text-center opacity-50">
                <UsersThree size={48} className="text-slate-300 mb-2" weight="duotone" />
                <p className="text-sm font-medium text-slate-400">
                  Escribí al menos 3 letras para buscar...
                </p>
              </div>
            ) : person ? (
              // ENCONTRADO
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Tarjeta Principal (Estilo ID Card) */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B3C5D] to-[#1E5AA8] p-5 text-white shadow-lg shadow-blue-900/20">
                  {/* Decoración de fondo */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                  
                  <div className="relative z-10 flex gap-4">
                    {/* Avatar Placeholder */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                      <User size={28} weight="fill" />
                    </div>
                    
                    <div>
                      <h4 className="font-bebas text-2xl tracking-wide leading-none">
                        {person.nombre}
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-md bg-black/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/90">
                           <Buildings size={12} weight="fill" />
                           {person.colegio}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                           <GraduationCap size={12} weight="fill" />
                           {person.nivel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Nombre del Equipo Destacado */}
                  <div className="mt-5 border-t border-white/10 pt-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">
                      Equipo Asignado
                    </p>
                    <p className="font-bebas text-3xl text-white tracking-wider">
                      {person.equipo}
                    </p>
                  </div>
                </div>

                {/* Lista de Compañeros */}
                {teamMates.length > 0 && (
                  <div className="mt-5">
                    <div className="flex items-center gap-2 mb-3">
                      <UsersThree size={18} className="text-[#E11D2E]" weight="duotone" />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Tus Compañeros
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {teamMates.map((mate) => (
                        <div 
                          key={mate.nombre} 
                          className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 transition-colors hover:border-[#1E5AA8]/30 hover:bg-white"
                        >
                          <div className="h-6 w-6 rounded-full bg-[#EAF2FB] flex items-center justify-center text-[#1E5AA8]">
                            <User size={12} weight="bold" />
                          </div>
                          <span className="text-xs font-bold text-[#0B3C5D]">
                            {mate.nombre}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // NO ENCONTRADO
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <IdentificationCard size={32} weight="duotone" />
                </div>
                <p className="text-lg font-bold text-[#0B3C5D]">
                  No encontramos resultados
                </p>
                <p className="text-sm text-slate-500 max-w-[200px]">
                  Probá buscando solo por tu apellido o verificá la ortografía.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer (Barra inferior decorativa) */}
        <div className="h-2 w-full bg-gradient-to-r from-[#1E5AA8] via-[#0B3C5D] to-[#E11D2E]" />
      </div>
    </div>
  );
}