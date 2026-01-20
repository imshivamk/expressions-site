import {Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center justify-center">
            
            <p className=" text-center text-lg leading-relaxed text-slate-400">
              Venue: BVDU IMED, More Vidyalaya Campus, Erandwane, Kothrud, Pune<br></br>
              For Queries,Contact-Aarya: +91 98229 28192,Prince: +91 82953 82085<br></br>
              Official Website:  <a href="https://www.bvuniversity.edu.in/imed/">https://www.bvuniversity.edu.in/imed/</a> <br></br>
              Event Website: <a href="https://imedexpressions.vercel.app/">https://imedexpressions.vercel.app/</a> <br></br>

            </p>
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
