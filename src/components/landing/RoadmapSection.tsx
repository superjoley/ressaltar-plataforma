'use client';
import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  { id: 1, name: 'Fundação', status: 'Em desenvolvimento' },
  { id: 2, name: 'Clientes e Pessoas', status: 'Em desenvolvimento' },
  { id: 3, name: 'Operação', status: 'Planejado' },
  { id: 4, name: 'Conteúdo', status: 'Planejado' },
  { id: 5, name: 'Onboarding', status: 'Planejado' },
  { id: 6, name: 'Comunicação', status: 'Planejado' },
  { id: 7, name: 'Gestão', status: 'Planejado' },
  { id: 8, name: 'Inteligência', status: 'Planejado' },
];

export default function RoadmapSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="roadmap" className="py-24 lg:py-32 bg-bg-secondary px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-medium text-text-primary tracking-tight mb-16 text-center">
          Estamos construindo isso por etapas.
        </h2>

        <div className="w-full flex flex-col gap-4">
          {phases.map((phase, index) => {
            const isDev = phase.status === 'Em desenvolvimento';
            return (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={phase.id} 
                className="flex items-center justify-between p-6 rounded-2xl bg-surface border border-border transition-colors hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-6">
                  <span className="text-text-muted font-mono text-sm">{String(phase.id).padStart(2, '0')}</span>
                  <span className="text-lg text-text-primary font-medium">{phase.name}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {isDev ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#983BFA]/10 border border-[#983BFA]/20">
                      <div className="w-2 h-2 rounded-full bg-[#983BFA] animate-pulse"></div>
                      <span className="text-xs font-medium text-[#983BFA]">{phase.status}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-text-muted"></div>
                      <span className="text-xs font-medium text-text-muted">{phase.status}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
