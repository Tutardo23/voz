"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, Globe, Lightning } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B3C5D] text-white py-6 overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* 1. MARCA + REDES (Todo junto para ahorrar espacio) */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-3">
              <h2 className="font-bebas text-2xl tracking-wide text-white">
                LA VOZ <span className="text-[#E11D2E]">INNOVATE</span>
              </h2>
              <span className="h-4 w-[1px] bg-white/20" />
              <div className="flex gap-2">
                <Link href="https://www.instagram.com/apdestucuman" target="_blank" className="text-white/60 hover:text-[#E11D2E] transition-colors">
                  <InstagramLogo size={18} weight="fill" />
                </Link>
                <Link href="https://apdes.edu.ar" target="_blank" className="text-white/60 hover:text-[#1E5AA8] transition-colors">
                  <Globe size={18} weight="bold" />
                </Link>
              </div>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">
              APDES Tucumán 2026
            </p>
          </div>

          {/* 2. LOGOS ORGANIZAN (Horizontal siempre) */}
          <div className="flex items-center gap-3 bg-black/10 rounded-full px-4 py-1.5 border border-white/5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-white/30 mr-1">
              Organizan
            </span>
            <Image src="/escudos/logo-colegio.png" alt="Pucará" width={24} height={24} className="w-6 h-6 object-contain" />
            <div className="h-3 w-[1px] bg-white/10" />
            <Image src="/escudos/logo-cerros.png" alt="Cerros" width={24} height={24} className="w-6 h-6 object-contain" />
            <div className="h-3 w-[1px] bg-white/10" />
            <Image src="/escudos/logo-cerritos.png" alt="Cerritos" width={24} height={24} className="w-6 h-6 object-contain" />
          </div>

          {/* 3. CREDITOS (Torx) */}
          <div className="flex flex-col items-center md:items-end text-[10px] text-white/30 font-medium">
            <span>© 2026 APDES</span>
            <div className="flex items-center gap-1 select-none mt-0.5">
               <span>by</span>
               <span className="font-bold text-white/80 flex items-center gap-0.5">
                 TORX <Lightning size={10} weight="fill" className="text-[#E11D2E]" />
               </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}