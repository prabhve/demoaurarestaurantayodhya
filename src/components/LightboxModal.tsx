import React from 'react';
import { X, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { getWhatsAppLink } from '../config/restaurantInfo';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors border border-stone-700 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-[#C5A059] hover:text-[#1C1917] transition-all border border-stone-700 hidden sm:block cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-stone-900/80 text-white hover:bg-[#C5A059] hover:text-[#1C1917] transition-all border border-stone-700 hidden sm:block cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content */}
      <div className="max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#1C1917] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
        <div className="relative flex-1 max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-[#1C1917] border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-2 py-0.5 rounded bg-[#292524] border border-[#C5A059]/30">
              {item.category}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2] mt-1">
              {item.title}
            </h3>
            {item.caption && (
              <p className="text-xs text-stone-300 font-light mt-0.5">
                {item.caption}
              </p>
            )}
          </div>

          <a
            href={getWhatsAppLink('general', `I saw the photo "${item.title}" in your gallery and would like to enquire about this.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center space-x-2 transition-colors flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
