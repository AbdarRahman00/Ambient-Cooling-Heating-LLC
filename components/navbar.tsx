"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, Phone, MapPin, 
  Wind, Snowflake, Flame, Droplets, RefreshCw, 
  Settings, Cpu, Shield, Globe, Thermometer, 
  Sun, Waves, PlusCircle, Wrench, Activity 
} from "lucide-react";
import { servicesData } from "@/data/services";
import { serviceAreasData } from "@/data/serviceAreas";

// Helper component to render icons safely
export const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Wind": return <Wind className={className} />;
    case "Snowflake": return <Snowflake className={className} />;
    case "Flame": return <Flame className={className} />;
    case "Droplets": return <Droplets className={className} />;
    case "RefreshCw": return <RefreshCw className={className} />;
    case "Settings": return <Settings className={className} />;
    case "Cpu": return <Cpu className={className} />;
    case "Shield": return <Shield className={className} />;
    case "Globe": return <Globe className={className} />;
    case "Thermometer": return <Thermometer className={className} />;
    case "Sun": return <Sun className={className} />;
    case "Waves": return <Waves className={className} />;
    case "PlusCircle": return <PlusCircle className={className} />;
    case "Wrench": return <Wrench className={className} />;
    case "Activity": return <Activity className={className} />;
    default: return <Wind className={className} />;
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg py-2" : "bg-primary py-4 border-b border-white/5"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-brand to-accent text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              A
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-wide group-hover:text-brand-light transition-colors duration-300">
                AMBIENT
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-[0.15em] leading-none">
                COOLING & HEATING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors duration-200 ${isActive("/") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors duration-200 ${isActive("/about") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
            >
              About Us
            </Link>

            {/* Services Hover Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${pathname.startsWith("/services") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-primary-light border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden p-6 z-50 grid grid-cols-2 gap-4"
                  >
                    <div className="col-span-2 pb-2 border-b border-slate-700/50 mb-2 flex justify-between items-center">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">Our Professional Services</span>
                      <span className="text-[11px] text-slate-400">Annapolis Local HVAC experts</span>
                    </div>
                    {servicesData.map((service) => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-all duration-200 group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                          <ServiceIcon name={service.iconName} className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-white group-hover:text-brand-light transition-colors duration-200">
                            {service.title}
                          </h4>
                          <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                            {service.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Areas Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${pathname.startsWith("/service-areas") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {areasDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-80 bg-primary-light border border-slate-700/50 rounded-xl shadow-2xl p-4 z-50"
                  >
                    <div className="pb-2 border-b border-slate-700/50 mb-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Annapolis & Surrounding</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreasData.map((area) => (
                        <Link 
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          className="px-2 py-1.5 text-xs text-slate-300 hover:text-brand-light hover:bg-slate-800/40 rounded transition-all"
                        >
                          {area.cityName}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/financing" 
              className={`text-sm font-medium transition-colors duration-200 ${isActive("/financing") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
            >
              Financing
            </Link>

            <Link 
              href="/reviews" 
              className={`text-sm font-medium transition-colors duration-200 ${isActive("/reviews") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
            >
              Reviews
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors duration-200 ${isActive("/contact") ? "text-brand-light" : "text-slate-300 hover:text-white"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:4104494021" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-white font-medium hover:border-brand transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>(410) 449-4021</span>
            </a>
            <Link 
              href="/contact" 
              className="px-5 py-2 text-xs font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-all duration-300 glow-btn-orange shadow-md"
            >
              Schedule Service
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a 
              href="tel:4104494021" 
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-white"
            >
              <Phone className="w-4 h-4 text-brand-light" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-light focus:outline-none p-1.5"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-45 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Body */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="absolute right-0 top-0 w-80 h-[calc(100vh-60px)] bg-primary border-l border-slate-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-5">
                <Link 
                  href="/" 
                  className={`text-base font-semibold transition-colors ${isActive("/") ? "text-brand-light" : "text-slate-300"}`}
                >
                  Home
                </Link>

                <Link 
                  href="/about" 
                  className={`text-base font-semibold transition-colors ${isActive("/about") ? "text-brand-light" : "text-slate-300"}`}
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between text-base font-semibold text-slate-300 hover:text-white text-left"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-2 flex flex-col gap-2.5 border-l-2 border-slate-800"
                      >
                        {servicesData.map((service) => (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-sm text-slate-400 hover:text-brand-light"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Service Areas Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                    className="flex items-center justify-between text-base font-semibold text-slate-300 hover:text-white text-left"
                  >
                    <span>Service Areas</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAreasOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-2 grid grid-cols-2 gap-2 border-l-2 border-slate-800"
                      >
                        {serviceAreasData.map((area) => (
                          <Link 
                            key={area.slug}
                            href={`/service-areas/${area.slug}`}
                            className="text-sm text-slate-400 hover:text-brand-light"
                          >
                            {area.cityName}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/financing" 
                  className={`text-base font-semibold transition-colors ${isActive("/financing") ? "text-brand-light" : "text-slate-300"}`}
                >
                  Financing
                </Link>

                <Link 
                  href="/reviews" 
                  className={`text-base font-semibold transition-colors ${isActive("/reviews") ? "text-brand-light" : "text-slate-300"}`}
                >
                  Reviews
                </Link>

                <Link 
                  href="/contact" 
                  className={`text-base font-semibold transition-colors ${isActive("/contact") ? "text-brand-light" : "text-slate-300"}`}
                >
                  Contact
                </Link>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col gap-4">
                <a 
                  href="tel:4104494021" 
                  className="flex items-center justify-center gap-3 py-3 w-full rounded-xl bg-slate-800 border border-slate-700 text-white font-bold"
                >
                  <Phone className="w-5 h-5 text-brand" />
                  <span>Call (410) 449-4021</span>
                </a>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center py-3 w-full rounded-xl bg-accent hover:bg-accent-dark text-white font-bold text-center glow-btn-orange shadow-lg"
                >
                  Schedule Service
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
