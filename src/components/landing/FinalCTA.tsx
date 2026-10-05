'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-32 lg:py-40 bg-bg-primary px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#983BFA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="uppercase tracking-widest text-[#983BFA] text-sm font-medium mb-6 block">
          RESSALTAR PLATAFORMA
        </span>
        
        <h2 className="text-3xl lg:text-5xl font-medium text-text-primary tracking-tight mb-8">
          A Ressaltar está construindo a própria forma de operar.
        </h2>
        
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
          Uma plataforma criada para transformar uma operação espalhada em um ambiente centralizado, rastreável e previsível.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link 
            href="#visao"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#983BFA] to-[#F840FD] text-text-primary font-medium hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(152,59,250,0.3)]"
          >
            Conhecer a visão da plataforma
          </Link>
          <span className="text-sm text-text-muted">Em desenvolvimento.</span>
        </div>
      </div>
    </motion.section>
  );
}
