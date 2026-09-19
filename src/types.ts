export type ServiceIntent = 
  | 'table' 
  | 'banquet' 
  | 'catering' 
  | 'corporate' 
  | 'general' 
  | 'menu_order';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  isChefSpecial?: boolean;
  isKeto?: boolean;
  isPopular?: boolean;
  diet: 'pure-veg' | 'jain-available';
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  iconName?: string;
}

export interface BanquetSpace {
  id: string;
  name: string;
  type: 'indoor' | 'outdoor' | 'hybrid';
  capacity: string;
  bestFor: string[];
  description: string;
  highlights: string[];
  image: string;
}

export interface CateringPackage {
  id: string;
  title: string;
  occasion: string;
  description: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'restaurant' | 'food' | 'banquet' | 'weddings' | 'catering' | 'corporate';
  image: string;
  alt: string;
  caption?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google' | 'Justdial' | 'Magicpin' | 'Direct Customer';
  rating: number;
  date: string;
  text: string;
  tag?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  requirement: string;
  preferredDate: string;
  guests: string;
  message: string;
}

export interface FamousPlace {
  id: string;
  name: string;
  hindiName: string;
  category: 'temple' | 'ghat' | 'landmark' | 'transit';
  distanceKm: number;
  distanceDisplay: string;
  driveTime: string;
  routeDescription: string;
  tagline: string;
  description: string;
  image: string;
  googleMapsDirectionsUrl: string;
  mapEmbedUrl: string;
  highlights: string[];
}
