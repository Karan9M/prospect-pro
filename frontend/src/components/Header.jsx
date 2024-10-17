import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import LogoDark from '../assets/Dark.png';
import LogoLight from '../assets/Light.png';

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 relative">
          <img 
            src={isDarkMode ? LogoLight : LogoDark} 
            alt="Prospect Pro Logo" 
            className="w-10 h-10" 
          />
          <span className="text-2xl font-bold">Prospect Pro</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Products</a>
          <a href="#" className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Pricing</a>
          <a href="#" className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors">How it Works</a>
          <a href="#" className="text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button className="hidden md:block bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-lg">
            Start Free Trial
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Products</a>
          <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Pricing</a>
          <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">How it Works</a>
          <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</a>
          <a href="#" className="block px-4 py-2 text-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Start Free Trial</a>
        </div>
      )}
    </header>
  );
}
