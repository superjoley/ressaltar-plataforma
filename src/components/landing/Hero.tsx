'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge & Eyebrow */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="px-3 py-1 rounded-full border border-border bg-surface text-text-muted text-xs uppercase tracking-widest font-semibold">
            Em desenvolvimento
          </div>
          <div className="text-[#983BFA] text-sm uppercase tracking-widest font-semibold">
            Ressaltar Plataforma
          </div>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight mb-6 max-w-4xl">
          Sua operação não precisa depender da sua memória.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-6 max-w-3xl leading-relaxed">
          Se tarefas se perdem no WhatsApp, prazos ficam na cabeça de alguém, clientes dependem de planilhas diferentes e ninguém sabe exatamente o que está atrasado, o problema não é falta de esforço. É falta de uma operação centralizada.
        </p>
        <p className="text-base text-text-muted mb-10 max-w-2xl">
          Estamos construindo um ambiente onde clientes, pessoas, demandas, conteúdos e gestão finalmente conversam entre si.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            href="#visao"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#983BFA] to-[#F840FD] text-text-primary font-medium hover:opacity-90 transition-opacity"
          >
            Conhecer a plataforma
          </Link>
          <Link
            href="#operacao"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-border text-text-primary font-medium hover:bg-surface transition-colors"
          >
            Ver como vai funcionar
          </Link>
        </div>

        {/* Mock Dashboard */}
        <div className="w-full max-w-5xl relative perspective-1000">
          <div className="relative rounded-xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/50 transform-gpu hover:scale-[1.01] transition-transform duration-500 flex aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
            
            {/* Sidebar Mock */}
            <div className="w-16 md:w-56 bg-bg-secondary border-r border-border flex flex-col p-4 gap-2">
              <div className="h-8 w-8 rounded bg-[#983BFA]/20 mb-6 flex items-center justify-center text-[#983BFA] font-bold shrink-0">R</div>
              
              <div className="flex items-center gap-3 px-2 py-2 rounded-md bg-surface-elevated text-text-primary text-sm font-medium">
                <div className="w-4 h-4 rounded-sm bg-text-primary/20 shrink-0" />
                <span className="hidden md:block">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-text-muted text-sm">
                <div className="w-4 h-4 rounded-sm bg-text-muted/20 shrink-0" />
                <span className="hidden md:block">Clientes</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-text-muted text-sm">
                <div className="w-4 h-4 rounded-sm bg-text-muted/20 shrink-0" />
                <span className="hidden md:block">Demandas</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-text-muted text-sm">
                <div className="w-4 h-4 rounded-sm bg-text-muted/20 shrink-0" />
                <span className="hidden md:block">Conteúdos</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-text-muted text-sm">
                <div className="w-4 h-4 rounded-sm bg-text-muted/20 shrink-0" />
                <span className="hidden md:block">Equipe</span>
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-text-muted text-sm">
                <div className="w-4 h-4 rounded-sm bg-text-muted/20 shrink-0" />
                <span className="hidden md:block">Agenda</span>
              </div>
            </div>

            {/* Main Content Mock */}
            <div className="flex-1 bg-bg-primary flex flex-col min-w-0">
              {/* Topbar */}
              <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0">
                <div className="w-32 md:w-48 h-8 rounded-md bg-surface-elevated border border-border flex items-center px-3">
                  <div className="w-3 h-3 rounded-full bg-text-muted/30 shrink-0" />
                  <div className="w-12 md:w-20 h-2 bg-text-muted/20 rounded ml-2" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#983BFA] to-[#F840FD] shrink-0" />
              </div>

              {/* Dashboard Content */}
              <div className="p-4 md:p-6 flex-1 overflow-hidden flex flex-col gap-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Clientes ativos', value: '24' },
                    { label: 'Demandas abertas', value: '147' },
                    { label: 'Atrasadas', value: '12', alert: true },
                    { label: 'No prazo', value: '89%' },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-surface border border-border rounded-lg p-3 md:p-4 flex flex-col gap-2">
                      <div className="text-text-muted text-[10px] md:text-xs font-medium uppercase tracking-wider truncate">{kpi.label}</div>
                      <div className={`text-xl md:text-2xl font-bold ${kpi.alert ? 'text-[#F840FD]' : 'text-text-primary'}`}>{kpi.value}</div>
                    </div>
                  ))}
                </div>

                {/* Task List */}
                <div className="bg-surface border border-border rounded-lg flex-1 overflow-hidden flex flex-col min-h-0">
                  <div className="border-b border-border p-4 shrink-0">
                    <div className="w-32 h-4 bg-text-primary/20 rounded" />
                  </div>
                  <div className="flex flex-col overflow-y-auto">
                    {[
                      { title: 'Revisar copy — IMED Odonto', status: 'Em andamento', color: 'bg-blue-500/20 text-blue-400', initial: 'JD' },
                      { title: 'Subir campanha — Atleta Suplementos', status: 'Atrasada', color: 'bg-[#F840FD]/20 text-[#F840FD]', initial: 'AL' },
                      { title: 'Aprovação de layout — Clínica Nova', status: 'Revisão', color: 'bg-[#983BFA]/20 text-[#983BFA]', initial: 'MR' },
                    ].map((task, i) => (
                      <div key={i} className="border-b border-border last:border-0 p-3 md:p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-4 h-4 rounded border border-border shrink-0" />
                          <div className="text-xs md:text-sm text-text-primary font-medium truncate">{task.title}</div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                          <div className={`hidden sm:block px-2 py-1 rounded text-[10px] md:text-xs font-medium ${task.color}`}>
                            {task.status}
                          </div>
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-[9px] md:text-[10px] text-text-secondary shrink-0">
                            {task.initial}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Fade overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
