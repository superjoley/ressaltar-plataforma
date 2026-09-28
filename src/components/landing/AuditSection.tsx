import React from 'react';
import { Calendar, CheckCircle2, FileUp, RefreshCw, FolderOutput } from 'lucide-react';

export default function AuditSection() {
  return (
    <section id="governanca" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-text-primary">
                <span className="text-text-muted">&ldquo;</span>Quem mexeu nisso?<span className="text-text-muted">&rdquo;</span>
              </h2>
              <h3 className="text-xl text-text-secondary font-medium">
                A resposta não deveria depender da memória de ninguém.
              </h3>
            </div>
            
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Tenha rastreabilidade completa de tudo que acontece na sua operação. Cada ação é registrada com responsável e timestamp, criando um histórico auditável e seguro.
            </p>

            {/* Tracked changes list */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Mudança de prazo', 
                'Troca de responsável', 
                'Aprovação', 
                'Nova versão', 
                'Comentário', 
                'Alteração de status', 
                'Transferência'
              ].map((item, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-sm text-text-muted pt-8 font-mono uppercase tracking-wider">
              Organização também significa saber como chegamos até aqui.
            </p>
          </div>

          {/* Timeline Mock */}
          <div className="order-1 lg:order-2">
            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <h4 className="text-sm font-medium text-text-primary flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-text-muted" />
                  Histórico de Atividades
                </h4>
                <span className="text-xs text-text-muted">Hoje</span>
              </div>

              {/* Timeline */}
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-border before:via-border before:to-transparent">
                
                {/* Event 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-purple-500/20 text-purple-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:mx-0 mx-auto z-10">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">LS</div>
                        <span className="font-medium text-sm text-text-primary">Lucas</span>
                      </div>
                      <time className="text-xs text-text-muted">14:32</time>
                    </div>
                    <div className="text-sm text-text-secondary">
                      alterou o prazo da tarefa para <span className="text-text-primary">24 Out</span>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-emerald-500/20 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:mx-0 mx-auto z-10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">MA</div>
                        <span className="font-medium text-sm text-text-primary">Maria</span>
                      </div>
                      <time className="text-xs text-text-muted">15:10</time>
                    </div>
                    <div className="text-sm text-text-secondary">
                      aprovou o conteúdo de <span className="text-text-primary">Mídia Paga</span>
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-blue-500/20 text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:mx-0 mx-auto z-10">
                    <FileUp className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-[10px] font-bold text-white">JP</div>
                        <span className="font-medium text-sm text-text-primary">João</span>
                      </div>
                      <time className="text-xs text-text-muted">16:45</time>
                    </div>
                    <div className="text-sm text-text-secondary">
                      enviou uma nova versão do <span className="text-text-primary">Banners.zip</span>
                    </div>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-orange-500/20 text-orange-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow sm:mx-0 mx-auto z-10">
                    <FolderOutput className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-rose-600 flex items-center justify-center text-[10px] font-bold text-white">SY</div>
                        <span className="font-medium text-sm text-text-primary">Sistema</span>
                      </div>
                      <time className="text-xs text-text-muted">09:00</time>
                    </div>
                    <div className="text-sm text-text-secondary">
                      Cliente transferido para <span className="text-text-primary">Squad Growth</span>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Fade out bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
