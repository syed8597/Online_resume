import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const experience = [
    {
      title: 'Teacher (10th-12th Grade Students)',
      period: '2023 – 2024',
      description: 'Responsible for online teaching computer science to secondary an higher secondary students.'
    },
    {
      title: 'Full Stack AI Engineer(TechnologiaHub Lahore)',
      period: '2024-2025',
      description: 'Full Stack AI Engineer at TechnologiaHub, Lahore (2024–2025) — Built AI-powered full-stack applications with scalable backend and responsive front-end.'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <SectionHeader title="Experience" icon={Briefcase} />
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-emerald-400 pl-6 py-2 hover:border-cyan-400 transition-colors"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-1">{exp.title}</h3>
            <p className="text-emerald-600 font-medium mb-2">{exp.period}</p>
            <p className="text-slate-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}