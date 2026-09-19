import React from 'react';
import { Leaf, Users, MapPin, ChefHat, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Leaf,
      title: '100% Pure Vegetarian Sanctity',
      description: 'Strict vegetarian culinary discipline with dedicated pure preparation areas, offering special Jain, Satvik, and fasting options without onion or garlic upon request.'
    },
    {
      icon: Users,
      title: 'Dual Capacity (200 to 5,000 Pax)',
      description: 'From intimate family celebrations and corporate meetings in our luxury 200-seat AC hall to mega weddings and exhibitions on our 5,000-capacity landscaped lawn.'
    },
    {
      icon: MapPin,
      title: 'Prime Ram Path Road Location',
      description: 'Conveniently situated opposite ITI Phase 3 on Ram Path in Awadhpuri Colony, easily accessible for tourists, pilgrims visiting Shri Ram Mandir, and locals.'
    },
    {
      icon: ChefHat,
      title: 'Multi-Cuisine Culinary Mastery',
      description: 'Authentic North Indian curries, tandoori kebabs, crispy South Indian dosas, Chinese wok delicacies, Italian pizzas/pastas, and rich Awadhi thalis prepared by expert chefs.'
    },
    {
      icon: Sparkles,
      title: 'Turnkey Event & Catering Support',
      description: 'Complete event execution including stage décor, mandap setup, premium sound & lighting, bridal suites, and customized live catering counters.'
    },
    {
      icon: Clock,
      title: 'All-Day Dining (8 AM – 11 PM)',
      description: 'Open 7 days a week for breakfast, lunch, high-tea, and grand dinner banquets with prompt, courteous table service.'
    }
  ];

  return (
    <section className="py-16 bg-[#F5EFEB] text-[#1C1917] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#8C6D32]">
            Why Guests & Event Organizers Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-2">
            The Aura Excellence Standard
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-stone-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center text-[#8C6D32] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2 flex items-center space-x-2">
                    <span>{reason.title}</span>
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-medium text-[#8C6D32] space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Feature</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
