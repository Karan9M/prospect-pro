import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="mt-24 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center animate-fade-in-up" style={{ animationDelay: '6000ms' }}>
      <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Lead Generation?</h2>
      <p className="text-xl mb-8">Start your 5-day free trial today and experience the power of Prospect Pro.</p>
      <button className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 inline-flex items-center transform hover:scale-105">
        Get Started Now
        <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
}