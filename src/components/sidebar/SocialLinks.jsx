import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Linkedin, Github, Download, X } from 'lucide-react';

export default function SocialLinks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <h3 className="text-emerald-400 font-semibold mb-4">Social Links</h3>

      <div className="flex flex-wrap gap-4 justify-center">

        <a
          href="https://www.linkedin.com/in/syed-haneef-ullah-96a06526a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-blue-600"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a
          href="https://github.com/syed8597?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-purple-600"
        >
          <Github size={18} />
          GitHub
        </a>

        {/* DOWNLOAD BUTTON */}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-green-600"
        >
          <Download size={18} />
          Download CV
        </button>

      </div>

      {/* ===== MODAL USING PORTAL ===== */}
      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
            <div className="bg-slate-800 p-6 rounded-xl w-80 relative">

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>

              <h3 className="text-white mb-4 font-semibold">
                Select CV
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="/cv/Artificial Intelligence.pdf"
                  download
                  className="bg-slate-700 hover:bg-emerald-600 py-2 rounded text-white text-center"
                >
                  Artificial Intelligence
                </a>

                <a
                  href="/cv/Full Stack.pdf"
                  download
                  className="bg-slate-700 hover:bg-emerald-600 py-2 rounded text-white text-center"
                >
                  Full Stack
                </a>

                <a
                  href="/cv/Computer Teacher.pdf"
                  download
                  className="bg-slate-700 hover:bg-emerald-600 py-2 rounded text-white text-center"
                >
                  Computer Teacher
                </a>
              </div>

            </div>
          </div>,
          document.body
        )
      }
    </section>
  );
}
