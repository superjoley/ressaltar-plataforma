import React from 'react'

export default function ProblemSection() {
  return (
    <section className="w-full bg-bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 flex flex-col items-center text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-text-primary tracking-tight mb-4">
            O problema não é só organização.
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary font-sans">
            É o que a falta dela começa a causar.
          </p>
        </div>

        <div className="flex flex-col space-y-6 text-text-secondary text-lg md:text-xl leading-relaxed font-sans w-full text-left md:text-center max-w-2xl mx-auto mb-24">
          <p>Quando a operação fica espalhada, você perde previsibilidade.</p>
          <p>Começa a depender das pessoas lembrarem das coisas.</p>
          <p>Os atrasos aparecem tarde demais.</p>
          <p>As demandas ficam sem dono.</p>
          <p>O cliente cobra algo que o time jurava estar resolvido.</p>
          <p>E a liderança passa mais tempo perguntando o que está acontecendo do que realmente gerenciando.</p>
        </div>

        <div className="relative w-full py-16 border-t border-b border-border bg-gradient-to-b from-transparent via-[#983BFA]/5 to-transparent">
          {/* Subtle top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#983BFA] to-transparent"></div>
          
          <p className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-text-primary leading-tight max-w-2xl mx-auto">
            Uma operação não deveria funcionar à base de <br className="hidden md:block" />
            <span className="gradient-text">&ldquo;alguém viu isso?&rdquo;</span>.
          </p>
        </div>

      </div>
    </section>
  )
}
