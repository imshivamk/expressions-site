import React, { useEffect, useState } from "react";

const Hero = () => {
  const [date, setDate] = useState(new Date(1770458400000 - Date.now()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date(1770458400000 - Date.now()));
    }, 1000);
  }, []);

  return (
    <section
      id="home"
      className="relative 
      flex flex-col items-center max-lg:justify-center gap-10
      pt-6 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 overflow-hidden"
    >
      <div className="flex-shrink-0 flex items-center">
        <div className="w-40 h-16 bg-red-500 rounded flex items-center justify-center text-white text-3xl font-bold">
          LOGO
        </div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          XPRESSIONS <span className="text-blue-400">2026</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 mb-8 font-light">
          Get Ready for the Most Immersive Techno-Cultural Fest. Innovation
          meets creativity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            Register Now
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition">
            View Schedule
          </button>
        </div>

        {/* Countdown Grid - Compact */}
        {/* {console.log(Date.now())}
        <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-4">
          {["Days", "Hours", "Mins", "Secs"].map((label, idx) => (

            <div key={idx} className="text-center">

              <span className="block text-2xl md:text-3xl font-bold font-mono">
                
              </span>


              <span className="text-[10px] md:text-xs uppercase tracking-wider text-indigo-200">
                {label}
              </span>

            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-4">
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl">{date.getDate()}</span>
            <span className="font-semibold text-xl">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl">{date.getHours()}</span>
            <span className="font-semibold text-xl">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl">{date.getMinutes()}</span>
            <span className="font-semibold text-xl">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-2xl">{date.getSeconds()}</span>
            <span className="font-semibold text-xl">Seconds</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
