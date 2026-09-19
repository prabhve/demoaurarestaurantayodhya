import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, Calendar, Users, PhoneCall, User } from 'lucide-react';
import { RESTAURANT_INFO, formatFormToWhatsApp } from '../config/restaurantInfo';
import { EnquiryFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  initialType?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, initialType, onClose }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    requirement: initialType || 'Table Reservation',
    preferredDate: '',
    guests: '4 Guests',
    message: ''
  });

  useEffect(() => {
    if (initialType) {
      setFormData(prev => ({ ...prev, requirement: initialType }));
    }
  }, [initialType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = formatFormToWhatsApp(formData);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 animate-fadeIn">
      <div className="bg-[#1C1917] text-[#FAF7F2] max-w-lg w-full max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-[#C5A059]/40 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-10 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#24201E] flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
              The Aura Ayodhya
            </span>
            <h3 className="font-serif text-base sm:text-xl font-bold text-white">
              Instant WhatsApp Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 rounded-lg cursor-pointer active:scale-95"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full min-h-[42px] px-3.5 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Phone / WhatsApp Number *</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full min-h-[42px] px-3.5 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Requirement
              </label>
              <select
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                className="w-full min-h-[42px] px-3 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              >
                <option value="Table Reservation">Table Reservation</option>
                <option value="Banquet Hall Booking">Banquet Hall Booking (200 Pax)</option>
                <option value="Outdoor Celebration Lawn">Outdoor Lawn (5,000 Pax)</option>
                <option value="Catering Service">Outdoor/In-House Catering</option>
                <option value="Corporate Event">Corporate Meeting/Seminar</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Guests</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 4, 150 guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full min-h-[42px] px-3 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1 flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Preferred Date & Time</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Tomorrow 8 PM or 25 Nov 2026"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full min-h-[42px] px-3.5 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Note (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Jain food required, need birthday cake arrangements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[42px] px-3.5 py-2 bg-[#292524] border border-stone-700 rounded-lg text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open in WhatsApp with Details</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
