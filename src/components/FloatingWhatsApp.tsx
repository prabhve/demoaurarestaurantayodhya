import React, { useState } from 'react';
import { MessageSquare, X, Phone, Utensils, Calendar, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const topOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Widget */}
      <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-40 hidden md:block">
        {isOpen ? (
          <div className="bg-[#240E03] text-[#FFFDF9] w-76 rounded-2xl p-4 shadow-2xl border border-[#D97706]/50 mb-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2.5 border-b border-amber-900/60">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-[#FEF3C7]">The Aura Ayodhya Desk</h4>
                  <p className="text-[10px] text-emerald-400">Online • Quick WhatsApp Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-amber-200/70 hover:text-white p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-amber-100/80 my-2.5">
              ॥ जय श्री सीताराम ॥ How can we serve you today?
            </p>

            <div className="space-y-1.5">
              <a
                href={getWhatsAppLink('table')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 rounded-lg bg-[#331405] hover:bg-[#431B07] text-xs flex items-center space-x-2 text-amber-200 hover:text-[#FDE68A] border border-amber-900/50 transition-colors"
              >
                <Utensils className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Table & Dining Booking</span>
              </a>

              <a
                href={getWhatsAppLink('banquet')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 rounded-lg bg-[#331405] hover:bg-[#431B07] text-xs flex items-center space-x-2 text-amber-200 hover:text-[#FDE68A] border border-amber-900/50 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Banquet Hall & Lawn Enquiry</span>
              </a>

              <a
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center justify-center space-x-1.5 transition-colors shadow-xs mt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        ) : null}

        <button
          id="floating-whatsapp-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-2 shadow-xl hover:scale-105 transition-all border border-emerald-400/40 cursor-pointer"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Ayodhya Desk</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div id="mobile-sticky-bottom-bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2A1004]/98 backdrop-blur-md border-t border-[#D97706]/40 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] shadow-2xl flex items-center justify-between gap-2">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${RESTAURANT_INFO.whatsappNumber}`}
          className="flex-1 min-h-[44px] py-2 rounded-xl bg-[#3D1807] hover:bg-[#4D200A] active:scale-98 text-amber-100 font-semibold text-xs flex items-center justify-center space-x-1.5 border border-amber-800/60 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Call Now</span>
        </a>

        <button
          id="mobile-sticky-menu-btn"
          onClick={scrollToMenu}
          className="flex-1 min-h-[44px] py-2 rounded-xl bg-[#D97706] hover:bg-[#B45309] active:scale-98 text-[#240E03] font-bold text-xs flex items-center justify-center space-x-1.5 transition-transform cursor-pointer"
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Menu</span>
        </button>

        <a
          id="mobile-sticky-whatsapp-btn"
          href={getWhatsAppLink('general')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
