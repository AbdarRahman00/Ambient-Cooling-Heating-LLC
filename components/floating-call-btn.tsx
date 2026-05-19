"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingCallBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-primary-dark/95 backdrop-blur-md border-t border-slate-700/60 shadow-2xl flex items-center justify-between gap-3"
        >
          {/* Call Hotline */}
          <a 
            href="tel:4104494021" 
            className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-lg bg-accent text-white font-bold text-sm shadow-lg shadow-accent/20 active:scale-95 transition-all pulse-badge"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Call (410) 449-4021</span>
          </a>

          {/* Book Online */}
          <Link 
            href="/contact" 
            className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white font-bold text-sm active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-brand-light" />
            <span>Book Online</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
