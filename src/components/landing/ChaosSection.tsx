'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MessageCircle, Grid, Folder, Mail, CheckSquare } from 'lucide-react'

export default function ChaosSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="operacao"
      ref={sectionRef}
      className="w-full bg-bg-secondary py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className={`flex flex-col space-y-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-text-primary tracking-tight whitespace-pre-line leading-tight">
              {'Todo mundo está trabalhando.\nMas ninguém consegue enxergar a operação inteira.'}
            </h2>
            
            <div className="flex flex-col space-y-4 text-text-secondary text-lg leading-relaxed font-sans">
              <p>Uma demanda chega no WhatsApp.</p>
              <p>Outra ficou no grupo do cliente.</p>
              <p>O prazo está numa planilha.</p>
              <p>O designer recebeu pelo privado.</p>
              <p>O Social Media acha que já foi aprovado.</p>
              <p>A liderança só descobre que atrasou quando alguém pergunta.</p>
            </div>
            
            <div className="border-l-2 border-[#983BFA] pl-6 py-2">
              <p className="text-xl md:text-2xl font-medium text-text-primary">
                &ldquo;A equipe trabalhou muito… <span className="gradient-text">mas onde exatamente estamos?</span>&rdquo;
              </p>
            </div>
            
            <p className="text-text-muted text-lg pt-4">
              Não deveria ser tão difícil responder isso.
            </p>
          </div>

          {/* Visual Content */}
          <div className={`relative h-[400px] lg:h-[600px] w-full flex items-center justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Connecting dashed lines from center to icons */}
              <svg className="absolute inset-0 w-full h-full z-0 animate-dash" style={{ strokeDasharray: '4 4' }}>
                <line x1="50%" y1="50%" x2="15%" y2="10%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="5%" y2="75%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="-5%" y2="40%" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
              </svg>

              {/* Central Point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-surface-elevated border border-border flex items-center justify-center z-20 shadow-2xl">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-bg-secondary flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                  <span className="text-text-muted text-lg lg:text-xl font-mono font-medium">?</span>
                </div>
              </div>

              {/* Scattered Elements */}
              {/* WhatsApp */}
              <div className="absolute top-[10%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-surface border border-border rounded-xl p-3 lg:p-4 flex flex-col items-center gap-2 shadow-lg animate-float-3">
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-text-secondary" />
                <span className="text-[10px] lg:text-xs text-text-muted font-mono">Chat</span>
              </div>
                </div>

              {/* Planilha */}
              <div className="absolute top-[20%] right-[10%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-surface border border-border rounded-xl p-3 lg:p-4 flex flex-col items-center gap-2 shadow-lg animate-float-2">
                <Grid className="w-5 h-5 lg:w-6 lg:h-6 text-text-secondary" />
                <span className="text-[10px] lg:text-xs text-text-muted font-mono">Planilha</span>
              </div>
                </div>

              {/* Drive */}
              <div className="absolute bottom-[15%] right-[20%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-surface border border-border rounded-xl p-3 lg:p-4 flex flex-col items-center gap-2 shadow-lg animate-float-3">
                <Folder className="w-5 h-5 lg:w-6 lg:h-6 text-text-secondary" />
                <span className="text-[10px] lg:text-xs text-text-muted font-mono">Drive</span>
              </div>
                </div>

              {/* Mensagem */}
              <div className="absolute bottom-[25%] left-[5%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-surface border border-border rounded-xl p-3 lg:p-4 flex flex-col items-center gap-2 shadow-lg animate-float-2">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-text-secondary" />
                <span className="text-[10px] lg:text-xs text-text-muted font-mono">Privado</span>
              </div>
                </div>

              {/* Checklist */}
              <div className="absolute top-[60%] left-[-5%] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-surface border border-border rounded-xl p-3 lg:p-4 flex flex-col items-center gap-2 shadow-lg animate-float-1">
                <CheckSquare className="w-5 h-5 lg:w-6 lg:h-6 text-text-secondary" />
                <span className="text-[10px] lg:text-xs text-text-muted font-mono">Checklist</span>
              </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
