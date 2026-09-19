import React, { useState, useMemo } from 'react';
import { Search, Utensils, Sparkles, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { getWhatsAppLink } from '../config/restaurantInfo';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Primary categories simplified for quick browsing
  const quickCategories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'thali', label: 'Royal Thali & Satvik' },
    { id: 'main-course', label: 'North Indian & Paneer' },
    { id: 'starters', label: 'Tandoori Kebabs' },
    { id: 'rice-biryani', label: 'Awadhi Biryani' },
    { id: 'south-indian', label: 'South Indian' },
    { id: 'beverages-desserts', label: 'Sweets & Rabri' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 bg-[#FAF5EC] text-[#29180E] relative border-b border-[#EADCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-3.5 py-1 rounded-full border border-[#FCA5A5]/60 mb-2.5">
            <Utensils className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>द औरा की रसोई • Signature Vegetarian Dishes</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            Pure Satvik & Multi-Cuisine Menu
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Freshly prepared with pure desi ghee, authentic spices, and 100% vegetarian purity. Special Jain meals available.
          </p>
        </div>

        {/* Filter & Search Bar (Compact) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          
          {/* Quick Categories */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full pb-1 no-scrollbar">
            {quickCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#451A03] text-[#FEF3C7] shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-[#F3E8D8] border border-[#E5D5BF]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-60 flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
            <input
              type="text"
              placeholder="Search dish (e.g., Thali, Paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E5D5BF] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D97706] text-stone-900"
            />
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-[#E5D5BF] p-6">
            <Utensils className="w-10 h-10 text-stone-400 mx-auto mb-2" />
            <h3 className="font-serif text-base font-bold text-stone-800">No dishes found</h3>
            <p className="text-xs text-stone-500 mt-1 mb-3">Try searching for Thali, Paneer, Dosa, or Kulcha.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-3 py-1.5 bg-[#451A03] text-white text-xs font-semibold rounded-md"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => {
              const waLink = getWhatsAppLink('menu_order', `${item.name}`);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-[#E8D8C3] flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image */}
                    {item.image && (
                      <div className="relative h-40 w-full overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Pure Veg Green Badge */}
                        <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded bg-white/95 border border-emerald-600 flex items-center justify-center shadow-xs">
                          <div className="w-2 h-2 rounded-full bg-emerald-600" />
                        </div>

                        {/* Special Badges */}
                        {item.isChefSpecial && (
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#451A03]/90 text-[#FDE68A] rounded text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center space-x-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#F59E0B]" />
                            <span>Special</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-serif text-base font-bold text-[#451A03] mb-1">
                        {item.name}
                      </h3>

                      {item.description && (
                        <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 mb-2">
                          {item.description}
                        </p>
                      )}

                      <div className="flex items-center space-x-2 text-[11px]">
                        <span className="text-emerald-700 font-medium flex items-center">
                          <Check className="w-3 h-3 mr-0.5" /> 100% Pure Veg
                        </span>
                        {item.diet === 'jain-available' && (
                          <span className="text-[#B45309] font-medium">• Jain Available</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quick WhatsApp Action */}
                  <div className="p-3 pt-0 border-t border-stone-100 flex items-center justify-between mt-1">
                    <span className="text-[11px] text-stone-500">
                      Fresh & Hygienic
                    </span>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center space-x-1 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Small Bottom Notice */}
        <div className="mt-8 p-4 bg-[#FFFBF5] rounded-xl border border-[#D97706]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🪔</span>
            <div>
              <h4 className="font-serif font-bold text-sm text-[#451A03]">
                Visiting with Family, Pilgrims or Group?
              </h4>
              <p className="text-xs text-stone-600">
                Pre-book your dining table or customized Satvik Thali for a smooth Ayodhya experience.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink('table')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#451A03] hover:bg-[#5A2304] text-[#FEF3C7] text-xs font-bold whitespace-nowrap"
          >
            Pre-Book Table on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
