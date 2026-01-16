import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Participants', value: '30k+' },
    { label: 'Institutes', value: '300+' },
    { label: 'Speakers', value: '200+' },
    { label: 'Events', value: '150+' },
  ];

  return (
    <div className="bg-slate-50 py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;