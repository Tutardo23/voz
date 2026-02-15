"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, X, GraduationCap, PenNib, FileText, ArrowRight, CaretRight, RocketLaunch } from "phosphor-react";

export default function SafeSpaceModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animación de entrada
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        modalRef.current,
        { scale: 0.95, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)", delay: 0.1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4">
      {/* Backdrop con Blur */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#0B3C5D]/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div 
        ref={modalRef}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-[#0B3C5D]/10 flex flex-col max-h-[90vh]"
      >
        {/* Decoración superior */}
        <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#1E5AA8] to-[#3BAA75]" />

        <div className="p-6 md:p-8 overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF2FB] text-[#1E5AA8]">
                <ShieldCheck size={28} weight="duotone" />
              </div>
              <div>
                <h3 className="font-bebas text-2xl tracking-wide text-[#0B3C5D]">
                  ESPACIOS SEGUROS
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#3BAA75]">
                  Compromiso Institucional
                </p>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-[#E11D2E] transition-colors"
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            El cumplimiento de estos requisitos es <strong>obligatorio</strong> para todos los docentes de APDES, garantizando un entorno cuidado para nuestros alumnos.
          </p>

          {/* Lista de Tareas */}
          <div className="mt-6 flex flex-col gap-3">
            
            <ActionRow 
              icon={GraduationCap}
              title="Curso de Protección"
              desc="Certificar antes del 15 de marzo de 2026."
              href="https://campus.apdes.edu.ar/courses/curso-proteccion/"
              cta="Ir al Campus"
            />

            <ActionRow 
              icon={PenNib}
              title="Firma del Protocolo"
              desc="Leer y firmar el documento institucional."
              href="https://apdeseduar.questionpro.com/nnapolotucuman"
              cta="Firmar ahora"
            />

            <ActionRow 
              icon={FileText}
              title="Antecedentes Penales"
              desc="Gestionar y enviar para el legajo personal."
              href="https://www.argentina.gob.ar/justicia/reincidencia/antecedentespenales"
              cta="Iniciar trámite"
            />

            {/* --- SECCIÓN: ONBOARDING --- */}
            <div className="mt-4 rounded-2xl bg-[#f8fafc] border-2 border-dashed border-[#1E5AA8]/20 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E5AA8] text-white shadow-md">
                  <RocketLaunch size={22} weight="fill" />
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-[#0B3C5D] tracking-wide leading-none">
                    BIENVENIDA ONBOARDING
                  </h4>
                  <p className="text-[10px] font-bold text-[#1E5AA8] uppercase tracking-wider">Nuevo ingreso</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Te invitamos a recorrer la propuesta de contenidos de Apdes para conocernos mejor. El curso es lineal para descubrir los recursos progresivamente.
              </p>
              
              <a 
                href="https://campus.apdes.edu.ar/courses/bienvenida-onboarding/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0B3C5D] py-3 text-xs font-bold text-white hover:bg-[#1E5AA8] transition-all shadow-sm group"
              >
                INGRESAR AL CURSO
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Botón Cerrar (Ahora en azul institucional) */}
          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-[#0B3C5D] py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#1E5AA8] hover:shadow-lg active:scale-[0.98]"
          >
            ENTENDIDO, GRACIAS
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionRow({ icon: Icon, title, desc, href, cta }: any) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-[#1E5AA8]/30 hover:bg-white hover:shadow-md cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0B3C5D] shadow-sm ring-1 ring-slate-100 group-hover:text-[#1E5AA8]">
          <Icon size={20} weight="duotone" />
        </div>
        <div>
          <h4 className="font-bold text-[#0B3C5D] text-sm group-hover:text-[#1E5AA8] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-slate-500 pr-2">
            {desc}
          </p>
        </div>
      </div>
      
      <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#1E5AA8] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
        {cta}
        <ArrowRight weight="bold" />
      </div>
      
      <CaretRight size={16} className="text-slate-300 sm:hidden" />
    </a>
  );
}