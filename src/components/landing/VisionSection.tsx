import React from 'react';

export default function VisionSection() {
  const items = [
    'o que precisa ser feito hoje;',
    'quem é responsável por cada demanda;',
    'quais clientes precisam de atenção;',
    'o que está atrasado;',
    'quais conteúdos aguardam revisão;',
    'o que depende do cliente;',
    'como cada squad está performando;',
    'e tudo que aconteceu antes de você chegar naquela tela.'
  ];

  return (
    <section id="visao" className="bg-bg-secondary py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-text-primary mb-6 tracking-tight">
            E se tudo estivesse no mesmo lugar?
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary mb-10">
            Imagine abrir uma única plataforma e conseguir enxergar:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto mb-10">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#983BFA] mt-2.5 shrink-0 opacity-80" />
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-text-primary font-medium">
            Essa é a visão da Ressaltar Plataforma.
          </p>
        </div>

        {/* Command Center Mock */}
        <div className="w-full max-w-5xl relative">
          <div className="absolute inset-0 bg-[#983BFA]/5 blur-[100px] rounded-full" />
          
          <div className="relative border border-border bg-surface rounded-2xl p-6 lg:p-8 flex flex-col gap-6 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="w-64 h-8 bg-surface-elevated rounded-md border border-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-surface-elevated border border-border rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-bg-secondary mb-3" />
                      <div className="w-16 h-4 bg-border rounded mb-2" />
                      <div className="w-24 h-6 bg-text-secondary/20 rounded" />
                    </div>
                  ))}
                </div>

                {/* Main Content Area */}
                <div className="bg-surface-elevated border border-border rounded-xl p-5 min-h-[300px]">
                  <div className="w-32 h-5 bg-border rounded mb-6" />
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-border bg-surface">
                        <div className="w-4 h-4 rounded bg-border shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="w-3/4 h-4 bg-text-secondary/20 rounded" />
                          <div className="w-1/4 h-3 bg-border rounded" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-bg-secondary shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Activity Feed */}
                <div className="bg-surface-elevated border border-border rounded-xl p-5 flex-1">
                  <div className="w-24 h-5 bg-border rounded mb-6" />
                  <div className="space-y-6">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#983BFA]/50 mt-1.5 shrink-0" />
                        <div className="space-y-2 flex-1">
                          <div className="w-full h-3 bg-text-secondary/20 rounded" />
                          <div className="w-2/3 h-3 bg-text-secondary/20 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
