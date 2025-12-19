import React from 'react';
import ProfileSection from './sidebar/ProfileSection';
import ContactInfo from './sidebar/ContactInfo';
import Skills from './sidebar/Skills';
import SocialLinks from './sidebar/SocialLinks';

export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <aside
      className={`
    fixed top-0 left-0 h-screen
    bg-gradient-to-b from-slate-800 to-slate-900
    text-white p-8 overflow-y-auto
    transition-all duration-300 ease-in-out
    z-40 shadow-2xl

    ${menuOpen ? 'translate-x-0 w-full' : '-translate-x-full w-full'}

    lg:translate-x-0 lg:sticky lg:w-96
  `}
    >

      <ProfileSection />
      
      <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-6"></div>
      
      <ContactInfo menuOpen={menuOpen}/>
      <Skills />
      <SocialLinks />
    </aside>
  );
}