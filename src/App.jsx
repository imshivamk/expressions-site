import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route showing all cards */}
          <Route path="/" element={<Home/>} />
          
          {/* Dynamic Route for specific event details */}
          <Route path="/event/:id" element={<EventDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

