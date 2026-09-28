import React from 'react';

const questions = [
  'Quantas demandas estão abertas?',
  'O que está atrasado?',
  'Quais clientes estão parados?',
  'Quem está sobrecarregado?',
  'Onde existe retrabalho?',
  'O que está aguardando cliente?',
  'Qual squad precisa de atenção?',
];

const kpis = [
  { label: 'Clientes ativos', value: '24', trend: '+2' },
  { label: 'Demandas abertas', value: '147', trend: '' },
  { label: 'Atrasos', value: '12', trend: '-3' },
  { label: 'Clientes em risco', value: '3', trend: '' },
  { label: 'Entregas no prazo', value: '89%', trend: '+4%' },
  { label: 'Retrabalho', value: '7%', trend: '-2%' },
];

export default function LeadershipSection() {
  return (
    <section className="bg-bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Questions */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-6">
              Gestão não pode depender de perguntar para dez pessoas.
            </h2>
            <p className="text-lg lg:text-xl text-text-secondary mb-10">
              A liderança precisa conseguir abrir uma tela e entender a operação.
            </p>

            <div className="space-y-4 mb-12 flex flex-col">
              {questions.map((q, idx) => (
                <div key={idx} className="flex items-center gap-3 text-text-secondary bg-surface border border-border rounded-xl px-5 py-3 shadow-sm w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-text-muted"></div>
                  <span>{q}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-text-secondary mb-8">
              A plataforma será construída para transformar essas respostas em dados.
            </p>

            <div className="text-2xl font-medium tracking-tight">
              <span className="text-text-secondary block mb-1">Menos sensação.</span>
              <span className="gradient-text text-3xl font-semibold">Mais visibilidade.</span>
            </div>
          </div>

          {/* Right Column: Mock Dashboard */}
          <div className="bg-surface-elevated border border-border rounded-2xl p-8 relative overflow-hidden shadow-2xl">
            {/* Window header */}
            <div className="flex items-center gap-2 mb-8 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="ml-4 text-sm text-text-muted font-mono">/app/dashboard</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="bg-surface border border-border rounded-xl p-4 flex flex-col justify-between">
                  <span className="text-sm text-text-secondary mb-2">{kpi.label}</span>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-semibold text-text-primary">{kpi.value}</span>
                    {kpi.trend && (
                      <span className="text-xs font-mono text-emerald-400">
                        {kpi.trend}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Chart Area */}
            <div className="bg-surface border border-border rounded-xl p-5 mb-4 h-32 flex items-end justify-between gap-2">
              {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                <div key={i} className="w-full bg-border rounded-t-sm" style={{ height: `${height}%` }}>
                  {i === 5 && <div className="w-full h-full bg-[#983BFA]/80 rounded-t-sm"></div>}
                </div>
              ))}
            </div>

            <p className="text-xs text-text-muted text-center mt-6">
              Dados ilustrativos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
