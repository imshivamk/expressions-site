import {Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">
              About EXPRESSIONS
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              The most awaited techno-cultural event organized by IMED, Pune.
              Join us for innovation and fun.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/imed_pune_official?igsh=OXdlaHI5eTQwYmhi">
                <div className="size rounded-full flex items-center justify-center hover:bg-gray-200/40 cursor-pointer transition">
                  <Instagram size={44} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© 2025 EXPRESSIONS FEST - IMED, Pune. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
