import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/events.json';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Find by ID first (safer), fallback to name if needed
    const foundEvent = data.events.find((e) => e.id === id || e.name === decodeURIComponent(id));
    setEvent(foundEvent);
  }, [id]);

  if (!event) return (
    <div className="flex justify-center items-center h-screen bg-gray-50 text-indigo-600">
      Loading Event Details...
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white p-8 md:p-12 relative">
          <button 
            onClick={() => navigate('/')}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            &larr; Back to Schedule
          </button>
          
          <div className="flex gap-2 mb-4">
             {event.schedule.map((day, idx) => (
               <span key={idx} className="bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                 {day} • {event.dates[idx]}
               </span>
             ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{event.name}</h1>
          {event.tagline && <p className="text-xl text-blue-200 font-light italic">{event.tagline}</p>}
        </div>

        <div className="p-8 md:p-10 space-y-10">
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Entry Fee</p>
                <p className="text-lg font-bold text-gray-800">{event.fee}</p>
             </div>
             <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Participation</p>
                <p className="text-lg font-bold text-gray-800">{event.participation}</p>
             </div>
          </div>


          {/* Rules List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
               <span className="w-1 h-8 bg-indigo-600 mr-3 rounded-full"></span>
               Rules & Regulations
            </h2>
            <ul className="grid gap-3">
              {event.rules?.map((rule, idx) => (
                <li key={idx} className="flex items-start text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <span className="text-indigo-500 font-bold mr-3 mt-0.5">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Rounds (if applicable) */}
          {event.rounds && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                 <span className="w-1 h-8 bg-pink-600 mr-3 rounded-full"></span>
                 Structure
              </h2>
              <div className="space-y-4">
                {event.rounds.map((round, idx) => (
                  <div key={idx} className="border-l-4 border-pink-500 bg-white p-4 shadow-sm rounded-r-lg">
                    <h3 className="font-bold text-lg text-gray-800">
                      {round.round_name || round.name}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">{round.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EventDetails;