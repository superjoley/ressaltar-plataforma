import React from 'react';

export default function MyWorkPreview() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left / Text */}
        <div className="lg:w-1/3 flex flex-col gap-6">
           <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary leading-tight">
             Cada pessoa começa o dia sabendo o que precisa fazer.
           </h2>
           <div className="flex flex-col gap-2 text-lg text-text-secondary">
             <p>Nada de abrir cinco grupos para descobrir prioridade.</p>
             <p>Nada de perguntar quem ficou responsável.</p>
             <p>Nada de depender de alguém lembrar você.</p>
           </div>
           
           <div className="mt-8 text-lg text-text-secondary leading-relaxed">
             <p>Porque produtividade começa antes da execução.</p>
             <p>Começa pela <span className="text-text-primary font-medium">clareza</span>.</p>
           </div>
        </div>

        {/* Right / Mock */}
        <div className="lg:w-2/3 w-full">
           <div className="bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header / Tabs */}
              <div className="border-b border-border p-4 flex gap-4 overflow-x-auto text-sm font-medium hide-scrollbar">
                <span className="text-text-primary bg-white/5 px-3 py-1.5 rounded-md whitespace-nowrap cursor-pointer transition-colors">HOJE</span>
                <span className="text-text-muted hover:text-text-secondary px-3 py-1.5 whitespace-nowrap cursor-pointer transition-colors">ESTA SEMANA</span>
                <span className="text-text-muted hover:text-text-secondary px-3 py-1.5 whitespace-nowrap cursor-pointer transition-colors">ATRASADAS</span>
                <span className="text-text-muted hover:text-text-secondary px-3 py-1.5 whitespace-nowrap cursor-pointer transition-colors">AGUARDANDO TERCEIROS</span>
                <span className="text-text-muted hover:text-text-secondary px-3 py-1.5 whitespace-nowrap cursor-pointer transition-colors">CONCLUÍDAS</span>
              </div>
              
              {/* List */}
              <div className="flex flex-col p-4 gap-3 bg-bg-secondary/30">
                 {/* Row 1 */}
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-border/50 hover:border-border transition-colors group cursor-default">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-text-primary font-medium">Revisar copy</span>
                       <span className="text-xs text-text-muted px-2 py-0.5 bg-white/5 rounded-full">IMED Odonto</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs">
                        <span className="text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Alta
                        </span>
                        <span className="text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Em andamento</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium border border-indigo-500/30">LS</div>
                      </div>
                      <span className="text-text-secondary min-w-[80px] text-right">Hoje</span>
                   </div>
                 </div>

                 {/* Row 2 */}
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-border/50 hover:border-border transition-colors group cursor-default">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-text-primary font-medium">Subir campanha</span>
                       <span className="text-xs text-text-muted px-2 py-0.5 bg-white/5 rounded-full">Atleta Suplementos</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs">
                        <span className="text-blue-400/80 bg-blue-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          Média
                        </span>
                        <span className="text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">Produção</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-medium border border-emerald-500/30">MR</div>
                      </div>
                      <span className="text-text-secondary min-w-[80px] text-right">Amanhã</span>
                   </div>
                 </div>

                 {/* Row 3 */}
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-border/50 hover:border-border transition-colors group cursor-default">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-text-primary font-medium">Aprovar calendário</span>
                       <span className="text-xs text-text-muted px-2 py-0.5 bg-white/5 rounded-full">Sushiko</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs">
                        <span className="text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          Alta
                        </span>
                        <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Revisão</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-medium border border-rose-500/30">JP</div>
                      </div>
                      <span className="text-text-secondary min-w-[80px] text-right">Hoje</span>
                   </div>
                 </div>

                 {/* Row 4 */}
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-border/50 hover:border-border transition-colors group cursor-default">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-text-primary font-medium">Criar criativo</span>
                       <span className="text-xs text-text-muted px-2 py-0.5 bg-white/5 rounded-full">GT Travel</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs">
                        <span className="text-gray-400 bg-white/5 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                          Baixa
                        </span>
                        <span className="text-gray-400 bg-white/5 px-2 py-0.5 rounded">Planejamento</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-medium border border-cyan-500/30">AC</div>
                      </div>
                      <span className="text-text-secondary min-w-[80px] text-right">Sex, 03 Out</span>
                   </div>
                 </div>

                 {/* Row 5 */}
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface border border-red-500/20 bg-red-500/5 hover:border-red-500/30 transition-colors group cursor-default">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-2">
                       <span className="text-text-primary font-medium">Finalizar briefing</span>
                       <span className="text-xs text-text-muted px-2 py-0.5 bg-white/5 rounded-full">Previne</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs">
                        <span className="text-red-500/90 bg-red-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          Urgente
                        </span>
                        <span className="text-red-400 bg-red-400/10 px-2 py-0.5 rounded">Atrasada</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium border border-indigo-500/30">LS</div>
                      </div>
                      <span className="text-red-400 min-w-[80px] text-right font-medium">Ontem</span>
                   </div>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
