import React, { useState, useMemo } from 'react';
import { Camera, Sparkles, Eye, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { getWhatsAppLink } from '../config/restaurantInfo';

export const GallerySection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'restaurant' | 'food' | 'banquet' | 'weddings' | 'catering' | 'corporate'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'restaurant', label: 'Restaurant & Dining' },
    { id: 'food', label: 'Signature Dishes' },
    { id: 'banquet', label: 'Banquet Hall' },
    { id: 'weddings', label: 'Grand Lawn & Weddings' },
    { id: 'catering', label: 'Live Catering' },
    { id: 'corporate', label: 'Corporate Setup' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedTab === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === selectedTab);
  }, [selectedTab]);

  const currentIndex = activeLightboxItem 
    ? filteredItems.findIndex(i => i.id === activeLightboxItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveLightboxItem(filteredItems[0]);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D32] bg-[#F5EFEB] px-3 py-1 rounded-full border border-[#C5A059]/30 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
            The Aura Experience Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Take a visual tour through our ambient dining rooms, gourmet vegetarian creations, opulent banquet setups, and grand outdoor wedding celebrations in Ayodhya.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-md border border-[#C5A059]'
                    : 'bg-white text-stone-700 hover:bg-[#F5EFEB] border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative h-72 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer bg-stone-100 border border-stone-200"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded bg-[#1C1917]/90 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] border border-[#C5A059]/40">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-stone-200 line-clamp-2 mt-1 font-light">
                      {item.caption}
                    </p>
                  )}
                  <span className="text-[11px] font-semibold text-[#D4AF37] mt-2 inline-block">
                    Click to enlarge photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
};
