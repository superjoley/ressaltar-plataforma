'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Client360Preview() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="clientes" className="py-24 lg:py-32 bg-bg-primary px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left / Text */}
        <div className="lg:w-1/2 flex flex-col gap-8 order-1 lg:order-1">
           <div className="flex flex-col gap-6">
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
               E cada cliente deixa de ser uma coleção de mensagens.
             </h2>
             <p className="text-lg text-text-secondary">
               Cada cliente terá uma visão própria da operação.
             </p>
           </div>
           
           <div className="mt-8 border-l border-border pl-6 py-2">
             <p className="text-xl leading-relaxed text-text-muted italic">
               Em vez de perguntar:<br />
               &ldquo;Como está esse cliente?&rdquo;<br />
               <span className="text-text-primary font-medium not-italic mt-2 inline-block">a resposta estará na tela.</span>
             </p>
           </div>
        </div>

        {/* Right / Mock */}
        <div className="lg:w-1/2 w-full order-2 lg:order-2">
           <div className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="p-6 border-b border-border flex flex-col gap-4">
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded bg-white/5 border border-border flex items-center justify-center text-text-primary font-bold text-xl">IO</div>
                       <div>
                         <h3 className="text-text-primary font-medium text-lg">IMED Odonto</h3>
                         <span className="text-sm text-text-muted">Cliente desde Mar 2024</span>
                       </div>
                    </div>
                    <span className="text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Saudável
                    </span>
                 </div>

                 {/* Tabs */}
                 <div className="flex gap-4 overflow-x-auto text-sm font-medium hide-scrollbar mt-2">
                   <span className="text-text-primary border-b-2 border-text-primary pb-1 whitespace-nowrap cursor-pointer">Conteúdos</span>
                   <span className="text-text-muted hover:text-text-secondary pb-1 whitespace-nowrap cursor-pointer transition-colors">Tarefas</span>
                   <span className="text-text-muted hover:text-text-secondary pb-1 whitespace-nowrap cursor-pointer transition-colors">Equipe</span>
                   <span className="text-text-muted hover:text-text-secondary pb-1 whitespace-nowrap cursor-pointer transition-colors">Calendário</span>
                   <span className="text-text-muted hover:text-text-secondary pb-1 whitespace-nowrap cursor-pointer transition-colors">Onboarding</span>
                   <span className="text-text-muted hover:text-text-secondary pb-1 whitespace-nowrap cursor-pointer transition-colors">Pendências</span>
                 </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 bg-bg-secondary/20 flex flex-col gap-6">
                 
                 {/* Summary Cards */}
                 <div className="grid grid-cols-3 gap-3">
                    <div className="bg-surface-elevated border border-border rounded-lg p-3 flex flex-col gap-1">
                       <span className="text-2xl font-medium text-text-primary">8</span>
                       <span className="text-xs text-text-muted">Conteúdos este mês</span>
                    </div>
                    <div className="bg-surface-elevated border border-border rounded-lg p-3 flex flex-col gap-1">
                       <span className="text-2xl font-medium text-text-primary">3</span>
                       <span className="text-xs text-text-muted">Tarefas abertas</span>
                    </div>
                    <div className="bg-surface-elevated border border-border rounded-lg p-3 flex flex-col gap-1">
                       <span className="text-2xl font-medium text-amber-500">1</span>
                       <span className="text-xs text-text-muted">Pendência</span>
                    </div>
                 </div>

                 {/* Middle section */}
                 <div className="grid grid-cols-2 gap-4">
                    {/* Deadlines */}
                    <div className="bg-surface-elevated border border-border rounded-lg p-4 flex flex-col gap-3">
                       <h4 className="text-sm font-medium text-text-primary">Próximos Prazos</h4>
                       <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center text-sm">
                             <span className="text-text-secondary truncate pr-2">Calendário Outubro</span>
                             <span className="text-text-muted text-xs whitespace-nowrap">03 Out</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                             <span className="text-text-secondary truncate pr-2">Revisão campanha</span>
                             <span className="text-text-muted text-xs whitespace-nowrap">05 Out</span>
                          </div>
                       </div>
                    </div>

                    {/* Team & Health */}
                    <div className="flex flex-col gap-4">
                       <div className="bg-surface-elevated border border-border rounded-lg p-4 flex justify-between items-center">
                          <h4 className="text-sm font-medium text-text-primary">Equipe</h4>
                          <div className="flex -space-x-2">
                             <div className="w-7 h-7 rounded-full border border-surface-elevated bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium z-30" title="Lucas">L</div>
                             <div className="w-7 h-7 rounded-full border border-surface-elevated bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-medium z-20" title="Maria">M</div>
                             <div className="w-7 h-7 rounded-full border border-surface-elevated bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-medium z-10" title="João">J</div>
                          </div>
                       </div>
                       
                       <div className="bg-surface-elevated border border-border rounded-lg p-4 flex justify-between items-center">
                          <h4 className="text-sm font-medium text-text-primary">Score de Saúde</h4>
                          <div className="flex items-center gap-2">
                             <span className="text-emerald-400 font-medium">82</span>
                             <span className="text-text-muted text-xs">/ 100</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Activity timeline (small) */}
                 <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-medium text-text-muted mb-3 uppercase tracking-wider">Atividade Recente</h4>
                    <div className="flex flex-col gap-3">
                       <div className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5"></div>
                          <div className="flex flex-col">
                             <span className="text-sm text-text-secondary">Feedback aprovado pelo cliente</span>
                             <span className="text-xs text-text-muted">Há 2 horas por João</span>
                          </div>
                       </div>
                       <div className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5"></div>
                          <div className="flex flex-col">
                             <span className="text-sm text-text-secondary">Nova versão do design enviada</span>
                             <span className="text-xs text-text-muted">Ontem por Maria</span>
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </motion.section>
  );
}
