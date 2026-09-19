import { BanquetSpace, CateringPackage, GalleryItem, MenuCategory, MenuItem, ReviewItem } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Specialties', description: 'Explore our complete 100% pure vegetarian culinary showcase' },
  { id: 'starters', name: 'Starters & Kebabs', description: 'Tandoori sizzlers, veg kebab platters, and crispy appetizers' },
  { id: 'main-course', name: 'Main Course & Gravies', description: 'Rich Mughlai & North Indian paneer delicacies, dal makhani and seasonal curries' },
  { id: 'thali', name: 'The Aura Royal Thali', description: 'Complete traditional dining experience with signature curries, breads, dal & desserts' },
  { id: 'rice-biryani', name: 'Rice & Dum Biryani', description: 'Fragrant basmati rice preparations with saffron and fresh spices' },
  { id: 'breads', name: 'Tandoori Breads & Kulchas', description: 'Fresh oven-baked naans, pudina parathas, stuffed kulchas and rotis' },
  { id: 'chinese', name: 'Chinese & Pan-Asian', description: 'Schezwan noodles, spring rolls, veg Manchurian and sizzling platters' },
  { id: 'south-indian', name: 'South Indian', description: 'Crispy dosas, fluffy idlis, and authentic sambar preparations' },
  { id: 'continental', name: 'Pizzas, Pastas & Burgers', description: 'Artisanal cheese pizzas, creamy pastas, handcrafted paneer burgers and garlic bread' },
  { id: 'beverages-desserts', name: 'Desserts & Beverages', description: 'Rich Indian sweets, hot gulab jamun, cold coffees and refreshing mocktails' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'm1',
    name: 'The Aura Signature Veg Kebab Platter',
    category: 'starters',
    description: 'Assortment of Paneer Tikka, Hara Bhara Kebab, Dahi ke Kebab, and Tandoori Mushroom served with mint chutney.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm2',
    name: 'Paneer Reshmi Tikka',
    category: 'starters',
    description: 'Cottage cheese marinated in rich hung curd, cashew paste, cardamom, and gentle spices roasted in clay tandoor.',
    diet: 'pure-veg',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: 'Crispy Veg Spring Rolls',
    category: 'starters',
    description: 'Thin pastry wrappers stuffed with sautéed garden vegetables, wok-tossed and served with sweet chili dip.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm4',
    name: 'Tandoori Stuffed Mushroom Tikka',
    category: 'starters',
    description: 'Fresh button mushrooms stuffed with spiced cottage cheese and herbs, chargrilled to perfection.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=800&auto=format&fit=crop'
  },

  // Main Course
  {
    id: 'm5',
    name: 'Paneer Patiala (Keto-Friendly Option)',
    category: 'main-course',
    description: 'Signature Punjabi specialty rolled with spiced cottage cheese filling, bathed in dual creamy tomato and cashew gravies.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isKeto: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm6',
    name: 'Kadhai Paneer Special',
    category: 'main-course',
    description: 'Succulent paneer chunks cooked with freshly crushed coriander seeds, bell peppers, onions, and spicy tomato reduction.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1589647364468-789f838b4c2b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm7',
    name: 'Dal Makhani "The Aura Style"',
    category: 'main-course',
    description: 'Black lentils slow-cooked overnight with churned white butter, cream, and subtle aromatic spices.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm8',
    name: 'Paneer Butter Masala',
    category: 'main-course',
    description: 'Soft cottage cheese cubes simmered in a velvety, mildly spiced makhani gravy enriched with fresh cream.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm9',
    name: 'Dum Aloo Kashmiri',
    category: 'main-course',
    description: 'Baby potatoes stuffed with seasoned dry fruits and paneer, slow simmered in rich saffron fennel yogurt gravy.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop'
  },

  // Thali
  {
    id: 'm10',
    name: 'The Aura Grand Executive Thali',
    category: 'thali',
    description: 'Lavish platter including Kadhai Paneer, Dal Makhani, Seasonal Vegetable, Dum Biryani, 2 Tandoori Breads, Raita, Salad, Papad & Hot Gulab Jamun.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm11',
    name: 'Special Jain Satvik Thali',
    category: 'thali',
    description: 'Prepared strictly without onion, garlic, or root vegetables. Includes Shahi Paneer, Moong Dal, Jeera Rice, Tawa Phulka, Fresh Salad and Kheer.',
    diet: 'jain-available',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop'
  },

  // Rice & Biryani
  {
    id: 'm12',
    name: 'Awadhi Shahi Dum Biryani',
    category: 'rice-biryani',
    description: 'Aromatic long-grain basmati layered with marinated vegetables, paneer cubes, saffron, mint, and fried onions, served with spiced burani raita.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm13',
    name: 'Kashmiri Pulao with Dry Fruits',
    category: 'rice-biryani',
    description: 'Sweet and fragrant saffron rice garnished with fried cashews, almonds, raisins, and fresh pomegranate.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop'
  },

  // Breads
  {
    id: 'm14',
    name: 'Mix Stuffed Amritsari Kulcha',
    category: 'breads',
    description: 'Crispy layered clay-oven bread stuffed with spiced potato, paneer, and onion with dollop of white butter.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm15',
    name: 'Green Chilli Garlic Naan',
    category: 'breads',
    description: 'Soft leavened bread topped with roasted minced garlic, chopped green chilies, and fresh coriander butter glaze.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm16',
    name: 'Pudina Butter Paratha',
    category: 'breads',
    description: 'Multi-layered whole wheat paratha dusted with dried mint powder and roasted in tandoor.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
  },

  // Chinese
  {
    id: 'm17',
    name: 'Schezwan Wok Noodles',
    category: 'chinese',
    description: 'Wok-tossed noodles with shredded cabbage, bell peppers, carrots, and in-house fiery schezwan sauce.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm18',
    name: 'Veg Manchurian Gravy / Dry',
    category: 'chinese',
    description: 'Crispy minced vegetable balls tossed in ginger, garlic, soy glaze, and fresh spring onion greens.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop'
  },

  // South Indian
  {
    id: 'm19',
    name: 'Special Butter Masala Dosa',
    category: 'south-indian',
    description: 'Golden crisp crepe prepared with fermented rice-lentil batter, filled with spiced potato masala and served with 3 chutneys & sambar.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm20',
    name: 'Paneer Cheese Burst Dosa',
    category: 'south-indian',
    description: 'Fusion dosa loaded with grated cottage cheese, molten cheese, onions, and gun powder spice.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },

  // Continental
  {
    id: 'm21',
    name: 'Veg Extravaganza Pizza',
    category: 'continental',
    description: 'Thin-crust stone-baked pizza loaded with fresh mozzarella, bell peppers, olives, corn, paneer cubes, and oregano.',
    diet: 'pure-veg',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm22',
    name: 'Creamy White Sauce Alfredo Pasta',
    category: 'continental',
    description: 'Penne pasta tossed in rich parmesan and cream sauce with sautéed mushrooms, broccoli, and toasted garlic bread.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm23',
    name: 'Paneer Tikka Burger with Cheese',
    category: 'continental',
    description: 'Toasted brioche bun stacked with chargrilled tandoori paneer patty, melted cheddar cheese, crisp lettuce, and mint mayo.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
  },

  // Desserts & Beverages
  {
    id: 'm24',
    name: 'Royal Shahi Tukda with Rabri',
    category: 'beverages-desserts',
    description: 'Crispy ghee-fried bread steeped in saffron sugar syrup and layered with thick condensed milk rabri & pistachios.',
    diet: 'pure-veg',
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm25',
    name: 'Hot Gulab Jamun with Ice Cream',
    category: 'beverages-desserts',
    description: 'Melt-in-mouth milk solids dumplings soaked in rose cardamom syrup, served with creamy vanilla bean ice cream.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm26',
    name: 'The Aura Signature Cold Coffee',
    category: 'beverages-desserts',
    description: 'Rich blended espresso with creamy vanilla ice cream, topped with chocolate drizzle.',
    diet: 'pure-veg',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  }
];

