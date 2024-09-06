
import React, { useEffect, useState } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
    [isDark]);


  return (
    <header className="border-b border-gray-200 py-4 dark:border-gray-800">
      <div className="container mx-auto px-4">

        <div>
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>




      </div>
    </header>
  );
}
