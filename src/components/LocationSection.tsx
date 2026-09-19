import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, Compass, Train, Car } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-[#FDF9F3] text-[#29180E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-3.5 py-1 rounded-full border border-[#FCA5A5]/60 mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>पधारें अयोध्या धाम • Visit The Aura</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            Location & Timings on Ram Path
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the main Ram Path, close to Shri Ram Janmabhoomi Mandir.
          </p>
        </div>

        {/* 2-Column Info & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E8D8C3] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] block mb-1">
                  Our Address in Ayodhya
                </span>
                <h3 className="font-serif text-xl font-bold text-[#451A03] mb-1">
                  The Aura Restaurant & Banquets
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {RESTAURANT_INFO.address.fullAddress}
                </p>
                <p className="text-xs text-[#9A3412] mt-1 font-medium">
                  Landmark: Opposite ITI Phase 3, on main Ram Path Road
                </p>
              </div>

              {/* Operating Hours */}
              <div className="p-3 bg-[#FFFBF5] rounded-lg border border-[#E5D5BF] flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#451A03]">Timings (All 7 Days)</div>
                  <div className="text-xs text-stone-600">8:00 AM – 11:00 PM (Breakfast, Lunch & Dinner)</div>
                </div>
              </div>

              {/* Quick Proximity */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center space-x-2 text-stone-700">
                  <Compass className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span><strong>Ram Janmabhoomi Temple:</strong> ~10 mins direct via Ram Path</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-700">
                  <Train className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span><strong>Ayodhya Cantt / Junction:</strong> ~10-12 mins drive</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-700">
                  <Car className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                  <span><strong>Spacious Parking:</strong> Dedicated parking on site</span>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-5 mt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#451A03] hover:bg-[#5C2304] text-[#FEF3C7] text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.whatsappNumber}`}
                className="py-2.5 px-3 rounded-lg bg-white hover:bg-stone-50 text-[#451A03] border border-[#D97706] text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Call Desk</span>
              </a>
            </div>

          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E8D8C3] shadow-xs min-h-[320px] bg-stone-100">
            <iframe
              title="The Aura Restaurant Ram Path Ayodhya Location"
              src="https://maps.google.com/maps?q=1633+Ram+Path+Road+Awadhpuri+Colony+Beniganj+Ayodhya+Uttar+Pradesh+224001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
