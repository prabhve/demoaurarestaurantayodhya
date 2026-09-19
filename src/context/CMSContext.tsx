import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../config/restaurantInfo';
import { 
  MENU_ITEMS, 
  MENU_CATEGORIES, 
  BANQUET_SPACES, 
  CATERING_SERVICES, 
  GALLERY_ITEMS, 
  REVIEWS 
} from '../data/restaurantData';
import { BanquetSpace, CateringPackage, GalleryItem, MenuItem, MenuCategory, ReviewItem } from '../types';

export interface GeneralSettings {
  name: string;
  tagline: string;
  topRibbonText: string;
  primaryPhone: string;
  secondaryPhone: string;
  mobilePhone: string;
  whatsappNumber: string;
  primaryEmail: string;
  addressFull: string;
  addressLandmark: string;
  operatingHours: string;
  heroHeadline: string;
  heroSubtitle: string;
  freeDeliveryNote: string;
}

export interface CustomerInquiry {
  id: string;
  date: string;
  type: 'order' | 'table' | 'banquet' | 'catering' | 'corporate' | 'general';
  name: string;
  phone: string;
  details: string;
  status: 'pending' | 'confirmed' | 'completed';
}

interface CMSContextType {
  isAdminLoggedIn: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
  generalSettings: GeneralSettings;
  updateGeneralSettings: (settings: Partial<GeneralSettings>) => void;
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, updated: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  banquetSpaces: BanquetSpace[];
  updateBanquetSpace: (id: string, updated: Partial<BanquetSpace>) => void;
  cateringPackages: CateringPackage[];
  updateCateringPackage: (id: string, updated: Partial<CateringPackage>) => void;
  galleryItems: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  inquiries: CustomerInquiry[];
  addInquiry: (inquiry: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: 'pending' | 'confirmed' | 'completed') => void;
  deleteInquiry: (id: string) => void;
  resetAllToDefault: () => void;
}

const STORAGE_KEYS = {
  SETTINGS: 'theaura_general_settings',
  MENU: 'theaura_menu_items',
  BANQUETS: 'theaura_banquet_spaces',
  CATERING: 'theaura_catering_packages',
  GALLERY: 'theaura_gallery_items',
  INQUIRIES: 'theaura_customer_inquiries',
  ADMIN_AUTH: 'theaura_admin_auth'
};

const DEFAULT_SETTINGS: GeneralSettings = {
  name: "The Aura Restaurant & Banquets",
  tagline: "Pure Vegetarian Fine Dining, Celebrations & Catering in Ayodhya",
  topRibbonText: "Order Online Now @ +91- 6386903300 | +91- 6386903302 - +91-9619657771 - No Delivery Fee",
  primaryPhone: "+91 63869 03300",
  secondaryPhone: "+91 63869 03302",
  mobilePhone: "+91 96196 57771",
  whatsappNumber: "916386903300",
  primaryEmail: "soulfood@theauras.com",
  addressFull: "1633, Ram Path Road, Opposite ITI Phase 3, Awadhpuri Colony, Beniganj, Ayodhya, Uttar Pradesh - 224001",
  addressLandmark: "Opposite ITI Phase 3, on main Ram Path Road, close to Shri Ram Janmabhoomi Temple",
  operatingHours: "8:00 AM – 11:00 PM (All 7 Days)",
  heroHeadline: "Welcome to The Aura Ayodhya",
  heroSubtitle: "Pure Vegetarian Fine Dining, Royal Banquets, Lawn & In-House Catering on Ram Path Road. Savor wholesome delicacies prepared with pure desi ghee.",
  freeDeliveryNote: "No Delivery Fee in Ayodhya"
};

const INITIAL_INQUIRIES: CustomerInquiry[] = [
  {
    id: 'inq-1',
    date: 'Today, 11:30 AM',
    type: 'table',
    name: 'Rajesh Sharma',
    phone: '+91 9876543210',
    details: 'Family table reservation for 6 persons tonight at 8:30 PM. Satvik pure veg requested.',
    status: 'confirmed'
  },
  {
    id: 'inq-2',
    date: 'Yesterday, 04:15 PM',
    type: 'order',
    name: 'Sunita Verma',
    phone: '+91 9811223344',
    details: '2x Royal Special Thali, 1x Paneer Butter Masala, 4x Garlic Naan delivered near Naya Ghat.',
    status: 'completed'
  },
  {
    id: 'inq-3',
    date: '2 Days ago',
    type: 'banquet',
    name: 'Vikram Singh',
    phone: '+91 9723456789',
    details: 'Ring Ceremony booking for 150 guests in AC Banquet Hall on upcoming Sunday.',
    status: 'pending'
  }
];

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  const [generalSettings, setGeneralSettings] = useState<GeneralSettings>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MENU);
    return saved ? JSON.parse(saved) : MENU_ITEMS;
  });

  const [banquetSpaces, setBanquetSpaces] = useState<BanquetSpace[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BANQUETS);
    return saved ? JSON.parse(saved) : BANQUET_SPACES;
  });

  const [cateringPackages, setCateringPackages] = useState<CateringPackage[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATERING);
    return saved ? JSON.parse(saved) : CATERING_SERVICES;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : GALLERY_ITEMS;
  });

  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(generalSettings));
  }, [generalSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BANQUETS, JSON.stringify(banquetSpaces));
  }, [banquetSpaces]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATERING, JSON.stringify(cateringPackages));
  }, [cateringPackages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }, [inquiries]);

  const loginAdmin = (passcode: string): boolean => {
    const validPasscodes = ['aura2026', 'admin123', 'aura@2026', 'admin'];
    if (validPasscodes.includes(passcode.trim())) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  const updateGeneralSettings = (newSettings: Partial<GeneralSettings>) => {
    setGeneralSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: `menu-${Date.now()}`
    };
    setMenuItems(prev => [newItem, ...prev]);
  };

  const updateMenuItem = (id: string, updated: Partial<MenuItem>) => {
    setMenuItems(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const updateBanquetSpace = (id: string, updated: Partial<BanquetSpace>) => {
    setBanquetSpaces(prev => prev.map(space => space.id === id ? { ...space, ...updated } : space));
  };

  const updateCateringPackage = (id: string, updated: Partial<CateringPackage>) => {
    setCateringPackages(prev => prev.map(pkg => pkg.id === id ? { ...pkg, ...updated } : pkg));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-${Date.now()}`
    };
    setGalleryItems(prev => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems(prev => prev.filter(item => item.id !== id));
  };

  const addInquiry = (inquiry: Omit<CustomerInquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: CustomerInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      date: 'Just now',
      status: 'pending'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: 'pending' | 'confirmed' | 'completed') => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  const resetAllToDefault = () => {
    if (window.confirm("Are you sure you want to reset all CMS content to default data?")) {
      setGeneralSettings(DEFAULT_SETTINGS);
      setMenuItems(MENU_ITEMS);
      setBanquetSpaces(BANQUET_SPACES);
      setCateringPackages(CATERING_SERVICES);
      setGalleryItems(GALLERY_ITEMS);
      setInquiries(INITIAL_INQUIRIES);
      localStorage.clear();
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    }
  };

  return (
    <CMSContext.Provider
      value={{
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        generalSettings,
        updateGeneralSettings,
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        banquetSpaces,
        updateBanquetSpace,
        cateringPackages,
        updateCateringPackage,
        galleryItems,
        addGalleryItem,
        deleteGalleryItem,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        resetAllToDefault
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = (): CMSContextType => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
