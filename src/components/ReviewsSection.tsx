import React from 'react';
import { Star, MessageSquare, ExternalLink, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';
import { RESTAURANT_INFO } from '../config/restaurantInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#1C1917] text-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] bg-[#292524] px-3 py-1 rounded-full border border-[#C5A059]/40 mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Guest Experiences & Trust</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF7F2] tracking-tight">
            Words from Our Guests & Hosts
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Genuine experiences shared by families, wedding hosts, pilgrims, and corporate event organizers who have dined and celebrated at The Aura Ayodhya.
          </p>
        </div>

        {/* Reviews Summary Trust Bar */}
        <div className="max-w-xl mx-auto bg-[#24201E] rounded-xl p-4 mb-12 border border-stone-800 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-[#D4AF37]">4.8 ★</div>
            <div className="text-xs text-stone-400">Customer Rating</div>
          </div>
          <div className="h-8 w-px bg-stone-700 hidden sm:block" />
          <div>
            <div className="font-serif text-3xl font-bold text-stone-100">100%</div>
            <div className="text-xs text-stone-400">Pure Veg Certified</div>
          </div>
          <div className="h-8 w-px bg-stone-700 hidden sm:block" />
          <div>
            <div className="font-serif text-3xl font-bold text-stone-100">Since 2018</div>
            <div className="text-xs text-stone-400">Hospitality in Ayodhya</div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#24201E] p-6 rounded-xl border border-stone-800 shadow-md flex flex-col justify-between hover:border-[#C5A059]/40 transition-colors"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 text-[#D4AF37] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light italic mb-4">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FAF7F2]">{review.author}</h4>
                  <span className="text-[11px] text-stone-400">{review.date}</span>
                </div>
                {review.tag && (
                  <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#2E2926] px-2 py-0.5 rounded border border-stone-700">
                    {review.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link Button */}
        <div className="text-center">
          <a
            id="google-reviews-external-link"
            href={RESTAURANT_INFO.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#292524] hover:bg-[#332e2b] text-stone-200 hover:text-[#D4AF37] text-xs sm:text-sm font-semibold border border-stone-700 transition-colors"
          >
            <ThumbsUp className="w-4 h-4 text-[#C5A059]" />
            <span>Read More Reviews or Rate Us on Google</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-stone-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
