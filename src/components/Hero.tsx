import React from 'react';
import { ShoppingBag, Calendar, MapPin, Sparkles, Compass, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

interface HeroProps {
  onOpenBookingModal?: (type?: string) => void;
  onOpenOrderModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenOrderModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[78vh] flex items-center justify-center bg-[#240E03] overflow-hidden text-[#FFFDF9]"
    >
      {/* Background with warm ambient lighting & authentic hospitality mood */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt="The Aura Restaurant & Banquets Ayodhya interior dining"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        {/* Warm Indian Sandstone and Terracotta subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#240E03]/90 via-[#2E1204]/80 to-[#1A0A02]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 text-center flex flex-col items-center">
        
        {/* Ayodhya Dham Sacred Welcome Pill */}
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#451A03]/90 border border-[#D97706]/50 text-[#FDE68A] text-[11px] sm:text-xs font-semibold mb-4 sm:mb-5 shadow-md tracking-wide max-w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
          <span className="truncate sm:whitespace-normal">पधारो अयोध्या धाम • 100% Pure Vegetarian</span>
        </div>

        {/* Evocative Headline */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-[#FEF3C7] leading-[1.25] sm:leading-[1.2] mb-3 sm:mb-4">
          Welcome to <span className="text-[#F59E0B] italic font-normal">The Aura</span> Ayodhya
        </h1>

        {/* Simple & Authentic Description */}
        <p className="text-xs sm:text-base md:text-lg text-amber-100/90 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
          Pure Vegetarian Fine Dining, Royal Banquets, Lawn & In-House Catering on Ram Path Road. Savor wholesome delicacies prepared with pure desi ghee and experience heartfelt hospitality.
        </p>

        {/* Direct Action Buttons: Order Online & Reservations */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-md mb-8 sm:mb-10">
          <button
            id="hero-order-online-btn"
            onClick={() => {
              if (onOpenOrderModal) {
                onOpenOrderModal();
              } else {
                window.open(getWhatsAppLink('general', 'I want to place an online food order from The Aura Ayodhya.'), '_blank');
              }
            }}
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-7 py-3 rounded-full bg-[#800000] hover:bg-[#990000] text-white font-serif font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer border border-red-400/30 active:scale-98"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>Order Online Now</span>
          </button>

          <button
            id="hero-reservations-btn"
            onClick={() => {
              if (onOpenBookingModal) {
                onOpenBookingModal('Table Reservation');
              }
            }}
            className="w-full sm:w-auto min-h-[44px] px-6 sm:px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FEF3C7] font-serif font-bold text-xs sm:text-sm tracking-wide transition-all border border-[#D97706]/60 flex items-center justify-center space-x-2 cursor-pointer backdrop-blur-xs active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#F59E0B]" />
            <span>Make Reservations</span>
          </button>
        </div>

        {/* Authentic Ayodhya Highlights Bar (Compact) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl pt-5 sm:pt-6 border-t border-amber-900/60 text-amber-200 text-xs">
          <div className="bg-[#351605]/80 p-2.5 sm:p-3 rounded-lg border border-amber-900/40 flex flex-col items-center justify-center text-center">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B] mb-1" />
            <span className="font-semibold text-[#FEF3C7] text-xs">100% Pure Veg</span>
            <span className="text-[10px] sm:text-[11px] text-amber-300/70">Desi Ghee & Satvik</span>
          </div>

          <div className="bg-[#351605]/80 p-2.5 sm:p-3 rounded-lg border border-amber-900/40 flex flex-col items-center justify-center text-center">
            <MapPin className="w-4 h-4 text-[#F59E0B] mb-1" />
            <span className="font-semibold text-[#FEF3C7] text-xs">Ram Path Road</span>
            <span className="text-[10px] sm:text-[11px] text-amber-300/70">Near Shri Ram Mandir</span>
          </div>

          <div className="bg-[#351605]/80 p-2.5 sm:p-3 rounded-lg border border-amber-900/40 flex flex-col items-center justify-center text-center">
            <Compass className="w-4 h-4 text-[#F59E0B] mb-1" />
            <span className="font-semibold text-[#FEF3C7] text-xs">Banquets & Lawn</span>
            <span className="text-[10px] sm:text-[11px] text-amber-300/70">200 AC & 5,000 Lawn</span>
          </div>

          <div className="bg-[#351605]/80 p-2.5 sm:p-3 rounded-lg border border-amber-900/40 flex flex-col items-center justify-center text-center">
            <Phone className="w-4 h-4 text-[#F59E0B] mb-1" />
            <span className="font-semibold text-[#FEF3C7] text-xs">Free Delivery</span>
            <span className="text-[10px] sm:text-[11px] text-amber-300/70">+91-6386903300</span>
          </div>
        </div>

      </div>
    </section>
  );
};
