
import React, { useEffect, useState } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {
  // Note: OS の設定をまずデフォルトとして使う
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;


  const [isDark, setIsDark] = useState(isDarkOS);

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
