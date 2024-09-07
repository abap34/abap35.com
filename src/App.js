import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopPage from './components/TopPage';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Works from './components/Works';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-mono min-w-full dark:bg-gray-900 dark:text-gray-200">
        <Header />

        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Works" element={<Works />} />
        </Routes>


        <Footer />
      </div>



    </Router>
  );
}

export default App;