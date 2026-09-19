import React from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div id="top-announcement-bar" className="bg-[#1C1917] text-[#FAF7F2]/90 text-xs py-2 px-4 border-b border-[#C5A059]/20 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Pure Veg Badge & Timings */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-[#D4AF37] font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide uppercase font-semibold text-[11px]">100% Pure Vegetarian</span>
          </div>
          <div className="flex items-center space-x-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open All Days: {RESTAURANT_INFO.timings.hours}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ram Path Road, Near Ram Mandir, Ayodhya</span>
          </div>
        </div>

        {/* Right: Direct Phone & WhatsApp */}
        <div className="flex items-center space-x-5">
          <a 
            id="top-bar-phone-link"
            href={`tel:${RESTAURANT_INFO.whatsappNumber}`}
            className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-medium">{RESTAURANT_INFO.displayWhatsappNumber}</span>
          </a>
          <span className="text-stone-600">|</span>
          <a
            id="top-bar-whatsapp-link"
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
