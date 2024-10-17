import React from 'react';
import { Coffee, FileText, Users, Search } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Coffee, title: "5-Day Free Trial", description: "Try our full suite of tools risk-free for 5 days" },
    { icon: FileText, title: "CSV & PDF Export", description: "Get your leads in convenient, ready-to-use formats" },
    { icon: Users, title: "Unlimited Leads", description: "No caps on the number of leads you can generate" },
    { icon: Search, title: "Advanced Search", description: "Find exactly what you need with powerful filters" }
  ];

  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up transform hover:-translate-y-1" style={{ animationDelay: `${(index + 3) * 300}ms` }}>
          <feature.icon className="w-12 h-12 mb-4" />
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}