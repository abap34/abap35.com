import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import Works from './components/Works';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-mono min-w-full">
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Works" element={<Works />} />
        </Routes>

      </div>

      <Footer />

    </Router>
  );
}

export default App;