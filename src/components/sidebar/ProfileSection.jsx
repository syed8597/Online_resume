import React from 'react';
import { Code } from 'lucide-react';
import profileImage from '../.././assets/profileImage.jpg';

export default function ProfileSection() {
  return (
    <div className="text-center mb-8">
      <div className="relative inline-block">
        <img
      src={profileImage}
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover object-top border-4 border-emerald-400 shadow-xl mx-auto mb-4"
    />
        <div className="absolute -bottom-2 -right-2 bg-emerald-400 rounded-full p-2">
          <Code size={20} className="text-slate-900" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        Syed Haneef Ullah
      </h1>
      <p className="text- text-sm">Full Stack AI Engineer</p>
    </div>
  );
}