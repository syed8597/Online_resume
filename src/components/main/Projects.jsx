import React from 'react';
import { Code } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const projects = [
    {
      title: 'AI Chatbot',
      description: 'A Reach, Django and  OpenAI chatbot that give answer about the FAQs of wheat ration shop'
    },
    {
      title: 'AI Powered Property Advisor',
      description: 'AI powered website which empower investors and buyers with intelligent, data-driven insights to make smarter property decisions using AI, real-time data, and personalized recommendations'
    },
    {
      title: 'Browser Automation',
      description: 'Web-based browser automation by browseruse to automatically apply for jobs.'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <SectionHeader title="Projects" icon={Code} />
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-xl border-2 border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}