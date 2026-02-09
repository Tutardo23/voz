"use client";

import { X, Target } from "phosphor-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ObjectivesModalProps {
  title: string;
  objectives: string[];
  onClose: () => void;
}

export default function ObjectivesModal({ title, objectives, onClose }: ObjectivesModalProps) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)", delay: 0.1 }
    );
  }, []);

  const handleClose = () => {
    gsap.to(cardRef.current, { scale: 0.8, opacity: 0, duration: 0.2 });
    gsap.to(overlayRef.current, { 
      opacity: 0, 
      duration: 0.2, 
      onComplete: onClose 
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Tarjeta */}
      <div 
        ref={cardRef}
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 md:p-8 shadow-2xl ring-1 ring-black/5"
      >
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FB] text-[#1E5AA8]">
            <Target size={24} weight="duotone" />
          </div>
          <div>
            <h3 className="font-bebas text-2xl text-[#0B3C5D] tracking-wide">OBJETIVOS</h3>
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              {title}
            </p>
          </div>
        </div>

        <ul className="space-y-4">
          {objectives.map((obj, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E11D2E]" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleClose}
            className="rounded-lg bg-[#0B3C5D] px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#1E5AA8]"
          >
            ENTENDIDO
          </button>
        </div>

      </div>
    </div>
  );
}