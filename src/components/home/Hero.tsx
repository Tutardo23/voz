"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Calendar, MapPin, MicrophoneStage, ArrowRight, Star } from "phosphor-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Fondo Base (Las manchas grandes y borrosas de fondo)
      gsap.to(".aurora-blob", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        scale: "random(0.95, 1.05)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2,
        force3D: true,
      });

      // 2. NUEVO EFECTO: Pelotas Flotantes Pequeñas (Más definidas)
      gsap.to(".floating-orb", {
        y: "random(-30, 30)", // Flotan más arriba y abajo
        x: "random(-15, 15)",
        rotation: "random(0, 360)", // Giran lentamente
        scale: "random(0.9, 1.1)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        },
        force3D: true,
      });

      // 3. Entrada de la Tarjeta
      gsap.from(".glass-card", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
        clearProps: "transform"
      });

      // 4. Entrada del Texto
      gsap.from(".hero-content", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden bg-[#FAFCFF] px-4 pt-20 pb-10"
    >
      {/* --- CAPA 1: FONDO ANIMADO BASE (Muy borroso atrás) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div className="aurora-blob will-change-transform absolute -top-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full bg-[#1E5AA8]/20 blur-[60px] md:blur-[80px]" />
        <div className="aurora-blob will-change-transform absolute top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-[#E11D2E]/15 blur-[80px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* --- CAPA 2: NUEVAS PELOTAS FLOTANTES (Más chicas y definidas) --- */}
      {/* Están entre el fondo y la tarjeta. Z-index 5. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu z-5">
        {/* Orb Azul Izquierda */}
        <div className="floating-orb will-change-transform absolute top-1/4 left-[5%] h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-tr from-[#1E5AA8] to-blue-400 opacity-80 blur-[1px] shadow-lg shadow-blue-900/20" />
        
        {/* Orb Roja Derecha Abajo */}
        <div className="floating-orb will-change-transform absolute bottom-1/4 right-[5%] h-28 w-28 md:h-40 md:w-40 rounded-full bg-gradient-to-bl from-[#E11D2E] to-orange-400 opacity-80 blur-[1px] shadow-lg shadow-red-900/20" />
        
        {/* Orb Pequeña Arriba Derecha */}
        <div className="floating-orb will-change-transform absolute top-[15%] right-[20%] h-16 w-16 rounded-full bg-blue-200/60 blur-[2px]" />
      </div>


      {/* --- CAPA 3: TARJETA DE CRISTAL (Z-Index 10, encima de todo) --- */}
      <div className="glass-card relative z-10 w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white/40 shadow-2xl shadow-blue-900/10 ring-1 ring-white/60 backdrop-blur-xl transform-gpu">
        
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

        <div className="flex flex-col items-center px-6 py-10 text-center md:px-12 md:py-16">
          
          {/* Badge */}
          <div className="hero-content mb-4 flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 shadow-sm ring-1 ring-[#0B3C5D]/5">
            <Star weight="fill" className="text-[#E11D2E] text-xs" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B3C5D]">
              Evento Anual
            </span>
            <Star weight="fill" className="text-[#E11D2E] text-xs" />
          </div>

          {/* TÍTULO + MICROFONO */}
          <div className="hero-content relative mt-2">
             {/* Micrófono Flotante */}
             <div className="absolute -right-2 -top-6 rotate-12 md:-right-10 md:top-2">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3C5D] text-white shadow-lg md:h-16 md:w-16">
                 <MicrophoneStage size={24} weight="duotone" className="md:w-8 md:h-8" />
               </div>
             </div>

             <h1 className="flex flex-col items-center leading-[0.85]">
              <span className="font-bebas text-6xl text-[#0B3C5D] sm:text-[6rem] md:text-[7.5rem]">
                LA VOZ
              </span>
              <span className="font-bebas text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#E11D2E] to-[#ff4d4d] sm:text-[6rem] md:text-[7.5rem]">
                INNOVATE
              </span>
            </h1>
          </div>

          {/* TEXTO */}
          <div className="hero-content mt-6 max-w-2xl space-y-3">
            <p className="text-lg font-medium leading-relaxed text-[#0B3C5D] sm:text-xl">
              "Escuchar, acompañar y transformar desde nuestra voz".
            </p>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              Una jornada intensiva de formación para potenciar las habilidades comunicativas y emocionales en el aula.
            </p>
          </div>

          {/* BOTONES */}
          <div className="hero-content mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/agenda"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3C5D] px-8 py-3.5 text-white transition-all hover:bg-[#1E5AA8] hover:shadow-lg hover:shadow-blue-900/20 sm:w-auto sm:py-4"
            >
              <Calendar size={20} weight="fill" />
              <span className="text-sm font-bold tracking-wider">VER AGENDA</span>
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <button
               onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
               className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[#0B3C5D] ring-1 ring-slate-200 transition-all hover:ring-[#E11D2E]/40 sm:w-auto sm:py-4"
            >
              <span className="text-sm font-bold tracking-wider">CONOCÉ MÁS</span>
            </button>
          </div>

          {/* --- DATA BAR --- */}
          <div className="hero-content mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 border-t border-[#0B3C5D]/10 pt-6 sm:grid-cols-2 sm:mt-12 sm:pt-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">FECHA DE INICIO</span>
              <span className="font-bebas text-xl text-[#0B3C5D] tracking-wide sm:text-2xl">
                10 DE FEBRERO
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 border-t border-[#0B3C5D]/10 pt-4 sm:border-t-0 sm:border-l sm:pt-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">SEDES</span>
              <div className="flex items-center gap-2 font-bebas text-lg text-[#0B3C5D] tracking-wide sm:text-xl">
                <MapPin size={16} weight="fill" className="text-[#E11D2E]" />
                <span>PUCARÁ · LOS CERROS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}