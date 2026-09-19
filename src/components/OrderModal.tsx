import React, { useState } from 'react';
import { X, ShoppingBag, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = 
`Hello The Aura Restaurant (Ayodhya),

I would like to place an Order Online:

• Order Items: ${items || 'General Menu Order'}
• Delivery Address: ${address || 'In Ayodhya'}
• Contact Number: ${phone || 'Same as WhatsApp'}

Please confirm availability and preparation time.`;

    const url = `https://wa.me/916386903300?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white text-stone-900 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-300 flex flex-col">
        
        {/* Header */}
        <div className="px-5 py-3.5 bg-[#800000] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-base font-bold">Order Online • The Aura</h3>
              <p className="text-[11px] text-amber-200">No Delivery Fee in Ayodhya</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Call Numbers */}
        <div className="p-4 bg-red-50 border-b border-red-100">
          <span className="text-xs font-bold text-[#800000] block mb-1.5">
            📞 Direct Order Calling Numbers:
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
            <a
              href="tel:+916386903300"
              className="p-1.5 bg-white border border-red-200 rounded font-bold text-[#800000] hover:bg-red-100"
            >
              6386903300
            </a>
            <a
              href="tel:+916386903302"
              className="p-1.5 bg-white border border-red-200 rounded font-bold text-[#800000] hover:bg-red-100"
            >
              6386903302
            </a>
            <a
              href="tel:+919619657771"
              className="p-1.5 bg-white border border-red-200 rounded font-bold text-[#800000] hover:bg-red-100"
            >
              9619657771
            </a>
          </div>
        </div>

        {/* WhatsApp Order Form */}
        <form onSubmit={handleWhatsAppOrder} className="p-5 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              What would you like to order?
            </label>
            <textarea
              rows={3}
              required
              placeholder="e.g. 2 Royal Special Thali, 1 Paneer Butter Masala, 4 Butter Naan, 2 Gulab Jamun..."
              value={items}
              onChange={(e) => setItems(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#800000] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Delivery Address in Ayodhya
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Hotel / Dharamshala name, House address, Landmark..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#800000] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Contact Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#800000] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm cursor-pointer mt-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Order via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
