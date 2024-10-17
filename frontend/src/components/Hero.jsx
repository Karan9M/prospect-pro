import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300">Supercharge</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-gray-200 dark:bg-gray-700 transform -skew-x-12"></span>
        </span>{" "}
        <span className="text-5xl md:text-6xl">your lead generation</span>
      </h1>
      <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">
        Prospect Pro offers powerful web scraping tools for Google Maps, empowering businesses to gather valuable leads and essential contact information effortlessly.
      </p>
      <button className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 inline-flex items-center animate-fade-in-up animation-delay-600 transform hover:scale-105">
        Start Your Free Trial
        <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
}
