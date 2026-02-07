"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calendar, MapPin, MicrophoneStage, ArrowRight, Star } from "phosphor-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Fondo: Las nebulosas se mueven lento
      gsap.to(".aurora-blob", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        scale: "random(0.9, 1.1)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });

      // 2. Entrada de la Tarjeta
      gsap.from(".glass-card", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1,
      });

      // 3. Entrada del Texto
      gsap.from(".hero-content", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden bg-[#FAFCFF] px-4 pt-20 pb-10"
    >
      {/* --- FONDO ANIMADO (AURORAS) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob absolute -top-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full bg-[#1E5AA8]/20 blur-[80px]" />
        <div className="aurora-blob absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-[#E11D2E]/15 blur-[100px]" />
        <div className="aurora-blob absolute bottom-0 left-[20%] h-[40vh] w-[40vh] rounded-full bg-indigo-200/30 blur-[60px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* --- TARJETA DE CRISTAL --- */}
      <div className="glass-card relative z-10 w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white/40 shadow-2xl shadow-blue-900/10 ring-1 ring-white/60 backdrop-blur-xl">
        
        {/* Borde superior brillante */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

        <div className="flex flex-col items-center px-6 py-12 text-center md:px-12 md:py-16">
          
          {/* Badge */}
          <div className="hero-content mb-6 flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 shadow-sm ring-1 ring-[#0B3C5D]/5">
            <Star weight="fill" className="text-[#E11D2E] text-xs" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B3C5D]">
              Evento Anual Docente
            </span>
            <Star weight="fill" className="text-[#E11D2E] text-xs" />
          </div>

          {/* TÍTULO */}
          <div className="hero-content relative">
             <h1 className="flex flex-col items-center leading-[0.85]">
              <span className="font-bebas text-[4.5rem] text-[#0B3C5D] sm:text-[6rem] md:text-[7.5rem]">
                LA VOZ
              </span>
              <span className="font-bebas text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#E11D2E] to-[#ff4d4d] sm:text-[6rem] md:text-[7.5rem]">
                INNOVATE
              </span>
            </h1>
            
            {/* Decoración flotante (Desktop) */}
            <div className="absolute -right-8 top-4 hidden lg:block rotate-12">
               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B3C5D] text-white shadow-lg">
                 <MicrophoneStage size={32} weight="duotone" />
               </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="hero-content mt-8 max-w-2xl space-y-4">
            <p className="text-lg font-medium leading-relaxed text-[#0B3C5D] sm:text-xl">
              "Escuchar, acompañar y transformar desde nuestra voz".
            </p>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              Una jornada intensiva de formación para potenciar las habilidades comunicativas y emocionales en el aula. Diseñado exclusivamente para el cuerpo docente de APDES Tucumán.
            </p>
          </div>

          {/* BOTONES */}
          <div className="hero-content mt-10 flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/agenda"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3C5D] px-8 py-4 text-white transition-all hover:bg-[#1E5AA8] hover:shadow-lg hover:shadow-blue-900/20 sm:w-auto"
            >
              <Calendar size={20} weight="fill" />
              <span className="text-sm font-bold tracking-wider">VER AGENDA</span>
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <button
               onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
               className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#0B3C5D] ring-1 ring-slate-200 transition-all hover:ring-[#E11D2E]/40 sm:w-auto"
            >
              <span className="text-sm font-bold tracking-wider">CONOCÉ MÁS</span>
            </button>
          </div>

          {/* --- DATA BAR (SOLO LO IMPORTANTE) --- */}
          <div className="hero-content mt-12 grid w-full max-w-2xl grid-cols-1 gap-6 border-t border-[#0B3C5D]/10 pt-8 sm:grid-cols-2">
            
            {/* Dato 1: Fecha */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">FECHA DE INICIO</span>
              <span className="font-bebas text-2xl text-[#0B3C5D] tracking-wide">
                10 DE FEBRERO
              </span>
            </div>

            {/* Dato 2: Sedes */}
            <div className="flex flex-col items-center gap-1 border-t border-[#0B3C5D]/10 pt-4 sm:border-t-0 sm:border-l sm:pt-0">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">SEDES</span>
              <div className="flex items-center gap-2 font-bebas text-xl text-[#0B3C5D] tracking-wide">
                <MapPin size={18} weight="fill" className="text-[#E11D2E]" />
                <span>PUCARÁ · LOS CERROS</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}