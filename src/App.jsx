import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MobileMenuButton from './components/MobileMenuButton';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex flex-col lg:flex-row">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MainContent />
      </div>
      {/* Overlay for mobile menu
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}
    </div>
  );
}