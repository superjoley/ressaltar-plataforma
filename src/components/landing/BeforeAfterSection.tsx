import React from 'react';

export default function BeforeAfterSection() {
  const beforeItems = [
    'WhatsApp para uma coisa.',
    'Planilha para outra.',
    'Drive para outra.',
    'Mensagem privada para outra.',
    'E alguém tentando juntar tudo mentalmente.',
  ];

  const afterItems = [
    'Cliente.',
    'Demanda.',
    'Responsável.',
    'Prazo.',
    'Arquivo.',
    'Comentário.',
    'Status.',
    'Histórico.',
  ];

  return (
    <section className="bg-bg-secondary py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row relative">
          
          {/* Antes */}
          <div className="flex-1 pb-16 lg:pb-0 lg:pr-16 relative">
            <h3 className="uppercase tracking-widest text-text-muted text-sm font-semibold mb-12">Antes</h3>
            <div className="relative h-[400px] w-full flex flex-col justify-center items-center">
              {beforeItems.map((item, index) => {
                const zIndex = index;
                
                // Hardcoding standard classes for tailwind safely
                const rotateClasses = [
                  "-rotate-6 -translate-x-4",
                  "rotate-3 translate-x-6",
                  "-rotate-3 -translate-x-8",
                  "rotate-6 translate-x-2",
                  "-rotate-2 translate-y-4"
                ];

                return (
                  <div
                    key={index}
                    className={`absolute p-4 bg-surface border border-border rounded-lg shadow-lg text-text-secondary text-sm md:text-base whitespace-nowrap transition-transform ${rotateClasses[index % rotateClasses.length]}`}
                    style={{ zIndex, top: `${20 + index * 15}%` }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px bg-border absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"></div>
          <div className="block lg:hidden h-px bg-border w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>

          {/* Depois */}
          <div className="flex-1 pt-16 lg:pt-0 lg:pl-16 relative mt-8 lg:mt-0">
            <h3 className="uppercase tracking-widest text-[#983BFA] text-sm font-semibold mb-12">Depois</h3>
            <div className="flex flex-col gap-4 justify-center h-full">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#983BFA]"></div>
                  <span className="text-text-primary text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlight at bottom */}
        <div className="mt-24 lg:mt-32 text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-[#983BFA] to-[#F840FD]">
            No mesmo fluxo.
          </p>
        </div>
      </div>
    </section>
  );
}
