import React, { useState } from 'react';
import { CMSProvider, useCMS } from './context/CMSContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BanquetSection } from './components/BanquetSection';
import { CateringSection } from './components/CateringSection';
import { CorporateSection } from './components/CorporateSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { OrderModal } from './components/OrderModal';
import { InfoModal } from './components/InfoModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminPanel } from './components/AdminPanel';

function MainAppContent() {
  const { isAdminLoggedIn } = useCMS();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalType, setBookingModalType] = useState<string | undefined>(undefined);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'terms' | 'privacy' | 'pureveg' | null>(null);
  
  // Admin Portal State
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  const handleOpenBookingModal = (type?: string) => {
    setBookingModalType(type);
    setBookingModalOpen(true);
  };

  const handleOpenOrderModal = () => {
    setOrderModalOpen(true);
  };

  const handleOpenInfoModal = (type: 'terms' | 'privacy' | 'pureveg') => {
    setInfoModalType(type);
  };

  const handleOpenAdminPortal = () => {
    if (isAdminLoggedIn) {
      setAdminPanelOpen(true);
    } else {
      setAdminLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF9F3] text-[#29180E] relative selection:bg-[#800000]/20 selection:text-[#800000]">
      
      {/* 1. Header with Top Announcement Ribbon & Exact Navigation */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Main Page: Strictly containing the 6 requested sections */}
      <main className="flex-1">
        
        {/* Section 1: Home */}
        <Hero 
          onOpenBookingModal={handleOpenBookingModal}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Section 2: About Us */}
        <AboutSection />

        {/* Section 3: Banquet */}
        <BanquetSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 4: Catering */}
        <CateringSection />

        {/* Section 5: Corporate Events */}
        <CorporateSection />

        {/* Section 6: Contact Us */}
        <ContactSection />

      </main>

      {/* Footer with matching links, VYUVIK LABS signature, & admin trigger */}
      <Footer 
        onOpenInfoModal={handleOpenInfoModal}
        onOpenOrderModal={handleOpenOrderModal}
        onOpenBookingModal={handleOpenBookingModal}
        onOpenAdminModal={handleOpenAdminPortal}
      />

      {/* Instant WhatsApp Quick Desk */}
      <FloatingWhatsApp />

      {/* Reservations Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialType={bookingModalType}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Order Online Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      {/* Policy & Purity Standards Modal */}
      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={() => {
          setAdminLoginOpen(false);
          setAdminPanelOpen(true);
        }}
      />

      {/* Full A-to-Z Admin CMS Management Dashboard */}
      <AdminPanel
        isOpen={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <MainAppContent />
    </CMSProvider>
  );
}
