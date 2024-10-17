import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    { name: "Starter", price: "$49", features: ["500 leads/month", "CSV export", "Email support"] },
    { name: "Pro", price: "$99", features: ["2000 leads/month", "CSV & PDF export", "Priority support", "Advanced filters"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited leads", "All export options", "24/7 support", "Custom integrations"] }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up transform hover:-translate-y-1" style={{ animationDelay: `${(index + 10) * 300}ms` }}>
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">{plan.name !== "Enterprise" ? "/month" : ""}</span></p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  <Check className="w-5 h-5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}