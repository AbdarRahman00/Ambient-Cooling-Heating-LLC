import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, MapPin, Clock, ArrowRight, ShieldCheck, Flame, Star } from "lucide-react";
import { serviceAreasData } from "@/data/serviceAreas";

export const metadata: Metadata = {
  title: "Our Service Areas | Ambient Cooling & Heating LLC",
  description: "View all our primary HVAC service areas in Anne Arundel County, Maryland. Same-day emergency response in Annapolis, Severn, Crofton, Pasadena, Severn, and nearby cities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/20 px-3 py-1.5 rounded-full">
            Anne Arundel County & Surrounding
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Our Maryland Service Areas
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Annapolis, our mobile dispatch standby vehicles are stationed locally throughout these communities to guarantee same-day system restoration.
          </p>
        </div>
      </section>

      {/* Areas Index Grid */}
      <section className="py-20 bg-cool">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand bg-brand/5 px-3 py-1 w-fit rounded-full mx-auto">
              10 Primary Cities Served
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4">
              Local HVAC Standby Dispatched Directly To Your Community
            </h2>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Explore your city's dedicated landing page for neighborhood coverage lists, localized environmental tips, and custom FAQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {serviceAreasData.map((area) => (
              <div 
                key={area.slug}
                className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-[9px] font-bold text-accent bg-accent/5 px-2.5 py-1 rounded-full uppercase tracking-wider">Active Area</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-primary group-hover:text-brand transition-colors">
                    {area.cityName}, MD
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 font-medium tracking-wide">
                    Zip Codes served: {area.zipCodes.join(", ")}
                  </p>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                    {area.description}
                  </p>

                  {/* Neighborhood snippet */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Neighborhoods Include:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {area.neighborhoods.slice(0, 3).map((hood, hIdx) => (
                        <span key={hIdx} className="bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-500 font-semibold">{hood}</span>
                      ))}
                      {area.neighborhoods.length > 3 && <span className="text-[10px] text-slate-400 font-medium pl-1">+{area.neighborhoods.length - 3} more</span>}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={`/service-areas/${area.slug}`}
                    className="text-xs font-bold text-slate-600 group-hover:text-brand flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Location landing page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Coordinate Section */}
      <section className="py-20 bg-white border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Map */}
            <div className="lg:col-span-6 w-full h-[320px] rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
              <iframe 
                src="https://maps.google.com/maps?q=1910%20Towne%20Centre%20Blvd%20Suite%20250,%20Annapolis,%20MD%2021401&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ambient Cooling & Heating LLC Corporate Office Location Map"
                className="opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6 flex flex-col gap-5 items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
                Headquarters Coordinates
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                Our Corporate Offices in Annapolis MD
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating out of Annapolis, our central administrative and diagnostic coordination offices reside in the beautiful Annapolis Towne Centre. This central dispatch point ensures that our fleet possesses optimized highway routes to Glen Burnie, Severna Park, Bowie, Severn, and Crofton.
              </p>
              <div className="space-y-3.5 my-2">
                <div className="flex gap-3 text-xs font-semibold text-slate-600">
                  <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>1910 Towne Centre Blvd Suite 250, Annapolis, MD 21401</span>
                </div>
                <div className="flex gap-3 text-xs font-semibold text-slate-600">
                  <Phone className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>(410) 449-4021 (Primary Office Line)</span>
                </div>
                <div className="flex gap-3 text-xs font-semibold text-slate-600">
                  <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>Mon-Fri: 7:00 AM - 7:00 PM • Sat-Sun: Emergency Outages Only</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Schedule Reliable Local Comfort diagnostics Today
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Locked in high-efficiency comfort upgrades, annual tune-ups, or same-day diagnostics with NATE-certified neighborhood technicians.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-xs glow-btn-orange shadow-lg shadow-accent/15 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Service Appointment</span>
            </Link>
            <a 
              href="tel:4104494021" 
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-light" />
              <span>Call Hotline: (410) 449-4021</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
