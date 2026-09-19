import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp, ShoppingBag, Heart, Shield, Sparkles, Lock } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { getWhatsAppLink } from '../config/restaurantInfo';

interface FooterProps {
  onOpenInfoModal: (type: 'terms' | 'privacy' | 'pureveg') => void;
  onOpenOrderModal?: () => void;
  onOpenBookingModal?: (type?: string) => void;
  onOpenAdminModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenInfoModal, 
  onOpenOrderModal, 
  onOpenBookingModal,
  onOpenAdminModal
}) => {
  const { generalSettings, isAdminLoggedIn } = useCMS();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#180701] text-[#FFFDF9] border-t border-[#3D1402] relative z-10 pb-24 sm:pb-22 md:pb-8">
      
      {/* Top Welcome Strip */}
      <div className="border-b border-[#301103] py-6 bg-[#220B02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="max-w-xl">
            <div className="text-[#FDE68A] text-xs font-semibold mb-0.5 tracking-wide">
              Order Online Now @ {generalSettings.freeDeliveryNote}
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FEF3C7] tracking-tight break-words">
              {generalSettings.primaryPhone} | {generalSettings.secondaryPhone} - {generalSettings.mobilePhone}
            </h3>
            <p className="text-xs text-amber-200/80 mt-0.5">
              100% Pure Vegetarian Fine Dining, Banquets & Catering in Ayodhya.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={() => {
                if (onOpenOrderModal) {
                  onOpenOrderModal();
                } else {
                  window.open(getWhatsAppLink('general'), '_blank');
                }
              }}
              className="px-4 py-2 rounded-full bg-[#800000] hover:bg-[#990000] text-white font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              <span>Order Online</span>
            </button>

            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal('Table Reservation');
                }
              }}
              className="px-4 py-2 rounded-full bg-[#451A03] hover:bg-[#5C2304] text-[#FEF3C7] font-bold text-xs border border-[#D97706]/50 transition-all cursor-pointer hover:scale-105"
            >
              Reservations
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Information Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1: About & Purity Guarantee */}
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full border-2 border-[#D97706] flex items-center justify-center bg-[#2E1204] text-[#FDE68A] shadow-inner flex-shrink-0">
                <span className="font-serif font-bold text-sm text-amber-300">A</span>
              </div>
              <div>
                <span className="font-serif font-bold text-base tracking-wide text-[#FEF3C7] block leading-tight">
                  THE AURA RESTAURANT
                </span>
                <span className="text-[10px] text-amber-400 font-sans tracking-widest uppercase">
                  Fine Dining & Banquets • Ayodhya
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-200/80 leading-relaxed pt-1">
              {generalSettings.addressFull}
            </p>

            <div className="text-xs text-emerald-400 font-medium flex items-center pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse" />
              100% Pure Vegetarian & Satvik Certified
            </div>
          </div>

          {/* Col 2: Timings & Direct Contact */}
          <div className="space-y-2.5 text-xs text-amber-200/90">
            <h4 className="font-serif font-bold text-sm text-[#FEF3C7] uppercase tracking-wider pb-1.5 border-b border-amber-900/60">
              Timings & Contact
            </h4>
            <div className="flex items-center space-x-2.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
              <span>{generalSettings.operatingHours}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
              <span className="break-words">Phone: {generalSettings.primaryPhone} / {generalSettings.secondaryPhone} / {generalSettings.mobilePhone}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
              <span className="break-all">Email: {generalSettings.primaryEmail}</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2.5 text-xs text-amber-200/90">
            <h4 className="font-serif font-bold text-sm text-[#FEF3C7] uppercase tracking-wider pb-1.5 border-b border-amber-900/60">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>Home</span>
              </a>
              <a href="#about" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>About Us</span>
              </a>
              <a href="#banquet" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>Banquet</span>
              </a>
              <a href="#catering" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>Catering</span>
              </a>
              <a href="#corporate" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>Corporate Events</span>
              </a>
              <a href="#contact" className="hover:text-[#FDE68A] transition-colors flex items-center space-x-1">
                <span className="text-amber-500/60 text-[10px]">›</span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* 🌟 LUXURY & DISTINCT "DESIGNED WITH LOVE BY VYUVIK LABS" SIGNATURE SECTION */}
        <div className="my-6 sm:my-8 py-4 sm:py-5 px-5 sm:px-7 rounded-2xl bg-gradient-to-r from-[#1E0802] via-[#2D1005] to-[#1E0802] border border-amber-500/35 shadow-2xl relative overflow-hidden group">
          {/* Ambient Warm Aura Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-rose-500/10 to-amber-500/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3.5">
              {/* Premium Gradient Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-400 p-[1.5px] shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#160601] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-0.5">
                <div className="flex items-center justify-center sm:justify-start space-x-1.5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-amber-200/80 font-medium font-sans">
                    Designed With
                  </span>
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-bounce" />
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-amber-200/80 font-medium font-sans">
                    By
                  </span>
                </div>
                
                <h4 className="font-serif text-lg sm:text-xl font-black tracking-[0.22em] bg-gradient-to-r from-[#FFFBEB] via-[#FDE68A] to-[#F59E0B] bg-clip-text text-transparent drop-shadow-md">
                  VYUVIK LABS
                </h4>
              </div>
            </div>

            {/* Admin CMS Access Key Button */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={onOpenAdminModal}
                className="px-4 py-2 rounded-full bg-[#361304] hover:bg-[#4D1B07] text-amber-200 hover:text-[#FEF3C7] text-xs font-semibold border border-amber-500/40 flex items-center space-x-2 transition-all shadow-md cursor-pointer hover:border-amber-400 hover:scale-105 active:scale-95"
                title="Open Admin CMS & Management Portal"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAdminLoggedIn ? 'Admin CMS Active' : 'Admin CMS Portal'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Left-Aligned, 4 Options Right-Aligned */}
        <div className="pt-4 border-t border-amber-950/80 flex flex-col md:flex-row items-center justify-between text-xs text-amber-400/60 gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} The Aura Restaurant & Banquets, Ayodhya. All Rights Reserved.
          </div>

          {/* 4 Options Right-Aligned */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap justify-center md:justify-end gap-y-2 text-right">
            <button
              onClick={() => onOpenInfoModal('terms')}
              className="hover:text-amber-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenInfoModal('privacy')}
              className="hover:text-amber-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenInfoModal('pureveg')}
              className="hover:text-amber-200 transition-colors cursor-pointer"
            >
              Purity Standards
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-200 transition-colors flex items-center space-x-1 cursor-pointer font-semibold text-amber-300/80 hover:text-amber-100"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
