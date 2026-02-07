"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { List, X } from "phosphor-react";
import SafeSpaceModal from "@/components/safe/SafeSpaceModal";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [openSafe, setOpenSafe] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Animación de entrada
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  // 2. Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Animación menú mobile
  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { scale: 0.9, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [open]);

  return (
    <>
      {/* --- HEADER --- */}
      <header
        ref={navRef}
        className={`
          fixed inset-x-0 top-0 z-50 transition-all duration-500
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-sm py-2"
              : "bg-transparent py-4"
          }
        `}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          
          {/* MARCA (Siempre visible) */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <span
              className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full shadow-lg shadow-blue-900/20 transition-transform group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #1E5AA8, #E11D2E)",
              }}
            >
              <span className="absolute inset-0 animate-pulse bg-white/20" />
              <span className="z-10 h-3 w-3 rounded-full bg-white shadow-sm" />
            </span>

            <div className="leading-tight">
              <div className="font-bebas text-xl tracking-[0.15em] text-[#0B3C5D]">
                LA VOZ <span className="text-[#E11D2E]">INNOVATE</span>
              </div>
              <div className="font-body text-[10px] uppercase tracking-widest text-[#0B3C5D]/60 hidden sm:block">
                APDES Tucumán · 2026
              </div>
            </div>
          </Link>

          {/* DERECHA */}
          <div className="flex items-center gap-6">
            
            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-[#0B3C5D]/70">
              <Link
                href="/agenda"
                className="relative group hover:text-[#E11D2E] transition-colors"
              >
                AGENDA
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#E11D2E] transition-all group-hover:w-full" />
              </Link>
            </nav>

            {/* Separador Desktop */}
            <div className="hidden md:block h-6 w-[1px] bg-[#0B3C5D]/10" />

            {/* BOTÓN ESPACIO SEGURO (Desktop) */}
            <button
              onClick={() => setOpenSafe(true)}
              className="
                hidden md:inline-flex
                items-center justify-center
                rounded-full
                bg-[#E11D2E]
                px-5 py-2
                text-xs font-bold tracking-wide
                text-white
                shadow-md shadow-red-500/20
                hover:bg-[#c91b2a]
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              ESPACIO SEGURO
            </button>

            {/* ESCUDOS (SOLO DESKTOP - AQUÍ ESTABA EL ERROR) */}
            {/* Agregué 'hidden md:flex' para que no ocupen espacio en celular */}
            <div className="hidden md:flex items-center gap-2">
              <Image
                src="/escudos/logo-colegi.png"
                alt="Colegio Pucará"
                width={36}
                height={36}
                className="transition-transform hover:scale-110 hover:brightness-110 shrink-0"
              />
              <Image
                src="/escudos/logo-cerros.png"
                alt="Colegio Los Cerros"
                width={36}
                height={36}
                className="transition-transform hover:scale-110 hover:brightness-110 shrink-0"
              />
              <Image
                src="/escudos/logo-cerritos.png"
                alt="Jardín Los Cerritos"
                width={36}
                height={36}
                className="transition-transform hover:scale-110 hover:brightness-110 shrink-0"
              />
            </div>

            {/* TOGGLE MENÚ (Mobile) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/80 ring-1 ring-[#0B3C5D]/10 shadow-sm active:scale-95 transition-all shrink-0"
            >
              <List size={22} className="text-[#0B3C5D]" />
            </button>
          </div>
        </div>
      </header>

      {/* --- MENÚ MOBILE --- */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-end p-4">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          <div
            ref={menuRef}
            className="relative w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-[#0B3C5D]/10"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-bebas text-lg tracking-wider text-[#0B3C5D]">
                MENÚ
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B3C5D] transition-colors"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                href="/agenda"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl bg-[#EAF2FB] p-4 font-bold text-[#0B3C5D] active:scale-[0.98] transition-transform"
              >
                VER AGENDA
                <List size={18} className="opacity-50" />
              </Link>

              <button
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => setOpenSafe(true), 100);
                }}
                className="flex items-center justify-between rounded-xl bg-[#E11D2E] p-4 font-bold text-white shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform"
              >
                ESPACIO SEGURO
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium uppercase tracking-wider">
                  Obligatorio
                </span>
              </button>
            </nav>

            {/* ESCUDOS EN MENÚ MOBILE (Aquí sí se ven bien) */}
            <div className="mt-6 flex justify-center gap-6 border-t border-slate-100 pt-6 opacity-80">
              <Image src="/escudos/logo-colegi.png" width={40} height={40} alt="Pucará" className="object-contain" />
              <Image src="/escudos/logo-cerros.png" width={40} height={40} alt="Cerros" className="object-contain" />
              <Image src="/escudos/logo-cerritos.png" width={40} height={40} alt="Cerritos" className="object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL ESPACIO SEGURO --- */}
      {openSafe && (
        <SafeSpaceModal onClose={() => setOpenSafe(false)} />
      )}
    </>
  );
}