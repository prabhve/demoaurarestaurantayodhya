import React, { useState } from 'react';
import { X, Lock, ShieldCheck, KeyRound, AlertCircle, ArrowRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const { loginAdmin } = useCMS();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passcode)) {
      setError('');
      setPasscode('');
      onLoginSuccess();
      onClose();
    } else {
      setError('Invalid security passcode. Default demo passcode is: aura2026');
    }
  };

  const handleQuickDemoLogin = () => {
    loginAdmin('aura2026');
    setError('');
    setPasscode('');
    onLoginSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-[#1C1917] text-[#FAF7F2] max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-amber-600/40 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#2A1004] border-b border-amber-900/60 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#FEF3C7]">The Aura Admin Portal</h3>
              <p className="text-[11px] text-amber-300/70">Secure Management & CMS Desk</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-amber-200/60 hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full bg-[#3D1807] border border-amber-600/30 flex items-center justify-center text-[#F59E0B] mx-auto mb-2">
              <KeyRound className="w-6 h-6" />
            </div>
            <p className="text-xs text-amber-100/80">
              Enter the authorized passcode to manage menu, banners, bookings, photos, and live details.
            </p>
          </div>

          {error && (
            <div className="p-2.5 bg-red-950/70 border border-red-800 rounded-lg text-xs text-red-200 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-amber-200 mb-1">
              Admin Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Enter passcode (e.g. aura2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#2E1204] border border-amber-900 rounded-lg text-sm text-white placeholder:text-amber-300/30 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <Lock className="w-4 h-4 text-amber-500/50 absolute right-3 top-3" />
            </div>
            <p className="text-[11px] text-amber-400/60 mt-1">
              Default demo key: <span className="font-mono text-amber-300">aura2026</span>
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#D97706] hover:bg-[#F59E0B] text-[#1F0901] font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all shadow-md cursor-pointer"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full py-2 rounded-lg bg-[#2E1204] hover:bg-[#3D1807] text-amber-300 text-xs font-medium border border-amber-900/80 transition-colors cursor-pointer"
            >
              One-Click Staff Access (Demo)
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
