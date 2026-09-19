import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Calendar, User } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';
import { useCMS } from '../context/CMSContext';

interface NavbarProps {
  onOpenBookingModal?: (type?: string) => void;
  onOpenOrderModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onOpenOrderModal }) => {
  const { generalSettings } = useCMS();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'banquet', 'catering', 'corporate', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'banquet', label: 'Banquet' },
    { id: 'catering', label: 'Catering' },
    { id: 'corporate', label: 'Corporate Events' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const topOffset = 85;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. Deep Maroon Top Ribbon matching exact reference */}
      <div className="bg-[#800000] text-white text-xs sm:text-[13px] py-1.5 px-4 font-sans tracking-wide z-50 relative border-b border-red-950">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 font-medium overflow-x-auto no-scrollbar py-0.5">
            <span className="text-amber-100 font-semibold">Order Online Now @</span>
            <a href={`tel:${generalSettings.primaryPhone.replace(/[^0-9+]/g, '')}`} className="text-white hover:underline font-bold">{generalSettings.primaryPhone}</a>
            <span className="text-red-300">|</span>
            <a href={`tel:${generalSettings.secondaryPhone.replace(/[^0-9+]/g, '')}`} className="text-white hover:underline font-bold">{generalSettings.secondaryPhone}</a>
            <span className="text-red-300">-</span>
            <a href={`tel:${generalSettings.mobilePhone.replace(/[^0-9+]/g, '')}`} className="text-white hover:underline font-bold">{generalSettings.mobilePhone}</a>
            <span className="text-amber-200 hidden md:inline ml-2">• {generalSettings.freeDeliveryNote}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Logo, Segmented Tabs & Action Buttons */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b border-stone-200 shadow-xs ${
          isScrolled ? 'py-2 shadow-md' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: Circular Emblem & Brand Text */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              {/* Circular Emblem Motif */}
              <div className="w-11 h-11 rounded-full border-2 border-stone-800 p-0.5 flex items-center justify-center bg-white shadow-xs group-hover:border-[#800000] transition-colors">
                <div className="w-full h-full rounded-full border border-stone-400 flex flex-col items-center justify-center bg-stone-900 text-amber-400 text-center">
                  <span className="text-[7px] tracking-tighter uppercase font-serif text-stone-300">THE AURA</span>
                  <span className="text-xs font-serif font-black text-amber-300 leading-none">A</span>
                  <span className="text-[5px] text-stone-400">★ ★ ★</span>
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-stone-900 uppercase leading-none group-hover:text-[#800000] transition-colors">
                  THE AURA
                </span>
                <span className="text-[11px] sm:text-xs tracking-widest text-stone-700 uppercase font-semibold mt-0.5">
                  RESTAURANT
                </span>
              </div>
            </a>

            {/* Center Navigation Bar (Segmented Tabs as shown in reference) */}
            <nav className="hidden xl:flex items-center bg-gradient-to-b from-stone-100 to-stone-200/90 rounded-md border border-stone-300 shadow-inner overflow-hidden">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <React.Fragment key={item.id}>
                    {index > 0 && <div className="w-px h-6 bg-stone-300/80" />}
                    <a
                      id={`nav-link-${item.id}`}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`px-4 py-2 text-xs sm:text-[13px] font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-b from-stone-900 to-black text-amber-300 font-bold shadow-md'
                          : 'text-stone-800 hover:text-stone-950 hover:bg-stone-200/60'
                      }`}
                    >
                      {item.label}
                    </a>
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Right Action Buttons: Reservations & Order Online */}
            <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
              {/* Reservations Button */}
              <button
                id="navbar-reservations-btn"
                onClick={() => {
                  if (onOpenBookingModal) {
                    onOpenBookingModal('Table Reservation');
                  } else {
                    const target = document.getElementById('contact');
                    target?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-1.5 rounded-full border-2 border-[#800000]/80 bg-[#FFF5F5] hover:bg-[#800000] text-[#800000] hover:text-white font-serif font-bold text-xs sm:text-sm tracking-wide shadow-xs transition-all cursor-pointer"
              >
                Reservations
              </button>

              {/* Order Online Button */}
              <button
                id="navbar-order-online-btn"
                onClick={() => {
                  if (onOpenOrderModal) {
                    onOpenOrderModal();
                  } else {
                    window.open(getWhatsAppLink('general', 'I want to place an online order for delivery/takeaway.'), '_blank');
                  }
                }}
                className="px-4 py-1.5 rounded-full bg-[#800000] hover:bg-[#990000] text-white font-serif font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center space-x-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>Order Online</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={() => {
                  if (onOpenOrderModal) {
                    onOpenOrderModal();
                  } else {
                    window.open(getWhatsAppLink('general', 'I want to place an online order.'), '_blank');
                  }
                }}
                className="px-2.5 py-1 rounded bg-[#800000] text-white text-xs font-bold font-serif"
              >
                Order
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-2 gap-1.5 pt-1 border-b border-stone-100 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-md ${
                    activeSection === item.id
                      ? 'bg-stone-900 text-amber-300 font-bold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal('Table Reservation');
                }}
                className="py-2 px-3 rounded-full border border-[#800000] text-[#800000] font-serif font-bold text-xs text-center"
              >
                Reservations
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenOrderModal) {
                    onOpenOrderModal();
                  } else {
                    window.open(getWhatsAppLink('general', 'I want to place an online order.'), '_blank');
                  }
                }}
                className="py-2 px-3 rounded-full bg-[#800000] text-white font-serif font-bold text-xs text-center flex items-center justify-center space-x-1"
              >
                <ShoppingBag className="w-3 h-3 text-amber-300" />
                <span>Order Online</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
