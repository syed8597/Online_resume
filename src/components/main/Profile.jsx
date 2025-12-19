import React from 'react';
import SectionHeader from './SectionHeader';
import { User } from 'lucide-react';


export default function Profile() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <SectionHeader title="Profile"  icon={User}/>
      <p className="text-slate-600 leading-relaxed">
        I am a motivated and detail-oriented Full Stack Developer passionate about Artificial Intelligence, web design, and teaching. My goal is to create interactive and intelligent applications that help people learn and grow.
      </p>
    </section>
  );
}