import React from "react";
// 1. Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import img1 from "../assets/photos/img1.jpeg";
import img2 from "../assets/photos/img2.jpeg";
import img3 from "../assets/photos/img3.jpeg";
import img4 from "../assets/photos/img4.jpeg";
import logo from "../assets/logo.jpeg";
// 2. Import Swiper styles (these are necessary for it to work)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  LucideYoutube,
  TwitterIcon,
  X,
  XIcon,
  Youtube,
  YoutubeIcon,
} from "lucide-react";

// Custom styles for the pagination dots to match our theme (optional tweak)
const paginationStyles = `
  .swiper-pagination-bullet-active {
    background-color: #4f46e5 !important; /* Indigo-600 */
    width: 24px !important;
    border-radius: 8px !important;
  }
`;

const About = () => {
  // Placeholder data for carousel images
  const carouselImages = [logo, img4, img2, img3, img1];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      {/* Inject custom styles for Swiper dots */}
      <style>{paginationStyles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm pl-2 border-l-4 border-indigo-400">
              Discover
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              The Heart of <br className="hidden md:block" /> Innovation &
              Culture
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              EXPRESSIONS is the flagship techno-cultural event of IMED. It is a
              vibrant celebration where creativity meets technology, bringing
              together thousands of students, esteemed faculty, and industry
              leaders.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Beyond just an event, it's an experience. From electrifying live
              concerts and high-stakes technical hackathons to thought-provoking
              workshops and mesmerizing art installations, EXPRESSIONS 2026
              promises a weekend that defies expectations.
            </p>

            <button className="bg-indigo-50 text-indigo-700 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-100 transition-colors duration-300 flex items-center gap-2 group">
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-4 font-sans bg-indigo-50 text-purple-500 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-100 transition-colors duration-300 flex items-center gap-2 group">
            <a
              href="https://www.bvuniversity.edu.in/imed/"
              className="text-md hover:text-violet-800 cursor-pointer font-semibold text-black"
            >
              To Visit our official website <span className="text-blue-700">Click Here</span>
            </a>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="order-1 lg:order-2 relative z-10">
            {/* Abstract background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-[2rem] blur-2xl -z-10"></div>

            <div className="aspect-[4/3] lg:aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-100">
              {/* Swiper Implementation */}
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"} // Use a fade transition instead of slide
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="h-full w-full"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full relative">
                      {/* 2. Render the actual image */}
                      <img
                        src={image}
                        alt={`Highlight ${index + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Optional: Keep your overlay if you want text on top of the image */}
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                        <span className="text-white text-2xl font-bold tracking-wider"></span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
