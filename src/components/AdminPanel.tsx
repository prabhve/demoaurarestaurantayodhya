import React, { useState } from 'react';
import { 
  X, 
  LayoutDashboard, 
  Settings, 
  UtensilsCrossed, 
  Building, 
  ChefHat, 
  Image as ImageIcon, 
  Inbox, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  Save, 
  RotateCcw, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { MenuItem, BanquetSpace, CateringPackage, GalleryItem } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const {
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
    updateInquiryStatus,
    deleteInquiry,
    resetAllToDefault
  } = useCMS();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'general' | 'menu' | 'banquet' | 'catering' | 'gallery' | 'inquiries'>('dashboard');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Form state for General Settings
  const [genForm, setGenForm] = useState(generalSettings);

  // Menu Add / Edit Modal state
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);
  const [isAddingMenuItem, setIsAddingMenuItem] = useState(false);
  const [newMenuForm, setNewMenuForm] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    category: 'starters',
    description: '',
    diet: 'pure-veg',
    isChefSpecial: false,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop'
  });

  // Gallery Add state
  const [isAddingGallery, setIsAddingGallery] = useState(false);
  const [newGalleryForm, setNewGalleryForm] = useState<Omit<GalleryItem, 'id'>>({
    title: '',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
    alt: 'The Aura Ayodhya showcase',
    caption: ''
  });

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(null), 3000);
  };

  const handleSaveGeneral = (e: React.FormEvent) => {
    e.preventDefault();
    updateGeneralSettings(genForm);
    showNotification('General Settings updated and published successfully!');
  };

  const handleSaveNewMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMenuForm.name.trim()) return;
    addMenuItem(newMenuForm);
    setIsAddingMenuItem(false);
    setNewMenuForm({
      name: '',
      category: 'starters',
      description: '',
      diet: 'pure-veg',
      isChefSpecial: false,
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop'
    });
    showNotification('New menu item added to catalog!');
  };

  const handleSaveEditMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMenuItem) return;
    updateMenuItem(editingMenuItem.id, editingMenuItem);
    setEditingMenuItem(null);
    showNotification('Menu item details updated successfully!');
  };

  const handleSaveNewGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryForm.title.trim()) return;
    addGalleryItem(newGalleryForm);
    setIsAddingGallery(false);
    setNewGalleryForm({
      title: '',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
      alt: 'The Aura Ayodhya showcase',
      caption: ''
    });
    showNotification('New photo added to gallery!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-4 overflow-hidden">
      <div className="bg-[#18120C] text-[#FDFBF7] w-full max-w-6xl h-[92vh] max-h-[850px] rounded-2xl shadow-2xl border border-amber-600/40 flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-[#281206] border-b border-amber-900/60 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-base">
              A
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#FEF3C7]">The Aura Content & Service CMS</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                  Live Sync
                </span>
              </div>
              <p className="text-[11px] text-amber-300/70 hidden sm:block">
                Manage all content, menus, banners, bookings, photos & services in real-time.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                onClose();
              }}
              className="px-3 py-1.5 rounded bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 text-xs font-semibold flex items-center space-x-1 border border-amber-800 cursor-pointer"
              title="Close and view website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Site</span>
            </button>

            <button
              onClick={() => {
                logoutAdmin();
                onClose();
              }}
              className="px-3 py-1.5 rounded bg-red-950/60 hover:bg-red-900/80 text-red-200 text-xs font-semibold flex items-center space-x-1 border border-red-800 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {saveSuccessMsg && (
          <div className="bg-emerald-800 text-emerald-100 text-xs px-4 py-2 flex items-center justify-between border-b border-emerald-700 animate-fadeIn">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>{saveSuccessMsg}</span>
            </div>
            <button onClick={() => setSaveSuccessMsg(null)} className="text-emerald-300 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Main Body with Sidebar + Content */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Navigation Sidebar */}
          <div className="w-20 sm:w-56 bg-[#200E04] border-r border-amber-900/50 p-2 sm:p-3 flex flex-col justify-between overflow-y-auto flex-shrink-0">
            <div className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
                { id: 'inquiries', label: 'Inquiries & Orders', icon: Inbox, count: inquiries.filter(i => i.status === 'pending').length },
                { id: 'general', label: 'General & Ribbons', icon: Settings },
                { id: 'menu', label: 'Food Menu CMS', icon: UtensilsCrossed, count: menuItems.length },
                { id: 'banquet', label: 'Banquets & Lawn', icon: Building },
                { id: 'catering', label: 'Catering Packages', icon: ChefHat },
                { id: 'gallery', label: 'Photos Gallery', icon: ImageIcon, count: galleryItems.length },
              ].map(tab => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      active 
                        ? 'bg-[#D97706] text-[#1A0802] font-bold shadow-xs' 
                        : 'text-amber-200/80 hover:bg-amber-950/40 hover:text-amber-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </div>
                    {tab.count !== undefined && tab.count > 0 && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full hidden sm:inline ${
                        active ? 'bg-black/30 text-white' : 'bg-amber-900/60 text-amber-300'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-amber-900/40">
              <button
                onClick={resetAllToDefault}
                className="w-full p-2 text-center text-[10px] text-amber-400/60 hover:text-amber-300 flex items-center justify-center space-x-1 rounded bg-black/20 hover:bg-black/40 cursor-pointer"
                title="Reset all modified data to factory defaults"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset Defaults</span>
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-[#140C07] p-4 sm:p-6 overflow-y-auto">
            
            {/* 1. DASHBOARD TAB */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FEF3C7]">Administrative Overview</h3>
                  <p className="text-xs text-amber-200/70">Welcome to The Aura central management system.</p>
                </div>

                {/* Quick Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#241005] p-3.5 rounded-xl border border-amber-900/60">
                    <div className="text-[11px] text-amber-300/80">Pending Inquiries</div>
                    <div className="text-2xl font-bold text-amber-400 mt-1">
                      {inquiries.filter(i => i.status === 'pending').length}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Need customer reply</div>
                  </div>

                  <div className="bg-[#241005] p-3.5 rounded-xl border border-amber-900/60">
                    <div className="text-[11px] text-amber-300/80">Active Menu Items</div>
                    <div className="text-2xl font-bold text-amber-400 mt-1">{menuItems.length}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">100% Pure Veg</div>
                  </div>

                  <div className="bg-[#241005] p-3.5 rounded-xl border border-amber-900/60">
                    <div className="text-[11px] text-amber-300/80">Banquet & Lawn Spaces</div>
                    <div className="text-2xl font-bold text-amber-400 mt-1">{banquetSpaces.length}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Up to 5,000 Pax</div>
                  </div>

                  <div className="bg-[#241005] p-3.5 rounded-xl border border-amber-900/60">
                    <div className="text-[11px] text-amber-300/80">Photo Gallery Assets</div>
                    <div className="text-2xl font-bold text-amber-400 mt-1">{galleryItems.length}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Curated Media</div>
                  </div>
                </div>

                {/* Recent Inquiries List */}
                <div className="bg-[#200E04] rounded-xl p-4 border border-amber-900/60">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-serif text-sm font-bold text-[#FEF3C7]">Recent Customer Inquiries & Orders</h4>
                    <button
                      onClick={() => setActiveTab('inquiries')}
                      className="text-xs text-amber-400 hover:text-amber-300 underline"
                    >
                      View All ({inquiries.length})
                    </button>
                  </div>

                  <div className="space-y-2">
                    {inquiries.slice(0, 3).map(inq => (
                      <div key={inq.id} className="p-3 bg-[#2D1407] rounded-lg border border-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-xs text-amber-100">{inq.name}</span>
                            <span className="text-[10px] font-mono text-amber-300/70">{inq.phone}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              inq.status === 'confirmed' ? 'bg-emerald-900/70 text-emerald-300 border border-emerald-700' :
                              inq.status === 'completed' ? 'bg-blue-900/70 text-blue-300 border border-blue-700' :
                              'bg-amber-900/70 text-amber-300 border border-amber-700'
                            }`}>
                              {inq.status}
                            </span>
                          </div>
                          <p className="text-xs text-stone-300 mt-1">{inq.details}</p>
                          <span className="text-[10px] text-stone-400">{inq.date}</span>
                        </div>

                        <div className="flex items-center space-x-2 self-end sm:self-center">
                          <a
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.name}, Greetings from The Aura Restaurant Ayodhya regarding your inquiry.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center space-x-1"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action Shortcuts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('menu');
                      setIsAddingMenuItem(true);
                    }}
                    className="p-3 rounded-lg bg-[#281206] hover:bg-[#381B0B] border border-amber-900/60 text-left cursor-pointer"
                  >
                    <UtensilsCrossed className="w-5 h-5 text-amber-400 mb-1" />
                    <div className="text-xs font-bold text-amber-100">+ Add New Dish</div>
                    <div className="text-[10px] text-stone-400">Add starters, mains, or thalis to online menu</div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('general');
                    }}
                    className="p-3 rounded-lg bg-[#281206] hover:bg-[#381B0B] border border-amber-900/60 text-left cursor-pointer"
                  >
                    <Settings className="w-5 h-5 text-amber-400 mb-1" />
                    <div className="text-xs font-bold text-amber-100">Edit Contact & Ribbon</div>
                    <div className="text-[10px] text-stone-400">Change announcement banner or phones</div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('gallery');
                      setIsAddingGallery(true);
                    }}
                    className="p-3 rounded-lg bg-[#281206] hover:bg-[#381B0B] border border-amber-900/60 text-left cursor-pointer"
                  >
                    <ImageIcon className="w-5 h-5 text-amber-400 mb-1" />
                    <div className="text-xs font-bold text-amber-100">+ Upload New Photo</div>
                    <div className="text-[10px] text-stone-400">Add event, lawn, or food photos</div>
                  </button>
                </div>

              </div>
            )}

            {/* 2. GENERAL SETTINGS & TOP RIBBON TAB */}
            {activeTab === 'general' && (
              <form onSubmit={handleSaveGeneral} className="space-y-4 max-w-3xl">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">General Information & Top Ribbon</h3>
                  <p className="text-xs text-amber-200/70">Updates banner text, phone numbers, and addresses immediately.</p>
                </div>

                <div className="bg-[#200E04] p-4 rounded-xl border border-amber-900/60 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Top Announcement Banner Ribbon</h4>
                  <div>
                    <label className="block text-[11px] text-stone-300 mb-1">Header Announcement Text</label>
                    <input
                      type="text"
                      value={genForm.topRibbonText}
                      onChange={(e) => setGenForm({ ...genForm, topRibbonText: e.target.value })}
                      className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone-300 mb-1">Free Delivery Note</label>
                    <input
                      type="text"
                      value={genForm.freeDeliveryNote}
                      onChange={(e) => setGenForm({ ...genForm, freeDeliveryNote: e.target.value })}
                      className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="bg-[#200E04] p-4 rounded-xl border border-amber-900/60 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Contact Numbers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-300 mb-1">Primary Phone</label>
                      <input
                        type="text"
                        value={genForm.primaryPhone}
                        onChange={(e) => setGenForm({ ...genForm, primaryPhone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-300 mb-1">Secondary Phone</label>
                      <input
                        type="text"
                        value={genForm.secondaryPhone}
                        onChange={(e) => setGenForm({ ...genForm, secondaryPhone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-300 mb-1">Banquet / Mobile Desk</label>
                      <input
                        type="text"
                        value={genForm.mobilePhone}
                        onChange={(e) => setGenForm({ ...genForm, mobilePhone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-stone-300 mb-1">Central WhatsApp Number (Digits only)</label>
                    <input
                      type="text"
                      value={genForm.whatsappNumber}
                      onChange={(e) => setGenForm({ ...genForm, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="bg-[#200E04] p-4 rounded-xl border border-amber-900/60 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Location, Address & Timings</h4>
                  <div>
                    <label className="block text-[11px] text-stone-300 mb-1">Official Address</label>
                    <input
                      type="text"
                      value={genForm.addressFull}
                      onChange={(e) => setGenForm({ ...genForm, addressFull: e.target.value })}
                      className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-300 mb-1">Email</label>
                      <input
                        type="email"
                        value={genForm.primaryEmail}
                        onChange={(e) => setGenForm({ ...genForm, primaryEmail: e.target.value })}
                        className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-300 mb-1">Operating Hours</label>
                      <input
                        type="text"
                        value={genForm.operatingHours}
                        onChange={(e) => setGenForm({ ...genForm, operatingHours: e.target.value })}
                        className="w-full px-3 py-2 bg-[#2D1407] border border-amber-900 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish All General Changes</span>
                </button>
              </form>
            )}

            {/* 3. MENU ITEMS CMS */}
            {activeTab === 'menu' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">Food Menu & Specialties Catalog</h3>
                    <p className="text-xs text-amber-200/70">Manage recipes, descriptions, categories, and culinary photos.</p>
                  </div>
                  <button
                    onClick={() => setIsAddingMenuItem(true)}
                    className="py-2 px-4 rounded-lg bg-[#D97706] hover:bg-[#F59E0B] text-[#1A0802] font-bold text-xs flex items-center space-x-1.5 self-start sm:self-auto cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Dish</span>
                  </button>
                </div>

                {/* Add New Item Form */}
                {isAddingMenuItem && (
                  <form onSubmit={handleSaveNewMenu} className="bg-[#241005] p-4 rounded-xl border-2 border-amber-600/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-amber-300">+ Add New Culinary Dish</h4>
                      <button type="button" onClick={() => setIsAddingMenuItem(false)} className="text-stone-400 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Dish Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Paneer Tikka Lazeez"
                          value={newMenuForm.name}
                          onChange={(e) => setNewMenuForm({ ...newMenuForm, name: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Category</label>
                        <select
                          value={newMenuForm.category}
                          onChange={(e) => setNewMenuForm({ ...newMenuForm, category: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        >
                          <option value="starters">Starters & Kebabs</option>
                          <option value="main-course">Main Course & Gravies</option>
                          <option value="thali">The Aura Royal Thali</option>
                          <option value="rice-biryani">Rice & Dum Biryani</option>
                          <option value="breads">Tandoori Breads</option>
                          <option value="chinese">Chinese & Pan-Asian</option>
                          <option value="south-indian">South Indian</option>
                          <option value="continental">Continental & Pizzas</option>
                          <option value="beverages-desserts">Desserts & Beverages</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Description</label>
                        <textarea
                          rows={2}
                          placeholder="Rich marinade details, ingredients..."
                          value={newMenuForm.description}
                          onChange={(e) => setNewMenuForm({ ...newMenuForm, description: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Image URL (Unsplash or direct image link)</label>
                        <input
                          type="url"
                          value={newMenuForm.image}
                          onChange={(e) => setNewMenuForm({ ...newMenuForm, image: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-1.5 text-xs text-stone-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newMenuForm.isChefSpecial}
                            onChange={(e) => setNewMenuForm({ ...newMenuForm, isChefSpecial: e.target.checked })}
                            className="rounded border-amber-900"
                          />
                          <span>Chef's Special</span>
                        </label>

                        <label className="flex items-center space-x-1.5 text-xs text-stone-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={newMenuForm.isPopular}
                            onChange={(e) => setNewMenuForm({ ...newMenuForm, isPopular: e.target.checked })}
                            className="rounded border-amber-900"
                          />
                          <span>Bestseller / Popular</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <button type="submit" className="py-2 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer">
                        Save Dish to Menu
                      </button>
                      <button type="button" onClick={() => setIsAddingMenuItem(false)} className="py-2 px-3 rounded bg-stone-800 text-stone-300 text-xs">
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {/* Edit Item Modal */}
                {editingMenuItem && (
                  <form onSubmit={handleSaveEditMenu} className="bg-[#241005] p-4 rounded-xl border-2 border-amber-500 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-amber-300">Edit Dish: {editingMenuItem.name}</h4>
                      <button type="button" onClick={() => setEditingMenuItem(null)} className="text-stone-400 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Dish Name</label>
                        <input
                          type="text"
                          required
                          value={editingMenuItem.name}
                          onChange={(e) => setEditingMenuItem({ ...editingMenuItem, name: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Category</label>
                        <select
                          value={editingMenuItem.category}
                          onChange={(e) => setEditingMenuItem({ ...editingMenuItem, category: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        >
                          <option value="starters">Starters & Kebabs</option>
                          <option value="main-course">Main Course & Gravies</option>
                          <option value="thali">The Aura Royal Thali</option>
                          <option value="rice-biryani">Rice & Dum Biryani</option>
                          <option value="breads">Tandoori Breads</option>
                          <option value="chinese">Chinese & Pan-Asian</option>
                          <option value="south-indian">South Indian</option>
                          <option value="continental">Continental & Pizzas</option>
                          <option value="beverages-desserts">Desserts & Beverages</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={editingMenuItem.description || ''}
                          onChange={(e) => setEditingMenuItem({ ...editingMenuItem, description: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Image URL</label>
                        <input
                          type="url"
                          value={editingMenuItem.image || ''}
                          onChange={(e) => setEditingMenuItem({ ...editingMenuItem, image: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-1.5 text-xs text-stone-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={!!editingMenuItem.isChefSpecial}
                            onChange={(e) => setEditingMenuItem({ ...editingMenuItem, isChefSpecial: e.target.checked })}
                          />
                          <span>Chef's Special</span>
                        </label>

                        <label className="flex items-center space-x-1.5 text-xs text-stone-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={!!editingMenuItem.isPopular}
                            onChange={(e) => setEditingMenuItem({ ...editingMenuItem, isPopular: e.target.checked })}
                          />
                          <span>Popular Bestseller</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <button type="submit" className="py-2 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer">
                        Update Dish
                      </button>
                      <button type="button" onClick={() => setEditingMenuItem(null)} className="py-2 px-3 rounded bg-stone-800 text-stone-300 text-xs">
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {menuItems.map((item) => (
                    <div key={item.id} className="bg-[#200E04] rounded-xl border border-amber-900/60 overflow-hidden flex flex-col justify-between p-3">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center space-x-2">
                            <img
                              src={item.image || 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=200&auto=format&fit=crop'}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                            />
                            <div>
                              <h5 className="font-bold text-xs text-amber-100 leading-tight">{item.name}</h5>
                              <span className="text-[10px] text-amber-400 capitalize">{item.category}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed mb-2">
                          {item.description || 'No description added yet.'}
                        </p>

                        <div className="flex items-center gap-1.5 flex-wrap">
                          {item.isChefSpecial && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-600/40 rounded">
                              Chef's Special
                            </span>
                          )}
                          {item.isPopular && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
                              Bestseller
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-amber-900/40 flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setEditingMenuItem(item)}
                          className="p-1.5 rounded bg-amber-900/40 hover:bg-amber-800 text-amber-300 text-xs flex items-center space-x-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${item.name}" from the menu?`)) {
                              deleteMenuItem(item.id);
                              showNotification(`"${item.name}" removed from menu.`);
                            }
                          }}
                          className="p-1.5 rounded bg-red-950/40 hover:bg-red-900 text-red-300 text-xs flex items-center space-x-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. BANQUETS & CELEBRATION LAWN CMS */}
            {activeTab === 'banquet' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">Banquet Hall & Grand Lawn CMS</h3>
                  <p className="text-xs text-amber-200/70">Edit indoor hall (200 pax) and grand lawn (5000 pax) capacity, images, and descriptions.</p>
                </div>

                <div className="space-y-4">
                  {banquetSpaces.map(space => (
                    <div key={space.id} className="bg-[#200E04] rounded-xl p-4 border border-amber-900/60 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-base font-bold text-amber-300">{space.name}</h4>
                        <span className="text-xs font-bold text-amber-200 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-800">
                          {space.capacity}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] text-stone-300 mb-1">Space Name</label>
                          <input
                            type="text"
                            value={space.name}
                            onChange={(e) => updateBanquetSpace(space.id, { name: e.target.value })}
                            className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] text-stone-300 mb-1">Capacity</label>
                          <input
                            type="text"
                            value={space.capacity}
                            onChange={(e) => updateBanquetSpace(space.id, { capacity: e.target.value })}
                            className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-[11px] text-stone-300 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={space.description}
                            onChange={(e) => updateBanquetSpace(space.id, { description: e.target.value })}
                            className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-[11px] text-stone-300 mb-1">Image URL</label>
                          <input
                            type="url"
                            value={space.image}
                            onChange={(e) => updateBanquetSpace(space.id, { image: e.target.value })}
                            className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => showNotification(`Updated ${space.name} configuration!`)}
                        className="py-1.5 px-3 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center space-x-1 cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Space Details</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. CATERING PACKAGES CMS */}
            {activeTab === 'catering' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">In-House & Outdoor Catering Packages</h3>
                  <p className="text-xs text-amber-200/70">Edit wedding, social, religious pooja, and outdoor live catering offerings.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cateringPackages.map(pkg => (
                    <div key={pkg.id} className="bg-[#200E04] rounded-xl p-4 border border-amber-900/60 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-amber-400">{pkg.occasion}</span>
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Package Title</label>
                        <input
                          type="text"
                          value={pkg.title}
                          onChange={(e) => updateCateringPackage(pkg.id, { title: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={pkg.description}
                          onChange={(e) => updateCateringPackage(pkg.id, { description: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Image URL</label>
                        <input
                          type="url"
                          value={pkg.image}
                          onChange={(e) => updateCateringPackage(pkg.id, { image: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#2D1407] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => showNotification(`Updated "${pkg.title}" catering package!`)}
                        className="py-1.5 px-3 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center space-x-1 cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Package</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. PHOTO & MEDIA GALLERY CMS */}
            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">Photo & Media Gallery CMS</h3>
                    <p className="text-xs text-amber-200/70">Showcase banquet decor, pure veg delicacies, dining hall, and weddings.</p>
                  </div>
                  <button
                    onClick={() => setIsAddingGallery(true)}
                    className="py-2 px-4 rounded-lg bg-[#D97706] hover:bg-[#F59E0B] text-[#1A0802] font-bold text-xs flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Upload / Add Photo</span>
                  </button>
                </div>

                {isAddingGallery && (
                  <form onSubmit={handleSaveNewGallery} className="bg-[#241005] p-4 rounded-xl border-2 border-amber-600 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-amber-300">+ Add Photo to Showcase</h4>
                      <button type="button" onClick={() => setIsAddingGallery(false)} className="text-stone-400 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Grand Wedding Mandap Setup"
                          value={newGalleryForm.title}
                          onChange={(e) => setNewGalleryForm({ ...newGalleryForm, title: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-stone-300 mb-1">Category</label>
                        <select
                          value={newGalleryForm.category}
                          onChange={(e) => setNewGalleryForm({ ...newGalleryForm, category: e.target.value as any })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        >
                          <option value="restaurant">Restaurant & Ambience</option>
                          <option value="banquet">Indoor Banquet</option>
                          <option value="weddings">Outdoor Lawn Weddings</option>
                          <option value="food">Pure Veg Food</option>
                          <option value="catering">Live Catering</option>
                          <option value="corporate">Corporate Events</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Image URL (High-Res Link)</label>
                        <input
                          type="url"
                          required
                          value={newGalleryForm.image}
                          onChange={(e) => setNewGalleryForm({ ...newGalleryForm, image: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] text-stone-300 mb-1">Caption / Subtitle</label>
                        <input
                          type="text"
                          value={newGalleryForm.caption}
                          onChange={(e) => setNewGalleryForm({ ...newGalleryForm, caption: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#170A03] border border-amber-900 rounded text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <button type="submit" className="py-2 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer">
                        Add to Gallery
                      </button>
                      <button type="button" onClick={() => setIsAddingGallery(false)} className="py-2 px-3 rounded bg-stone-800 text-stone-300 text-xs">
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {galleryItems.map(item => (
                    <div key={item.id} className="bg-[#200E04] rounded-xl overflow-hidden border border-amber-900/60 flex flex-col justify-between">
                      <div className="relative h-32 w-full bg-stone-900">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <span className="absolute top-1.5 left-1.5 text-[9px] font-bold uppercase bg-black/70 text-amber-300 px-1.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-2.5">
                        <h5 className="font-bold text-xs text-amber-100 line-clamp-1">{item.title}</h5>
                        {item.caption && <p className="text-[10px] text-stone-400 line-clamp-1 mt-0.5">{item.caption}</p>}
                      </div>
                      <div className="p-2 pt-0 flex justify-end">
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete this photo from gallery?`)) {
                              deleteGalleryItem(item.id);
                              showNotification('Photo removed from gallery.');
                            }
                          }}
                          className="p-1 rounded bg-red-950/60 hover:bg-red-900 text-red-300 text-[10px] flex items-center space-x-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. CUSTOMER INQUIRIES & ORDERS DESK */}
            {activeTab === 'inquiries' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FEF3C7]">Customer Inquiries & Order Requests</h3>
                    <p className="text-xs text-amber-200/70">Track table bookings, online food orders, and wedding catering inquiries.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {inquiries.map(inq => (
                    <div key={inq.id} className="bg-[#200E04] p-4 rounded-xl border border-amber-900/60 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-serif font-bold text-sm text-amber-100">{inq.name}</span>
                          <span className="font-mono text-xs text-amber-300">{inq.phone}</span>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                            {inq.type}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-[11px] text-stone-400">{inq.date}</span>
                          <select
                            value={inq.status}
                            onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                            className="text-xs px-2 py-1 bg-[#2E1204] border border-amber-900 rounded text-amber-200 font-bold focus:outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>
                      </div>

                      <p className="text-xs text-stone-300 bg-[#2B1307] p-2.5 rounded-lg border border-amber-950">
                        {inq.details}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.name}, Greetings from The Aura Restaurant & Banquets Ayodhya. We have received your request regarding: "${inq.details}". How may we assist you further?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Reply Directly on WhatsApp</span>
                        </a>

                        <button
                          onClick={() => {
                            if (window.confirm('Delete this inquiry record?')) {
                              deleteInquiry(inq.id);
                              showNotification('Inquiry record deleted.');
                            }
                          }}
                          className="p-1.5 rounded bg-red-950 hover:bg-red-900 text-red-300 text-xs flex items-center space-x-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
