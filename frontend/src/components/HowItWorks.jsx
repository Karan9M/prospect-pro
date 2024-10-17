import React from 'react';

export default function HowItWorks() {
  const steps = [
    { title: "1. Enter Your Query", description: "Specify your target audience and location" },
    { title: "2. We Scrape the Web", description: "Our AI-powered tools gather relevant data" },
    { title: "3. Get Your Leads", description: "Download your leads in your preferred format" }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up transform hover:-translate-y-1" style={{ animationDelay: `${(index + 7) * 300}ms` }}>
            <div className="w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{index + 1}</div>
            <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}