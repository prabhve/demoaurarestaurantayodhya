import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageSquare, 
  Clock, 
  Compass, 
  Mail, 
  Car, 
  Train, 
  Plane, 
  ExternalLink, 
  Sparkles, 
  Map, 
  Route, 
  CheckCircle2,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { RESTAURANT_INFO, getWhatsAppLink } from '../config/restaurantInfo';
import { useCMS } from '../context/CMSContext';
import { FAMOUS_PLACES_AYODHYA } from '../data/famousPlaces';
import { FamousPlace } from '../types';

export const ContactSection: React.FC = () => {
  const { generalSettings } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'temple' | 'ghat' | 'landmark' | 'transit'>('all');
  const [activePlace, setActivePlace] = useState<FamousPlace>(FAMOUS_PLACES_AYODHYA[0]);
  const [showActivePlaceMap, setShowActivePlaceMap] = useState<boolean>(false);

  const phoneNumbers = [
    { number: generalSettings.primaryPhone, label: 'Primary Order & Reservation' },
    { number: generalSettings.secondaryPhone, label: 'Order Online & Delivery' },
    { number: generalSettings.mobilePhone, label: 'Banquet & Events Desk' },
  ];

  const filteredPlaces = selectedCategory === 'all' 
    ? FAMOUS_PLACES_AYODHYA 
    : FAMOUS_PLACES_AYODHYA.filter(p => p.category === selectedCategory);

  const handleSelectPlaceForMap = (place: FamousPlace) => {
    setActivePlace(place);
    setShowActivePlaceMap(true);
    
    // Smooth scroll directly to the interactive map section on all screen sizes
    const mapEl = document.getElementById('interactive-ayodhya-map');
    if (mapEl) {
      const topOffset = 90;
      const elementPosition = mapEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryIcon = (category: FamousPlace['category']) => {
    switch (category) {
      case 'temple':
        return <Landmark className="w-3.5 h-3.5 text-amber-400" />;
      case 'ghat':
        return <Compass className="w-3.5 h-3.5 text-blue-400" />;
      case 'transit':
        return <Train className="w-3.5 h-3.5 text-emerald-400" />;
      case 'landmark':
      default:
        return <Sparkles className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#FDF9F3] text-[#29180E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9A3412] bg-[#FEE2E2]/60 px-4 py-1.5 rounded-full border border-[#FCA5A5]/60 mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>स्थान एवं संपर्क • Prime Location on Ram Path</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#451A03] tracking-normal">
            Visit The Aura & Explore Ayodhya
          </h2>
          <div className="w-16 h-1 bg-[#D97706] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the prominent <strong>Ram Path Road</strong> in Beniganj, The Aura provides swift and seamless access to all sacred temples, ghats, and transit hubs in holy Ayodhya.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. RESTAURANT CONTACT & DIRECT ADDRESS SECTION */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-[#E8D8C3] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Official Address */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] block">
                    Our Address in Ayodhya
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open All 7 Days
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#451A03] mb-1">
                  {generalSettings.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {generalSettings.addressFull}
                </p>
                <div className="mt-2 p-2.5 rounded-lg bg-[#FEF3C7]/40 border border-[#FDE68A] text-xs text-[#9A3412] font-semibold flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Landmark: {generalSettings.addressLandmark}</span>
                </div>
              </div>

              {/* Direct Phone Numbers matching top banner */}
              <div className="p-3.5 sm:p-4 bg-[#FFF5F5] rounded-xl border border-red-200/80 space-y-2.5">
                <div className="text-xs font-bold text-[#800000] flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-red-700" />
                    <span>Call & Order Online Direct Desk:</span>
                  </span>
                  <span className="text-[11px] font-normal text-stone-500">Instant Response</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {phoneNumbers.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p.number.replace(/[^0-9+]/g, '')}`}
                      className="p-2 sm:p-2.5 rounded-lg bg-white hover:bg-red-50 text-[#800000] border border-red-200 text-center transition-all block shadow-2xs hover:border-red-300"
                    >
                      <span className="font-bold text-xs block truncate">{p.number}</span>
                      <span className="text-[10px] text-stone-500 block leading-tight truncate mt-0.5">{p.label}</span>
                    </a>
                  ))}
                </div>
                <div className="text-[11px] text-[#800000] font-semibold text-center pt-1 border-t border-red-100 flex items-center justify-center space-x-1">
                  <span>✓ Free Delivery in Ayodhya</span>
                  <span>•</span>
                  <span>{generalSettings.freeDeliveryNote}</span>
                </div>
              </div>

              {/* Operating Hours & Fast Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#FFFBF5] rounded-xl border border-[#E5D5BF] flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#451A03]">Hours of Operation</div>
                    <div className="text-[11px] text-stone-600">{generalSettings.operatingHours}</div>
                  </div>
                </div>

                <div className="p-3 bg-[#FFFBF5] rounded-xl border border-[#E5D5BF] flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-[#451A03]">Email Us</div>
                    <div className="text-[11px] text-stone-600 truncate">{generalSettings.primaryEmail}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 mt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#451A03] hover:bg-[#5C2304] text-[#FEF3C7] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#F59E0B]" />
                <span>Navigate to The Aura (Google Maps)</span>
              </a>

              <a
                href={getWhatsAppLink('general', 'Hello, I want to inquire with The Aura Ayodhya team regarding table booking / location.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Concierge on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Map Embed with Live Address Focus */}
          <div 
            id="interactive-ayodhya-map" 
            className={`lg:col-span-6 rounded-2xl overflow-hidden shadow-md min-h-[380px] bg-stone-100 flex flex-col relative group transition-all duration-500 ${
              showActivePlaceMap 
                ? 'border-2 border-amber-500 ring-4 ring-amber-400/20 shadow-xl' 
                : 'border border-[#E8D8C3]'
            }`}
          >
            
            {/* Top Interactive Banner on Map */}
            <div className="bg-[#2D1004] text-[#FEF3C7] px-4 py-2.5 flex items-center justify-between z-10 border-b border-amber-900/60">
              <div className="flex items-center space-x-2">
                <Map className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold tracking-wide">
                  {showActivePlaceMap ? `Map Route: ${activePlace.name}` : `The Aura Restaurant on Ram Path`}
                </span>
              </div>

              {showActivePlaceMap && (
                <button
                  onClick={() => setShowActivePlaceMap(false)}
                  className="text-[10px] text-amber-300 hover:text-white underline font-semibold cursor-pointer"
                >
                  Reset to Restaurant Pin
                </button>
              )}
            </div>

            {/* Embedded IFrame */}
            <div className="flex-1 min-h-[320px] relative">
              <iframe
                title="The Aura Restaurant & Ayodhya Famous Landmarks Map"
                src={showActivePlaceMap 
                  ? activePlace.mapEmbedUrl 
                  : "https://maps.google.com/maps?q=1633+Ram+Path+Road+Awadhpuri+Colony+Beniganj+Ayodhya+Uttar+Pradesh+224001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                }
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Active Place Navigation Overlay Strip if active */}
            {showActivePlaceMap && (
              <div className="bg-[#1A0802] text-amber-100 p-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-amber-950">
                <div className="text-xs">
                  <span className="text-amber-400 font-bold">{activePlace.name}</span>
                  <span className="text-stone-400 mx-1.5">•</span>
                  <span className="text-emerald-400 font-semibold">{activePlace.distanceDisplay} ({activePlace.driveTime})</span>
                </div>
                <a
                  href={activePlace.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#800000] hover:bg-[#990000] text-white text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-xs"
                >
                  <span>Open Full Turn-by-Turn GPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. NEARBY ATTRACTIONS GRID WITH DISTANCE & LIVE DIRECTIONS */}
        {/* ========================================================= */}
        <div id="nearby-attractions" className="mt-8 pt-10 border-t border-[#E8D8C3]">
          
          {/* Subheader */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4 text-[#D97706]" />
                <span>Nearby Attractions • Proximity from The Aura</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#451A03]">
                Nearby Attractions & Sacred Places
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                Explore famous Ayodhya destinations with representative images, approximate travel distances from The Aura, and direct Google Maps turn-by-turn directions.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto pb-1 no-scrollbar flex-shrink-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#451A03] text-[#FEF3C7] shadow-sm'
                    : 'bg-stone-200/80 hover:bg-stone-300 text-stone-700'
                }`}
              >
                All Attractions ({FAMOUS_PLACES_AYODHYA.length})
              </button>
              <button
                onClick={() => setSelectedCategory('temple')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'temple'
                    ? 'bg-[#451A03] text-[#FEF3C7] shadow-sm'
                    : 'bg-stone-200/80 hover:bg-stone-300 text-stone-700'
                }`}
              >
                Sacred Temples
              </button>
              <button
                onClick={() => setSelectedCategory('ghat')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'ghat'
                    ? 'bg-[#451A03] text-[#FEF3C7] shadow-sm'
                    : 'bg-stone-200/80 hover:bg-stone-300 text-stone-700'
                }`}
              >
                Ghats & Riverfront
              </button>
              <button
                onClick={() => setSelectedCategory('transit')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'transit'
                    ? 'bg-[#451A03] text-[#FEF3C7] shadow-sm'
                    : 'bg-stone-200/80 hover:bg-stone-300 text-stone-700'
                }`}
              >
                Transit & Airport
              </button>
            </div>
          </div>

          {/* Nearby Attractions Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPlaces.map((place) => {
              const isSelected = activePlace.id === place.id && showActivePlaceMap;

              return (
                <div
                  key={place.id}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-lg ${
                    isSelected 
                      ? 'border-[#D97706] ring-2 ring-[#D97706]/30' 
                      : 'border-[#E8D8C3] hover:border-amber-400'
                  }`}
                >
                  {/* Top Image & Distance Badges */}
                  <div className="relative h-44 overflow-hidden bg-stone-900">
                    <img
                      src={place.image}
                      alt={place.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Category Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 text-white text-[10px] font-bold flex items-center space-x-1">
                      {getCategoryIcon(place.category)}
                      <span className="capitalize">{place.category}</span>
                    </div>

                    {/* Distance & Travel Time Floating Pill */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#800000] text-amber-100 border border-amber-400/40 text-[11px] font-bold shadow-md flex items-center space-x-1">
                      <Car className="w-3 h-3 text-amber-300" />
                      <span>{place.distanceDisplay}</span>
                      <span className="text-red-300">•</span>
                      <span>{place.driveTime}</span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[11px] text-amber-300 font-serif block leading-tight">
                        {place.hindiName}
                      </span>
                      <h4 className="font-serif text-base font-bold text-white tracking-tight leading-tight line-clamp-1 drop-shadow-sm">
                        {place.name}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    
                    {/* Highlights & Description */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-[#800000] flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-amber-600 flex-shrink-0" />
                        <span>Approx. {place.distanceDisplay} from The Aura</span>
                      </div>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {place.description}
                      </p>

                      {/* Route overview */}
                      <div className="p-2 rounded-lg bg-[#FDF9F3] border border-[#E8D8C3]/80 text-[11px] text-[#451A03] flex items-start space-x-1.5">
                        <Route className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug text-stone-700">
                          {place.routeDescription}
                        </span>
                      </div>

                      {/* Features Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {place.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200 font-medium"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Google Maps Direction & In-Page Map View */}
                    <div className="pt-2 border-t border-stone-100 flex flex-col gap-1.5">
                      
                      {/* Primary GPS Direction Button */}
                      <a
                        href={place.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full min-h-[42px] py-2 px-3 rounded-xl bg-[#800000] hover:bg-[#990000] active:scale-98 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-xs cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5 text-amber-300" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-75" />
                      </a>

                      {/* Secondary: Preview on Embedded Map */}
                      <button
                        onClick={() => handleSelectPlaceForMap(place)}
                        className={`w-full min-h-[38px] py-1.5 px-3 rounded-xl text-[11px] font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer active:scale-98 ${
                          isSelected
                            ? 'bg-amber-100 text-[#78350F] border border-amber-300'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                        }`}
                      >
                        <Map className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{isSelected ? '✓ Route Active in Map' : 'Preview on Map'}</span>
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Proximity Summary Banner */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#2A0E04] via-[#3B1405] to-[#2A0E04] text-[#FEF3C7] border border-amber-600/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center space-x-3.5 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-amber-200">
                  Planning an Ayodhya Tour or Group Pilgrimage?
                </h4>
                <p className="text-xs text-amber-100/80">
                  Pre-book your pure vegetarian lunch/dinner buffet, pack fasting thalis, or reserve banquet dining at The Aura on Ram Path Road.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 flex-shrink-0">
              <a
                href={`tel:${generalSettings.primaryPhone.replace(/[^0-9+]/g, '')}`}
                className="px-4 py-2.5 rounded-full bg-[#800000] hover:bg-[#990000] text-white text-xs font-bold border border-amber-400/30 flex items-center space-x-1.5 transition-all shadow-md hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call Concierge Desk</span>
              </a>

              <a
                href={getWhatsAppLink('banquet', 'Hello, we are planning a group visit / Ayodhya Darshan and would like to reserve dining / banquet meals at The Aura.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-all shadow-md hover:scale-105"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Group Booking</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
