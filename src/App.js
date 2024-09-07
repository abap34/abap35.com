import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import TopPage from './components/TopPage';
import Works from './components/Works';

const RedirectToBlog = () => {
  window.location.href = "https://abap34.com/posts.html";
  return null; 
};

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-mono min-w-full dark:bg-gray-900 dark:text-gray-200">
        <Header />

        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/works" element={<Works title="Projects" path="/works/works.yaml" defaultVisibleCount={3} />} />
          <Route path="/articles" element={<Works title="Articles" path="/works/articles.yaml" defaultVisibleCount={2} />} />
          
          {/* redirect to abap34.com/posts.html */}
          <Route path="/blog" element={<RedirectToBlog />} />
        </Routes>


        <Footer />
      </div>



    </Router>
  );
}

export default App;