'use client';
import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  { id: 1, name: 'Planejamento', active: false },
  { id: 2, name: 'Produção', active: false },
  { id: 3, name: 'Revisão', active: true },
  { id: 4, name: 'Aprovação', active: false },
  { id: 5, name: 'Agendamento', active: false },
  { id: 6, name: 'Publicado', active: false },
];

export default function WorkflowSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-bg-secondary py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight whitespace-pre-line mb-6">
          {`Da ideia até a publicação.\nSem perder o fio no caminho.`}
        </h2>
        <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-16">
          Um conteúdo não deveria simplesmente existir como &quot;uma arte que alguém está fazendo&quot;. Ele passa por um processo.
        </p>

        {/* Pipeline visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mb-16">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative z-10 flex flex-col items-center justify-center w-full lg:w-40 h-24 rounded-2xl border bg-surface transition-colors ${
                  stage.active ? 'border-[#983BFA] shadow-[0_0_15px_rgba(152,59,250,0.15)]' : 'border-border'
                }`}
              >
                <span className={`text-sm font-mono mb-2 ${stage.active ? 'text-[#983BFA]' : 'text-text-muted'}`}>
                  0{stage.id}
                </span>
                <span className={`font-medium ${stage.active ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {stage.name}
                </span>
              </motion.div>
              {index < stages.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  className="hidden lg:block w-8 border-t border-dashed border-border z-0"
                ></motion.div>
              )}
              {index < stages.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  className="block lg:hidden h-8 border-l border-dashed border-border z-0"
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto whitespace-pre-line">
          {`Cada etapa precisa ter responsável, prazo e histórico.\nAssim, quando algo parar, você saberá onde parou e por quê.`}
        </p>
      </div>
    </motion.section>
  );
}
