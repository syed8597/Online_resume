import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Education() {
  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'University of the Punjab Lahore',
      period: '2021–2025'
    },
    {
      degree: 'Intermediate in Pre-Engineering',
      institution: 'Central Asia Institute Gilgit Baltistan',
      period: '2018–2020'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <SectionHeader title="Education" icon={GraduationCap} />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border-l-4 border-emerald-400 pl-6 py-2 hover:border-cyan-400 transition-colors"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-1">{edu.degree}</h3>
            <p className="text-emerald-600 font-medium mb-1">{edu.institution}</p>
            <p className="text-slate-500 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}