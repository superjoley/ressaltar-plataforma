import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-text-primary font-medium">Ressaltar Plataforma</span>
          <span>Sistema operacional interno da Ressaltar.</span>
        </div>
        
        <div>
          © Ressaltar
        </div>
      </div>
    </footer>
  );
}
