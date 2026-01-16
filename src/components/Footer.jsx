import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">About EXPRESSIONS</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              The most awaited techno-cultural event organized by IMED, Pune. Join us for innovation and fun.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Registration', 'Schedule', 'Gallery', 'Sponsors'].map(link => (
                <li key={link}><a href="#" className="hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Pune, Maharashtra</li>
              <li>info@imedbvdu.edu.in</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
                {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer transition">
                        {/* Social Icon Placeholder */}
                    </div>
                ))}
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