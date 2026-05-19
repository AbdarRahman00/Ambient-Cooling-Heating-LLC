import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, Shield, Award, HeartHandshake } from "lucide-react";
import { servicesData } from "@/data/services";
import { serviceAreasData } from "@/data/serviceAreas";

export default function Footer() {
  // Take 6 top services for the footer column
  const footerServices = servicesData.slice(0, 6);
  // Take 6 top areas
  const footerAreas = serviceAreasData.slice(0, 6);

  return (
    <footer className="bg-primary-dark border-t border-slate-800 text-slate-400">
      
      {/* Upper Trust Badges Bar */}
      <div className="border-b border-slate-800 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Fully Licensed & Insured</h4>
                <p className="text-xs text-slate-500 mt-1">MD License #923481 • Complete residential & commercial bonding.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">4.9 Star Rated Local Authority</h4>
                <p className="text-xs text-slate-500 mt-1">Over 250+ reviews. Respected for honesty and clean workmanship.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-green-500">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Family-Owned & Run</h4>
                <p className="text-xs text-slate-500 mt-1">Providing dedicated heating and air solutions to our Maryland neighbors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Brief */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-brand to-accent text-white font-bold text-lg shadow">
                A
              </span>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-tight">
                  AMBIENT
                </span>
                <span className="text-[9px] text-slate-400 font-semibold tracking-wider leading-none">
                  COOLING & HEATING
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Annapolis's trusted local heating and cooling specialists. Delivering top-tier efficiency, transparent pricing, and fast emergency repairs to Anne Arundel County residents.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a 
                href="tel:4104494021" 
                className="flex items-center gap-2.5 text-white font-bold hover:text-brand-light transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-brand-light" />
                (410) 449-4021
              </a>
              <span className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>1910 Towne Centre Blvd Suite 250,<br />Annapolis, MD 21401</span>
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white transition-colors">Financing Options</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Page</Link>
              </li>
            </ul>
          </div>

          {/* Top Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">HVAC Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Service Areas Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerAreas.map((area) => (
                <li key={area.slug}>
                  <Link 
                    href={`/service-areas/${area.slug}`} 
                    className="hover:text-white transition-colors"
                  >
                    {area.cityName} HVAC
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Ambient Cooling & Heating LLC. All rights reserved. 
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/contact" className="hover:text-slate-400">Emergency Support</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <span>•</span>
            <Link href="/financing" className="hover:text-slate-400">Financing Details</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
