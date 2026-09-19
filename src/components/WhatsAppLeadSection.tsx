import React, { useState } from 'react';
import { MessageSquare, Phone, Send, Sparkles, CheckCircle2, User, PhoneCall, Calendar, Users, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO, formatFormToWhatsApp, getWhatsAppLink } from '../config/restaurantInfo';
import { EnquiryFormData } from '../types';

export const WhatsAppLeadSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    requirement: 'Table Reservation',
    preferredDate: '',
    guests: '2 to 4 Guests',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = formatFormToWhatsApp(formData);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#1C1917] text-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] bg-[#292524] px-3 py-1 rounded-full border border-[#C5A059]/40 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fastest Lead & Booking Channel</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF7F2] tracking-tight">
            Reserve a Table or Enquire on WhatsApp
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Fill out your requirements below to instantly generate a formatted WhatsApp enquiry and connect with our reservations and events team.
          </p>
        </div>

        {/* 2-Column Form & Direct Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Chat Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#24201E] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Immediate Assistance
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Speak Directly with Our Team
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Our managers in Ayodhya are available 7 days a week from 8:00 AM to 11:00 PM for dining reservations, wedding venue visits, and customized catering quotes.
                </p>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <a
                id="direct-whatsapp-chat-main-btn"
                href={getWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-md group"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              {/* Verified Contact Details List */}
              <div className="space-y-3 pt-2 border-t border-stone-800 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-[#2E2926] rounded-lg">
                  <span className="text-stone-400">Primary Contact:</span>
                  <a href={`tel:${RESTAURANT_INFO.whatsappNumber}`} className="font-semibold text-[#D4AF37] hover:underline">
                    {RESTAURANT_INFO.displayWhatsappNumber}
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#2E2926] rounded-lg">
                  <span className="text-stone-400">Secondary Desk:</span>
                  <a href={`tel:${RESTAURANT_INFO.secondaryPhone}`} className="font-semibold text-stone-200 hover:underline">
                    {RESTAURANT_INFO.secondaryPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#2E2926] rounded-lg">
                  <span className="text-stone-400">Official Email:</span>
                  <a href={`mailto:${RESTAURANT_INFO.primaryEmail}`} className="font-semibold text-stone-200 hover:underline">
                    {RESTAURANT_INFO.primaryEmail}
                  </a>
                </div>
              </div>

              {/* Trust Checks */}
              <div className="pt-2 space-y-1.5 text-xs text-stone-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No login required – direct WhatsApp connection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Prompt responses for table bookings & events</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-Formatted WhatsApp Enquiry Generator Form */}
          <div className="lg:col-span-7 bg-[#24201E] p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center space-x-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Phone / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  />
                </div>

                {/* Requirement Type */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center space-x-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Requirement Type</span>
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  >
                    <option value="Table Reservation">Table Reservation (Dining)</option>
                    <option value="Indoor Banquet Hall Booking (Up to 200)">Indoor Banquet Hall Booking (Up to 200)</option>
                    <option value="Outdoor Celebration Lawn Booking (Up to 5000)">Outdoor Celebration Lawn Booking (Up to 5000)</option>
                    <option value="In-House or Outdoor Catering">In-House or Outdoor Catering</option>
                    <option value="Corporate Event / Conference Meeting">Corporate Event / Conference Meeting</option>
                    <option value="Birthday / Anniversary Party">Birthday / Anniversary Party</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center space-x-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Estimated Number of Guests</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4 people, 150 guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  />
                </div>

                {/* Preferred Date */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Preferred Date / Time</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tomorrow Evening 8 PM or 18th November 2026"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Additional Details / Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need Jain food without onion/garlic, requesting banquet stage decoration options..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1C1917] border border-stone-700 rounded-lg text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                  />
                </div>

              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  id="submit-enquiry-to-whatsapp-btn"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#C5A059] hover:bg-[#D4AF37] text-[#1C1917] font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center mt-2.5">
                  Clicking will open WhatsApp with your formatted details ready to send.
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
