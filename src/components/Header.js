
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
    [isDark]);


  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">

          <div>
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>



          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-600">abap34</span>.com
          </Link>
          <div className="space-x-4">
            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link to="/" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/education" className="hover:text-blue-600">
              Education
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
