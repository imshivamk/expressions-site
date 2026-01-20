import React, { useEffect, useState } from "react";
import myImage from "../assets/logo.jpeg";

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
      className="relative mt-10
      flex flex-col items-center max-lg:justify-center gap-10
      pt-6 pb-12 md:pt-32 md:pb-20
      w-full bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${myImage})` }}
    >
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl font-bold md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-9xl">X</span>PRESSIONS{" "}
          <span className="">2026</span>
        </h1>

        <p
          className="border-white/30 bg-purple-600/10
          text-white font-semibold m-6
          bg-clip-text text-transparent
               hover:bg-white/10 transition"
        >
          Get Ready for the Most Immersive Techno-Cultural Fest. Innovation
          meets creativity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSddnW3rdwo-u4u7LIf5i_jAu3dQbBRH76M6Q1RDuor_2Mj4AA/viewform?pli=1")
            }
            className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl"
          >
            Register Now
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://qr.scan.page/uploads/pdf/eWNjz9_34eaacca47800a3a.pdf")
            }
            className="border-2 border-white/30 bg-violet-500/40 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition"
          >
            View Rulebook
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://www.bvuniversity.edu.in/imed/")
            }
            className="border-2 border-white/30 bg-purple-600/40 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full
               hover:bg-white/10 transition"
          >
            Visit our offical website
          </button>

          <div className=""></div>
        </div>

        <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto border border-white/10 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4">
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
