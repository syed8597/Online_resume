import React from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenuButton({ menuOpen, setMenuOpen }) {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden fixed top-4 right-4 z-50 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-all"
    >
      {menuOpen ? <Menu size={24} /> : <X size={24} />}
    </button>
  );
}
