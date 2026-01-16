import React from 'react';

const MarqueeGallery = () => {
  // We duplicate the list to ensure seamless looping
  const numberOfImages = 8; // Reduced count slightly as images are bigger
  const imageIndices = [...Array(numberOfImages).keys()];
  const loopItems = [...imageIndices, ...imageIndices];

  return (
    <div className="w-full bg-slate-900 py-12 overflow-hidden border-b border-slate-800">
        {/* Constraint Container: 
           max-w-6xl ensures it doesn't go edge-to-edge on large screens (approx 70-80%).
           mx-auto centers it.
           The [mask-image:...] adds a fade effect on the left and right edges.
        */}
        <div className="max-w-6xl mx-auto px-4 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused] gap-6">
                {loopItems.map((i, idx) => (
                    <div key={idx} className="inline-block shrink-0 rounded-2xl overflow-hidden relative group">
                         {/* INCREASED IMAGE SIZE HERE */}
                         {/* w-80 h-56 on mobile, w-[500px] h-[320px] on desktop */}
                         <div className="w-80 h-56 md:w-[500px] md:h-[320px] bg-red-600 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center relative overflow-hidden">
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <span className="text-white/70 text-xl font-bold z-10 relative">Gallery IMG {i + 1}</span>
                            
                            {/* Red box placeholder effect */}
                            <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default MarqueeGallery;