export const BANQUET_SPACES: BanquetSpace[] = [
  {
    id: 'indoor-hall',
    name: 'The Royal Aura Banquet Hall',
    type: 'indoor',
    capacity: 'Up to 200 Guests',
    bestFor: ['Engagement Ceremonies', 'Birthday Parties', 'Anniversaries', 'Kitty Parties', 'Corporate Seminars', 'Pooja Gatherings'],
    description: 'A fully centralized air-conditioned banquet hall adorned with warm chandeliers, acoustic insulation, customizable mood lighting, and dedicated stage setup.',
    highlights: [
      'Capacity: 50 to 200 Guests',
      'Centralized Air-Conditioning & Ambient Lighting',
      'State-of-the-Art Sound System & Wireless Mics',
      'Dedicated Stage & Backdrop Decoration',
      'Separate Dining & Buffet Counter Layout',
      'Dedicated Event Coordinator & Hospitality Staff'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'outdoor-lawn',
    name: 'The Grand Celebration Lawn',
    type: 'outdoor',
    capacity: 'Up to 5,000 Guests',
    bestFor: ['Grand Indian Weddings', 'Wedding Receptions', 'Mega Sangeet Nights', 'Political & Cultural Rallies', 'Grand Exhibitions'],
    description: 'Ayodhya’s most expansive open-air celebration venue featuring lush landscaped greens, wide entry gates, grand mandap setups, and capacity to host grand gatherings effortlessly.',
    highlights: [
      'Expansive Capacity: Up to 5,000 Guests',
      'Lush Green Landscaping & Sprawling Open Space',
      'Grand Stage, Mandap & Thematic Truss Setup Support',
      'Ample Multi-Cuisine Live Food Counters Space',
      'Dedicated Bridal Green Rooms & Dressing Suites',
      'Expansive Parking Space with Valet Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop'
  }
];

export const CATERING_SERVICES: CateringPackage[] = [
  {
    id: 'cat-wedding',
    title: 'Grand Wedding & Reception Catering',
    occasion: 'Weddings & Receptions',
    description: 'Complete royal vegetarian banqueting with live chaat stalls, tandoor stations, authentic Awadhi curries, dessert counters, and formal uniformed staff.',
    features: ['Customized Multi-Course Menu', 'Live Interactive Cooking Counters', '100% Pure Veg & Jain-Safe Kitchen', 'Premium Crockery & Buffet Setup'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'cat-social',
    title: 'Social Celebrations & Birthday Parties',
    occasion: 'Birthdays, Anniversaries & Family Get-Togethers',
    description: 'Vibrant starter-heavy menu with Chinese, Continental, South Indian and North Indian favorites tailored to all age groups.',
    features: ['Finger Foods & Mocktail Bar', 'Kids Friendly Snack Stations', 'On-Site Chef & Serving Team', 'Hygienic Disposable or Fine China options'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'cat-religious',
    title: 'Pooja, Katha & Satvik Catering',
    occasion: 'Religious Events & Temple Visits',
    description: 'Specialized Satvik and fasting menus cooked with pure desi ghee, without onion or garlic, tailored for devotional celebrations in Ayodhya.',
    features: ['100% No Onion / No Garlic Satvik Cuisine', 'Cooked with Pure Desi Ghee & Fresh Produce', 'Clean and Sanctified Food Handling', 'Traditional Indian Sweet Spreads'],
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'cat-outdoor',
    title: 'Outdoor Live Catering at Your Venue',
    occasion: 'At Your Home, Farmhouse or Banquet',
    description: 'We bring The Aura kitchen experience to your doorstep across Ayodhya and Faizabad region with full logistics and setup.',
    features: ['Complete Kitchen Equipment Logistics', 'Professional Master Chefs On-Site', 'Waste Management & Spotless Cleanliness', 'Flexible Headcount Packages'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Elegant Main Dining Hall',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    alt: 'The Aura Restaurant Interior Dining Space in Ayodhya',
    caption: 'Warm, air-conditioned family dining hall with premium seating and hospitable ambience.'
  },
  {
    id: 'g2',
    title: 'Grand Royal Banquet Hall Setup',
    category: 'banquet',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Indoor Banquet Hall Setup for 200 guests at The Aura Ayodhya',
    caption: 'Indoor luxury hall set up for celebration dinners and engagement ceremonies.'
  },
  {
    id: 'g3',
    title: 'Signature Paneer Sizzler & Kebabs',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1200&auto=format&fit=crop',
    alt: 'Freshly prepared vegetarian kebab platter at The Aura',
    caption: 'Char-grilled cottage cheese and tandoori delicacies freshly made by master chefs.'
  },
  {
    id: 'g4',
    title: 'Grand Outdoor Celebration Lawn',
    category: 'weddings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    alt: 'Outdoor Wedding Lawn at The Aura capable of hosting 5000 guests',
    caption: 'Expansive landscaped outdoor lawn accommodating grand wedding receptions and cultural galas.'
  },
  {
    id: 'g5',
    title: 'The Aura Grand Executive Thali',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1200&auto=format&fit=crop',
    alt: 'Royal Vegetarian Thali served at The Aura Restaurant Ayodhya',
    caption: 'Complete authentic Indian thali with dal makhani, kadhai paneer, breads and sweet.'
  },
  {
    id: 'g6',
    title: 'Live Wedding Catering Buffet',
    category: 'catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
    alt: 'Live Catering Spread for Wedding Events',
    caption: 'Buffet setup with fine dining service and customized vegetarian spreads.'
  },
  {
    id: 'g7',
    title: 'Corporate Conference & Seminar Room',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Corporate Meeting Space at The Aura Ayodhya',
    caption: 'Equipped with presentation facilities, high-speed Wi-Fi and executive dining options.'
  },
  {
    id: 'g8',
    title: 'Awadhi Shahi Dum Biryani with Burani Raita',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    alt: 'Fragrant Dum Biryani in Clay Pot',
    caption: 'Long grain basmati infused with saffron, spices and golden fried onions.'
  },
  {
    id: 'g9',
    title: 'Warm Welcoming Restaurant Ambience',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Family dining seating at The Aura',
    caption: 'Comfortable seating designed for families, pilgrims and group travellers in Ayodhya.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Pooja Srivastava',
    source: 'Google',
    rating: 5,
    date: 'Recent Ayodhya Visitor',
    text: 'Visited The Aura during our Ram Mandir trip with family. The food was 100% pure vegetarian and absolutely delicious! Paneer Patiala and Dal Makhani were top-notch. Clean atmosphere and very courteous staff.',
    tag: 'Family Dining'
  },
  {
    id: 'r2',
    author: 'Amitesh Kumar Pandey',
    source: 'Google',
    rating: 5,
    date: 'Ayodhya Resident',
    text: 'Hosted my daughter’s first birthday in the indoor banquet hall. The arrangements, lighting, and stage setup were flawless. All our 120 guests praised the catering and live food counters.',
    tag: 'Banquet Event'
  },
  {
    id: 'r3',
    author: 'Sunil Verma',
    source: 'Justdial',
    rating: 5,
    date: 'Corporate Client',
    text: 'We booked the corporate event space for our annual regional dealer meet. Excellent projector audio-visual support and the executive high-tea and buffet lunch was very well managed.',
    tag: 'Corporate Meet'
  },
  {
    id: 'r4',
    author: 'Dr. Meenakshi Tiwari',
    source: 'Google',
    rating: 5,
    date: 'Local Guide',
    text: 'One of the best pure vegetarian dining places on Ram Path Road in Ayodhya. The Royal Thali is very fulfilling and hygienic. Service is prompt and the interiors are very pleasant.',
    tag: 'Pure Veg Dining'
  }
];
