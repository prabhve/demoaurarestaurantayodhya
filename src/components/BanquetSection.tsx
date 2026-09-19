import React, { useState } from 'react';
import { Sparkles, Users, Calendar, MessageSquare, Check, Phone } from 'lucide-react';
import { BANQUET_SPACES } from '../data/restaurantData';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

interface BanquetSectionProps {
  onOpenBookingModal?: (type?: string) => void;
}

export const BanquetSection: React.FC<BanquetSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="banquet" className="py-16 bg-[#240E03] text-[#FFFDF9] relative border-b border-[#3E1A08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#FDE68A] bg-[#451A03] px-3.5 py-1 rounded-full border border-[#D97706]/40 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>उत्सव एवं मांगलिक आयोजन • Celebrations in Ayodhya</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FEF3C7] tracking-normal">
            Banquets & Grand Celebration Lawn
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed">
            From sacred poojas and tilak ceremonies to grand royal weddings with pure vegetarian catering on Ram Path Road.
          </p>
        </div>

        {/* Dual Venue Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* 1. Indoor Royal Banquet */}
          <div className="bg-[#331405] rounded-xl overflow-hidden border border-[#D97706]/40 shadow-md flex flex-col justify-between">
            <div>
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop"
                  alt="The Aura AC Banquet Hall in Ayodhya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#240E03]/90 backdrop-blur-sm px-3 py-1 rounded-md border border-[#D97706]/50 text-[#FDE68A] text-xs font-bold">
                  Capacity: Up to 200 Guests
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-1">
                  Centralized AC Hall
                </div>
                <h3 className="font-serif text-xl font-bold text-[#FEF3C7] mb-2">
                  The Royal Aura Banquet Hall
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed mb-4">
                  Perfect for Ring Ceremonies, Poojas, Tilak, Birthday Celebrations, Anniversaries, and Family Get-Togethers with sound system & stage.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-amber-200/90 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Centralized AC</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Pure Veg Catering</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Stage & Sound System</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Dedicated Staff</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#291004] border-t border-amber-900/60 flex items-center justify-between">
              <span className="text-xs text-amber-300/80 font-medium">
                50 to 200 Guests
              </span>
              <a
                href={getWhatsAppLink('banquet', 'Enquiry for Royal Aura Banquet Hall (200 Pax)')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire Hall on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2. Outdoor Grand Lawn */}
          <div className="bg-[#331405] rounded-xl overflow-hidden border border-[#D97706]/40 shadow-md flex flex-col justify-between">
            <div>
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
                  alt="The Grand Celebration Lawn Ayodhya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#240E03]/90 backdrop-blur-sm px-3 py-1 rounded-md border border-[#D97706]/50 text-[#FDE68A] text-xs font-bold">
                  Capacity: Up to 5,000 Guests
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-1">
                  Expansive Open-Air Lawn
                </div>
                <h3 className="font-serif text-xl font-bold text-[#FEF3C7] mb-2">
                  The Grand Celebration Lawn
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed mb-4">
                  Ayodhya’s sprawling landscaped venue for Grand Weddings, Sangeet Nights, Receptions, Cultural Galas, and Mega Celebrations.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-amber-200/90 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Lush Landscaped Lawn</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Live Catering Counters</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Bridal Suite Rooms</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                    <span>Spacious Valet Parking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#291004] border-t border-amber-900/60 flex items-center justify-between">
              <span className="text-xs text-amber-300/80 font-medium">
                Up to 5,000 Guests
              </span>
              <a
                href={getWhatsAppLink('banquet', 'Enquiry for Grand Celebration Lawn (5,000 Pax)')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire Lawn on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
