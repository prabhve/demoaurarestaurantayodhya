import React from 'react';
import { Building2, Presentation, Wifi, Mic, Coffee, Users, CheckCircle2, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../config/restaurantInfo';

export const CorporateSection: React.FC = () => {
  const layouts = [
    { name: 'Theater Style', capacity: 'Up to 150 Seats', desc: 'Product launches, seminars & presentations.' },
    { name: 'Cluster / Round Table', capacity: 'Up to 100 Seats', desc: 'Workshops, award galas & dealer meets.' },
    { name: 'Classroom Setup', capacity: 'Up to 80 Seats', desc: 'Corporate trainings & orientation programs.' },
    { name: 'U-Shape Board Setup', capacity: 'Up to 50 Seats', desc: 'Executive board meetings & strategy sessions.' }
  ];

  const corporateFeatures = [
    { icon: Presentation, title: 'HD Projector & Screen', desc: 'Modern audio-visual presentation setup with HDMI.' },
    { icon: Mic, title: 'Sound & Wireless Mics', desc: 'Handheld & collar mics for crystal-clear speeches.' },
    { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Seamless connectivity for presentations and video conferencing.' },
    { icon: Coffee, title: 'Corporate Buffets & High-Tea', desc: 'Curated pure veg lunch/dinner buffets and tea breaks.' },
  ];

  return (
    <section id="corporate" className="py-12 sm:py-16 bg-[#FAF5EC] text-[#29180E] relative border-b border-[#EADCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-3.5 py-1 rounded-full border border-[#FCA5A5]/60 mb-2.5 max-w-full">
            <Building2 className="w-3.5 h-3.5 text-[#EA580C] flex-shrink-0" />
            <span className="truncate">Corporate Events & Meets • The Aura</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            Conferences, Seminars & Business Meets
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-xs sm:text-base leading-relaxed">
            Host professional dealer meets, training sessions, business conferences, and executive dinners on Ram Path Road with full AV support and pure vegetarian dining.
          </p>
        </div>

        {/* 2-Column Corporate Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#D97706]/40 bg-[#2A1004]">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1000&auto=format&fit=crop"
                alt="The Aura Corporate Conference Hall Ayodhya"
                className="w-full h-[260px] sm:h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#FDE68A] font-bold block">
                  Air-Conditioned Hall & AV Setup
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold">
                  Executive Meetings & Seminar Packages
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Key Features */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {corporateFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="p-3.5 bg-white rounded-xl border border-[#E8D8C3] shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF7ED] text-[#C2410C] flex items-center justify-center mb-1.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#451A03] mb-0.5">{feat.title}</h4>
                    <p className="text-[11px] sm:text-xs text-stone-600 leading-normal">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Corporate CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('corporate', 'Enquiry for Corporate Conference / Meeting at The Aura Ayodhya')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Corporate Meeting on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Seating Layouts */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#E8D8C3] shadow-xs">
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#451A03] mb-1 text-center">
            Configurable Hall Seating Options
          </h3>
          <p className="text-xs text-stone-500 text-center mb-4">
            Tailored arrangements to match your presentation, meeting, or training needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {layouts.map((layout, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#E8D8C3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif font-bold text-xs text-[#451A03]">{layout.name}</h4>
                    <span className="text-[10px] font-bold text-[#9A3412] bg-[#FEE2E2]/60 px-1.5 py-0.5 rounded">
                      {layout.capacity}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug">{layout.desc}</p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-stone-200 text-[10px] font-semibold text-emerald-700 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Setup Included</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
