import { EnquiryFormData, ServiceIntent } from '../types';

export const RESTAURANT_INFO = {
  name: "The Aura Restaurant & Banquets",
  tagline: "Pure Vegetarian Fine Dining, Celebrations & Catering in Ayodhya",
  establishedYear: "2018",
  cuisineType: "100% Pure Vegetarian Multi-Cuisine",
  
  // Central WhatsApp configuration
  whatsappNumber: "916386903300",
  displayWhatsappNumber: "+91 63869 03300",
  
  // Direct Phone Numbers
  primaryPhone: "+91 63869 03300",
  secondaryPhone: "+91 63869 03305",
  alternatePhone: "+91 63869 03302",
  mobilePhone: "+91 96196 57771",
  
  // Emails
  primaryEmail: "soulfood@theauras.com",
  secondaryEmail: "devkienterprises45@gmail.com",
  
  // Physical Address & Location
  address: {
    line1: "1633, Ram Path Road",
    line2: "Opposite ITI (Phase 3), Near Ayodhya Gate",
    area: "Awadhpuri Colony, Beniganj",
    city: "Ayodhya",
    district: "Faizabad",
    state: "Uttar Pradesh",
    pincode: "224001",
    country: "India",
    fullAddress: "1633, Ram Path Road, Opposite ITI Phase 3, Awadhpuri Colony, Beniganj, Ayodhya, Uttar Pradesh - 224001",
    landmark: "Opposite ITI Phase 3, on main Ram Path Road, close to Shri Ram Janmabhoomi Temple & Ayodhya Gate",
    googleMapsUrl: "https://maps.google.com/?q=1633+Ram+Path+Road+Awadhpuri+Colony+Beniganj+Ayodhya+224001",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.248231269395!2d82.1469123!3d26.7869314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a079379659b9b%3A0x4a9b5f543e390c58!2sThe%20Aura%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  // Operating Hours
  timings: {
    days: "Open All 7 Days",
    hours: "8:00 AM – 11:00 PM",
    dining: "8:00 AM – 11:00 PM",
    banquets: "Open for Morning, Afternoon & Evening Events"
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/theaurarestaurantayodhya",
    instagram: "https://instagram.com/theaurarestaurant",
    youtube: "https://youtube.com",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJm5tldZMHmjkRWAw5PlRfm0o"
  },
  
  // Capacities
  capacity: {
    indoorBanquet: "Up to 200 Guests",
    outdoorLawn: "Up to 5,000 Guests",
    restaurantDining: "120+ Seats"
  },

  // Key Highlights
  highlights: [
    "100% Pure Vegetarian Kitchen",
    "Special Jain & Fasting Food Options",
    "Prime Location on Ram Path near Ram Mandir",
    "Indoor Luxury AC Banquet (200 Pax)",
    "Grand Outdoor Celebration Lawn (5000 Pax)",
    "In-House & Outdoor Live Catering",
    "Corporate Conference Facilities & AV Setup",
    "Spacious Parking & Warm Awadhi Hospitality"
  ]
};

/**
 * Generates a direct WhatsApp link with pre-filled professional enquiry message
 */
export function getWhatsAppLink(intent: ServiceIntent = 'general', customMessage?: string): string {
  const number = RESTAURANT_INFO.whatsappNumber;
  let text = "";

  switch (intent) {
    case 'table':
      text = "Hello The Aura Restaurant, I would like to enquire about a table reservation for dining.";
      break;
    case 'banquet':
      text = "Hello The Aura Restaurant, I am interested in booking your luxury banquet hall / celebration venue. Please share the availability, package details, and pricing.";
      break;
    case 'catering':
      text = "Hello The Aura Restaurant, I am interested in your in-house / outdoor catering services for an upcoming event. Please share the menu options.";
      break;
    case 'corporate':
      text = "Hello The Aura Restaurant, I would like to enquire about a corporate event / conference booking with dining setup.";
      break;
    case 'menu_order':
      text = customMessage 
        ? `Hello The Aura Restaurant, I would like to enquire / place an order for: ${customMessage}`
        : "Hello The Aura Restaurant, I would like to explore your menu and enquire about dining / takeaway.";
      break;
    case 'general':
    default:
      text = "Hello The Aura Restaurant, I would like to know more about your restaurant and services in Ayodhya.";
      break;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp link from form submission
 */
export function formatFormToWhatsApp(data: EnquiryFormData): string {
  const number = RESTAURANT_INFO.whatsappNumber;
  
  const formattedText = 
`Hello The Aura Restaurant,

I would like to make an enquiry:

• Name: ${data.name || 'Not specified'}
• Phone: ${data.phone || 'Not specified'}
• Requirement: ${data.requirement || 'General Enquiry'}
• Preferred Date: ${data.preferredDate || 'Flexible'}
• Number of Guests: ${data.guests || 'Not specified'}
• Message: ${data.message || 'Please contact me with details.'}

Thank you.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(formattedText)}`;
}
