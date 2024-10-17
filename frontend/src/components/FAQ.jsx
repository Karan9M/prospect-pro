import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: "How does Prospect Pro work?", answer: "Prospect Pro uses advanced web scraping technology to gather lead information from Google Maps based on your specified criteria. It then compiles this data into easy-to-use formats like CSV or PDF." },
    { question: "Is Prospect Pro legal to use?", answer: "Prospect Pro operates within the bounds of web scraping best practices. However, it's important to use the data responsibly and in compliance with applicable laws and regulations in your jurisdiction." },
    { question: "Can I export the leads to my CRM?", answer: "Yes, Prospect Pro allows you to export your leads in various formats that are compatible with most CRM systems. For custom integrations, please contact our sales team." },
    { question: "What kind of support do you offer?", answer: "We offer email support for all plans, with priority support for Pro users and 24/7 support for Enterprise customers. Our team is always ready to assist you with any questions or issues." }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 animate-fade-in-up" style={{ animationDelay: `${(index + 16) * 300}ms` }}>
            <button
              className="flex justify-between items-center w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openFAQ === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {openFAQ === index && (
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-b-lg mt-1">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}