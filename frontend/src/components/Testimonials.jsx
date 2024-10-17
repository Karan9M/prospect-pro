import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: "John Doe", company: "Tech Innovators", quote: "Prospect Pro has revolutionized our lead generation process. It's a game-changer!" },
    { name: "Jane Smith", company: "Growth Hackers", quote: "The amount of time we save using Prospect Pro is incredible. Highly recommended!" },
    { name: "Alex Johnson", company: "Sales Dynamo", quote: "Our sales team's productivity has skyrocketed since we started using Prospect Pro." }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${(index + 13) * 300}ms` }}>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}