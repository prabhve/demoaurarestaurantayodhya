import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurantInfo';

interface InfoModalProps {
  type: 'terms' | 'privacy' | 'pureveg' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-[#FAF7F2] text-[#1C1917] max-w-2xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-stone-300 flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#1C1917] text-[#FAF7F2] flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold">
              {type === 'pureveg' && '100% Pure Vegetarian & Satvik Guarantee'}
              {type === 'terms' && 'Booking & Event Terms • The Aura'}
              {type === 'privacy' && 'Privacy Policy & Contact Standards'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
          {type === 'pureveg' && (
            <>
              <p>
                At <strong>The Aura Restaurant & Banquets</strong>, we take immense pride in being a strictly <strong>100% Pure Vegetarian</strong> culinary destination in the sacred city of Ayodhya.
              </p>
              <h4 className="font-serif font-bold text-stone-900 text-sm mt-3">Our Standards Include:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Strict vegetarian preparation areas and dedicated utensils.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Special Jain & Satvik food options cooked strictly without onion and garlic upon request.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Use of fresh seasonal vegetables, dairy, and pure desi ghee.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Full hygiene protocol certified for family and pilgrim dining.</span>
                </li>
              </ul>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Welcome to <strong>The Aura Restaurant & Banquets</strong>. These terms outline general guidelines for dining reservations, banquet bookings, and catering services.
              </p>
              <h4 className="font-serif font-bold text-stone-900 text-sm mt-3">Event & Venue Guidelines:</h4>
              <ul className="space-y-2">
                <li><strong>1. Advance Booking:</strong> Banquet hall and grand lawn bookings are confirmed upon mutual agreement and booking token confirmation with the management desk.</li>
                <li><strong>2. Catering Requirements:</strong> All in-house banquet events follow our pure vegetarian culinary menu options. External non-vegetarian food is strictly prohibited on premises.</li>
                <li><strong>3. Timings:</strong> Operating dining hours are 8:00 AM to 11:00 PM. Event timings can be extended by prior arrangement in compliance with local municipal norms.</li>
                <li><strong>4. Parking:</strong> Complimentary guest parking is available with security and valet assistance.</li>
              </ul>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                We respect your privacy. All enquiries sent through our WhatsApp system or phone numbers are handled with strict confidentiality solely to facilitate dining reservations, banquet scheduling, and catering quotes.
              </p>
              <p>
                We do not sell, rent, or distribute personal contact information to third-party marketing entities.
              </p>
              <div className="pt-2 text-stone-600 text-xs">
                For questions or direct management queries, reach us at: <strong>{RESTAURANT_INFO.primaryEmail}</strong> or call <strong>{RESTAURANT_INFO.displayWhatsappNumber}</strong>.
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1C1917] text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
