import React from 'react';
import { Utensils, HeartHandshake, ChefHat, Building2, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/restaurantInfo';

export const QuickActionPillars: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const pillars = [
    {
      id: 'dining',
      title: 'Pure Veg Restaurant',
      subtitle: 'Multi-Cuisine Family Dining',
      desc: 'North Indian, South Indian, Chinese, Continental, Tandoor & royal thalis in a luxurious, hygienic setting.',
      icon: Utensils,
      actionText: 'Explore Dishes',
      targetSection: 'menu',
      badge: 'Open 8 AM - 11 PM',
      waIntent: 'table' as const
    },
    {
      id: 'banquets',
      title: 'Banquets & Weddings',
      subtitle: 'Indoor Hall & Grand Lawn',
      desc: 'Centralized AC hall for 200 guests & sprawling outdoor celebration lawn for up to 5,000 guests.',
      icon: HeartHandshake,
      actionText: 'View Venue Details',
      targetSection: 'banquet',
      badge: 'Up to 5,000 Pax',
      waIntent: 'banquet' as const
    },
    {
      id: 'catering',
      title: 'In-House & Outdoor Catering',
      subtitle: 'Customized Event Menus',
      desc: 'Live food counters, traditional Satvik spreads, chaat stations & fine dining service at your venue.',
      icon: ChefHat,
      actionText: 'Catering Options',
      targetSection: 'catering',
      badge: 'Tailored Menus',
      waIntent: 'catering' as const
    },
    {
      id: 'corporate',
      title: 'Corporate Events & Meets',
      subtitle: 'Conferences & Business Dining',
      desc: 'Indoor executive venue with AV projector setup, high-speed Wi-Fi & curated business high-tea packages.',
      icon: Building2,
      actionText: 'Plan Meeting',
      targetSection: 'corporate',
      badge: 'AV & Wi-Fi Ready',
      waIntent: 'corporate' as const
    },
  ];

  return (
    <section id="services-overview" className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              id={`service-pillar-${pillar.id}`}
              className="bg-[#FFFFFF] rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-stone-200/80 flex flex-col justify-between group hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center text-[#8C6D32] group-hover:bg-[#1C1917] group-hover:text-[#D4AF37] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#FAF7F2] text-stone-700 rounded-full border border-stone-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-1 group-hover:text-[#8C6D32] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#8C6D32] uppercase tracking-wider mb-2">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mb-4">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => scrollTo(pillar.targetSection)}
                  className="text-xs font-semibold text-[#1C1917] group-hover:text-[#8C6D32] flex items-center space-x-1 cursor-pointer"
                >
                  <span>{pillar.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppLink(pillar.waIntent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2 py-1 rounded transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
