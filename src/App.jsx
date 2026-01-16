import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeGallery from './components/MarqueeGallery';
import About from './components/About';
import Stats from './components/Stats';
import EventCategories from './components/EventCategories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-900 bg-white">
      {/* <Navbar /> */}
      <Hero />
      {/* <MarqueeGallery /> */}
      <About />
      <Stats />
      <EventCategories />
      <Footer />
    </div>
  );
}

export default App;