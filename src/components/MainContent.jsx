import React from 'react';
import Profile from './main/Profile';
import Education from './main/Education';
import Experience from './main/Experience';
import Projects from './main/Projects';

export default function MainContent() {
  return (
    <main className="flex-1 p-6 lg:p-12 lg:ml-0">
      <div className="max-w-4xl mx-auto space-y-8">
        <Profile />
        <Education />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}