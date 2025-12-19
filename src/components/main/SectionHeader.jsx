import React from 'react';

export default function SectionHeader({ title, icon: Icon }) {
  return (
    <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
      {Icon && <Icon size={28} className="text-emerald-500" />}
      {title}
    </h2>
  );
}