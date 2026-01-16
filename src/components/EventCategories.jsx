import React from 'react';

const EventCategories = () => {
  const events = [
    { title: "Cultural", date: "March 11-13" },
    { title: "Technical", date: "March 11-13" },
    { title: "Manet", date: "March 11-13" },
    { title: "Food-Tech", date: "March 11-13" },
    { title: "Management", date: "March 11-13" },
    { title: "Design", date: "March 11-13" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Event Categories</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {events.map((evt, idx) => (
            <div key={idx} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 flex flex-col items-center text-center cursor-pointer hover:-translate-y-1">
              {/* Icon Placeholder */}
              <div className="w-12 h-12 mb-4 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                 <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
              </div>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">{evt.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{evt.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;