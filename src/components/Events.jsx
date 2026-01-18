import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/events.json';

const Events = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Day 1');

  const tabs = [
    { id: 'Day 1', label: 'Day 1 (Feb 06)' },
    { id: 'Day 2', label: 'Day 2 (Feb 07)' },
    { id: 'Day 3', label: 'Day 3 (Feb 08)' },
  ];

  // Filter logic: Check if the event's schedule array includes the active tab
  const filteredEvents = activeTab === 'All' 
    ? data.events 
    : data.events.filter(event => event.schedule.includes(activeTab));

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4 tracking-tight">
            Xpressions 2026
          </h1>
          <p className="text-lg text-indigo-600 font-medium">Event Schedule & Registration</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm
                ${activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-indigo-200 transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-indigo-50'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              onClick={() => navigate(`/event/${event.id}`)}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="p-6 flex-grow">
                {/* Day Badge */}
                <div className="flex gap-2 mb-3">
                  {event.schedule.map(day => (
                    <span key={day} className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                      {day}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
                  {event.name}
                </h2>
                {event.tagline && (
                  <p className="text-gray-500 italic text-sm mb-4">"{event.tagline}"</p>
                )}

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-indigo-400">📂</span>
                    <span>{event.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-indigo-400">👥</span>
                    <span>{event.participation}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-700">{event.fee}</span>
                <span className="text-indigo-600 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
                No events scheduled for this day.
            </div>
        )}
      </div>
    </div>
  );
};

export default Events;