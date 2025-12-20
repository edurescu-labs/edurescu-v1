import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { EmergencySubmissionPage } from './components/emergency/EmergencySubmissionPage';
import { Search, Bell, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[240px]">
        {/* Top Header */}
        <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40 backdrop-blur-sm bg-white/95">
          <div className="max-w-[1400px] mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                  <input
                    type="text"
                    placeholder="Search courses, tutors, resources..."
                    className="w-full pl-10 pr-4 py-3 bg-[#F9FAFB] border border-transparent rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-[#1D4ED8] text-white rounded-xl hover:bg-[#1E40AF] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Upgrade to Pro
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200 relative"
                >
                  <Bell className="w-5 h-5 text-[#64748B]" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200"
                >
                  <HelpCircle className="w-5 h-5 text-[#64748B]" />
                </motion.button>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-11 h-11 rounded-full bg-[#1D4ED8] flex items-center justify-center cursor-pointer hover:bg-[#1E40AF] transition-all duration-200 shadow-md"
                >
                  <span className="text-white font-semibold">AN</span>
                </motion.div>
              </div>
            </div>
          </div>
        </header>

        {/* Emergency Submission Page */}
        <EmergencySubmissionPage />
      </div>
    </div>
  );
}
