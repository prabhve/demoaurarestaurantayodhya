import React from 'react';
import { Sparkles, Utensils, ShieldCheck, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#FDF9F3] text-[#29180E] relative border-b border-[#EADCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ayodhya Tradition Badge & Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-3.5 py-1 rounded-full border border-[#FCA5A5]/60 mb-2.5 max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C] flex-shrink-0" />
            <span className="truncate">अयोध्या की परंपरा एवं पवित्रता • Our Heritage</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            Pure Satvik Dining on Ram Path Road
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-xs sm:text-base leading-relaxed">
            Welcome to <strong className="font-semibold text-[#451A03]">The Aura Restaurant</strong>, where every meal is prepared with devotion, pure desi ghee, and time-honored Indian hospitality for devotees, families, and travelers in Ayodhya.
          </p>
        </div>

        {/* 2-Column Warm Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Traditional Warm Atmosphere Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#D97706]/40 bg-[#FAF5EC]">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop"
                alt="The Aura Restaurant peaceful family dining in Ayodhya"
                className="w-full h-[280px] sm:h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1205]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <div className="flex items-center space-x-2 text-[#FDE68A] text-xs font-semibold uppercase tracking-wider mb-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% शुद्ध शाकाहारी रसोई</span>
                </div>
                <div className="text-[11px] sm:text-xs text-amber-100/90 leading-tight">
                  Strictly vegetarian & pure environment with Jain & Swaminarayan food options.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Spiritual & Culinary Pillars */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8D8C3] shadow-xs hover:border-[#D97706] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] text-[#C2410C] flex items-center justify-center mb-2 font-bold">
                  🪔
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#451A03] mb-1">
                  Desi Ghee & Fresh Produce
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Authentic North Indian, Awadhi gravies, and tandoori breads prepared with pure ghee and aromatic spices.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8D8C3] shadow-xs hover:border-[#D97706] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-emerald-700 flex items-center justify-center mb-2 font-bold">
                  🌿
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#451A03] mb-1">
                  Jain & Fasting (Vrat) Food
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Special no-onion, no-garlic meals and Satvik Thali prepared with utmost hygiene for spiritual dietary needs.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8D8C3] shadow-xs hover:border-[#D97706] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mb-2 font-bold">
                  🏛️
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#451A03] mb-1">
                  On Ram Path Road
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Centrally located opposite ITI Phase 3, very close to Shri Ram Janmabhoomi Mandir with easy parking.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8D8C3] shadow-xs hover:border-[#D97706] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center mb-2 font-bold">
                  🎊
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#451A03] mb-1">
                  Celebrations & Banquets
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Air-conditioned banquet hall (200 guests) & grand open lawn (5,000 guests) for weddings, poojas, and tilak.
                </p>
              </div>

            </div>

            {/* Quick action bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <a
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#451A03] hover:bg-[#5C2304] text-[#FEF3C7] text-xs font-semibold flex items-center justify-center space-x-2 transition-colors active:scale-98 shadow-xs"
              >
                <span>Enquire Table / Event Details</span>
              </a>

              <span className="text-[11px] sm:text-xs text-stone-500 italic text-center sm:text-left">
                Open every day from 8:00 AM to 11:00 PM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
