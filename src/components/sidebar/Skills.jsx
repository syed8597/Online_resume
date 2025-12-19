import React from 'react';
import { Code } from 'lucide-react';

export default function Skills() {
  const skills = [
    'HTML & CSS', 'Tailwind Css','Bootstrap','JavaScript','React', 'Python', 'Machine Learning',
    'Data Science', 'Deep Learning', 'Django', 'NLP', 'Streamlit', 'Langchain','langGraph','N8N','Git & GitHub','REST APIs','SQL','NoSQL','Docker','Vector Store Databases', 'Software Development','Railway','Hugging Face', 'API Integration','Vercel','Firebase','Cursor','Warp','ChatGPT','MidJourney','claud.ai','DeepSeek'
  ];

  return (
    <section className="mb-8">
      <h3 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
        <Code size={18} />
        Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-slate-700 rounded-full text-xs font-medium hover:bg-emerald-500 hover:scale-105 transition-all cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}