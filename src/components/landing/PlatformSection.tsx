'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PlatformSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-bg-primary py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl text-text-secondary font-medium tracking-tight">
              Não estamos criando mais uma lista de tarefas.
            </h3>
            <h2 className="text-3xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              Estamos construindo um sistema operacional para a agência.
            </h2>
          </div>
          
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Uma estrutura onde a demanda nasce, recebe responsável, prazo, contexto, passa pela produção, revisão, aprovação e conclusão sem precisar desaparecer entre mensagens, planilhas e ferramentas diferentes.
          </p>
        </div>

        {/* Visual Comparison */}
        <div className="w-full lg:w-[480px] shrink-0 border border-border bg-surface rounded-2xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#983BFA]/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col gap-12">
            {/* Negatives */}
            <div className="space-y-6">
              {[
                'menos procura',
                'menos cobrança',
                'menos "eu achei que já tinham feito"'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-text-muted/50 font-mono text-xl">—</span>
                  <span className="text-text-muted text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Positive */}
            <div className="flex items-center gap-6">
              <span className="text-[#983BFA] font-mono text-2xl lg:text-3xl">+</span>
              <span className="text-3xl lg:text-5xl font-bold gradient-text">
                mais clareza
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </motion.section>
  );
}
