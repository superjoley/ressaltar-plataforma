'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle2, Clock, Calendar, AlertCircle } from 'lucide-react';

export default function HealthScoreSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="inteligencia" className="py-24 lg:py-32 bg-bg-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-text-primary leading-tight">
              Nem todo cliente que <br className="hidden lg:block" />
              está em silêncio <span className="text-text-muted">está bem.</span>
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Alguns clientes parecem tranquilos até o problema aparecer. Por isso, a plataforma deverá identificar sinais operacionais como atrasos, falta de movimentação, onboarding parado, frequência de entrega abaixo do combinado e pendências acumuladas.
            </p>

            {/* Health States Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                SAUDÁVEL
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                ATENÇÃO
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                RISCO
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                CRÍTICO
              </div>
            </div>

            <p className="text-sm text-text-muted pt-8 font-mono uppercase tracking-wider">
              Para que a operação consiga agir antes da cobrança chegar.
            </p>
          </div>

          {/* Mock UI */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent blur-3xl rounded-full"></div>
            
            <div className="relative flex flex-col gap-4">
              
              {/* Card 1: IMED Odonto */}
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-xl shadow-black/20 transform transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-text-primary font-medium">IMED Odonto</h3>
                    <p className="text-sm text-text-muted">Score Operacional</p>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Saudável
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/5"
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        className="text-emerald-500"
                        strokeDasharray="82, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-text-primary">
                      82
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-emerald-500 w-[82%] rounded-full"></div>
                    </div>
                    <p className="text-xs text-text-muted">Operação rodando conforme o esperado</p>
                  </div>
                </div>
              </div>

              {/* Card 2: GT Travel */}
              <div className="bg-surface-elevated border border-amber-500/20 rounded-2xl p-6 shadow-xl shadow-black/20 relative overflow-hidden z-10 transform transition-all hover:-translate-y-1 scale-105">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-text-primary font-medium">GT Travel</h3>
                    <p className="text-sm text-text-muted">Score Operacional</p>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-medium">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Atenção
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-6">
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/5"
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        className="text-amber-500"
                        strokeDasharray="68, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-text-primary">
                      68
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-amber-500 w-[68%] rounded-full"></div>
                    </div>
                    <p className="text-xs text-text-muted">Múltiplos alertas identificados</p>
                  </div>
                </div>

                {/* Motives */}
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-amber-500">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    4 tarefas atrasadas
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-amber-500">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    8 dias sem movimentação
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-amber-500">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    Calendário incompleto
                  </div>
                </div>
              </div>

              {/* Card 3: Cliente X */}
              <div className="bg-surface border border-border rounded-2xl p-6 shadow-xl shadow-black/20 opacity-75 transform transition-all hover:opacity-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-text-primary font-medium">Cliente X</h3>
                    <p className="text-sm text-text-muted">Score Operacional</p>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 text-xs font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Risco
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/5"
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        className="text-orange-500"
                        strokeDasharray="47, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-text-primary">
                      47
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-orange-500 w-[47%] rounded-full"></div>
                    </div>
                    <p className="text-xs text-text-muted">Ação imediata necessária</p>
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
