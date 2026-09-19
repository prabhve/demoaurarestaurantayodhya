import React, { useState } from 'react';
import { ChefHat, CheckCircle2, MessageSquare, Utensils, Calendar, Users, MapPin, Sparkles, Phone } from 'lucide-react';
import { CATERING_SERVICES } from '../data/restaurantData';
import { getWhatsAppLink, RESTAURANT_INFO } from '../config/restaurantInfo';

export const CateringSection: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding / Reception');
  const [guestCount, setGuestCount] = useState('150 Guests');
  const [cateringDate, setCateringDate] = useState('');
  const [locationPreference, setLocationPreference] = useState('Ayodhya');

  const handleCateringWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = 
`Hello The Aura Catering Team (Ayodhya),

I would like to enquire about pure vegetarian catering services:

• Occasion: ${eventType}
• Guests: ${guestCount}
• Date: ${cateringDate || 'To be decided'}
• Location: ${locationPreference}

Please share your catering packages and pure desi ghee menu options.`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="catering" className="py-16 bg-[#FDF9F3] text-[#29180E] relative border-b border-[#EADCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-3.5 py-1 rounded-full border border-[#FCA5A5]/60 mb-2.5">
            <ChefHat className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>स्वादिष्ट खान-पान सेवा • Catering in Ayodhya</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            In-House & Outdoor Catering Services
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Live food counters, pure desi ghee preparations, traditional Awadhi & North Indian feasts, and Satvik delicacies for weddings, poojas, and celebrations across Ayodhya.
          </p>
        </div>

        {/* Catering Service Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CATERING_SERVICES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all border border-[#E8D8C3] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-stone-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDE68A] block">
                      {pkg.occasion}
                    </span>
                    <h3 className="font-serif font-bold text-sm leading-tight text-white">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {pkg.description}
                  </p>

                  <div className="space-y-1.5 mb-3">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-1.5 text-[11px] text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0">
                <a
                  href={getWhatsAppLink('catering', `Enquiry for ${pkg.title} Catering in Ayodhya`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#9A3412] text-xs font-semibold flex items-center justify-center space-x-1.5 border border-[#FDBA74] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire for {pkg.occasion}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compact WhatsApp Planner Form */}
        <div className="bg-[#240E03] text-[#FFFDF9] rounded-xl p-6 sm:p-8 border border-[#D97706]/40 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-semibold text-[#FDE68A] uppercase tracking-wider">
                ॥ जय श्री सीताराम ॥
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FEF3C7]">
                Book Catering for Your Auspicious Occasion
              </h3>
              <p className="text-xs text-amber-200/80 leading-relaxed">
                From intimate family poojas (25 guests) to royal weddings (5,000 guests), get a custom pure vegetarian menu quote directly on WhatsApp.
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-medium space-y-1">
                <div>✓ 100% Pure Vegetarian & Desi Ghee</div>
                <div>✓ Jain & Satvik Food Available</div>
                <div>✓ Live Counters with Trained Serving Staff</div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#351605] p-4 sm:p-5 rounded-lg border border-amber-900/60">
              <form onSubmit={handleCateringWhatsAppSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-amber-200 mb-1">
                      Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#240E03] border border-amber-900 rounded text-amber-100 focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="Wedding / Reception">Wedding / Reception</option>
                      <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                      <option value="Religious Katha / Satvik Pooja">Religious Katha / Satvik Pooja</option>
                      <option value="Birthday / Family Gathering">Birthday / Family Gathering</option>
                      <option value="Corporate / Social Event">Corporate / Social Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-amber-200 mb-1">
                      Estimated Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#240E03] border border-amber-900 rounded text-amber-100 focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="25 - 50 Guests">25 - 50 Guests</option>
                      <option value="50 - 150 Guests">50 - 150 Guests</option>
                      <option value="150 - 300 Guests">150 - 300 Guests</option>
                      <option value="300 - 600 Guests">300 - 600 Guests</option>
                      <option value="600 - 2,000+ Guests">600 - 2,000+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-amber-200 mb-1">
                      Event Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={cateringDate}
                      onChange={(e) => setCateringDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#240E03] border border-amber-900 rounded text-amber-100 focus:outline-none focus:border-[#D97706]"
                    >
                    </input>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-amber-200 mb-1">
                      Location / Venue City
                    </label>
                    <input
                      type="text"
                      value={locationPreference}
                      onChange={(e) => setLocationPreference(e.target.value)}
                      placeholder="e.g. Ayodhya, Faizabad, or Venue"
                      className="w-full px-2.5 py-1.5 text-xs bg-[#240E03] border border-amber-900 rounded text-amber-100 focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Get Catering Quote on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.whatsappNumber}`}
                    className="w-full sm:w-auto px-4 py-2.5 rounded bg-[#451A03] hover:bg-[#5C2304] text-[#FEF3C7] text-xs font-bold text-center border border-amber-800 transition-colors"
                  >
                    Call Manager
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
