'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão', href: '#visao' },
    { name: 'Operação', href: '#operacao' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Inteligência', href: '#inteligencia' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-text-primary font-bold text-lg tracking-tight">
          Ressaltar Plataforma
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/login"
            className="text-sm font-medium text-text-primary px-4 py-2 rounded-full bg-gradient-to-r from-[#983BFA] to-[#F840FD] hover:opacity-90 transition-opacity"
          >
            Acessar plataforma
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-text-primary px-4 py-2 rounded-full bg-gradient-to-r from-[#983BFA] to-[#F840FD] hover:opacity-90 transition-opacity text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acessar plataforma
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
