'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ManifestoSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-bg-primary py-32 lg:py-40 px-6 relative">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Headlines */}
        <div className="mb-20">
          <h2 className="text-2xl lg:text-4xl font-medium text-text-primary mb-4 tracking-tight">
            Não queremos uma equipe trabalhando mais.
          </h2>
          <h2 className="text-2xl lg:text-4xl font-medium text-text-primary tracking-tight">
            Queremos uma equipe trabalhando com <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[#983BFA] to-[#F840FD]">mais clareza.</span>
          </h2>
        </div>

        {/* Copy */}
        <div className="max-w-2xl flex flex-col gap-12 text-lg lg:text-xl text-text-secondary leading-relaxed font-light">
          <p>
            A Ressaltar Plataforma nasce para tirar a operação da cabeça das pessoas e transformar processos em algo visível, organizado e acompanhável.
          </p>
          <p>
            Para que o time consiga executar.
          </p>
          <p>
            Para que a liderança consiga enxergar.
          </p>
          <p>
            E para que o cliente receba uma operação mais consistente.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
