import React from "react";
import { Phone, MapPin, Clock, Mail, ShieldAlert, Award, Star } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | Ambient Cooling & Heating LLC",
  description: "Schedule heating or cooling service with Annapolis's trusted HVAC contractor. Click to call (410) 449-4021 or use our service request form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/20 px-3 py-1.5 rounded-full">
            Connect With Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Contact Ambient Cooling & Heating LLC
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a question about furnace tune-ups, a new AC install, or an emergency outage? We respond immediately with transparent pricing.
          </p>
        </div>
      </section>

      {/* Main Grid: Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info details & Map column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand bg-brand/5 px-3 py-1 w-fit rounded-full">
                    Immediate Support
                  </span>
                  <h2 className="text-2xl font-extrabold text-primary tracking-tight mt-4">
                    Restoring Comfort in Annapolis MD
                  </h2>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Our local Annapolis team is dispatched daily across Anne Arundel County, Severn, Glen Burnie, Pasadena, and Crofton. 
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-cool border border-slate-100 flex items-center justify-center text-brand flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Hotline</h4>
                      <a href="tel:4104494021" className="text-sm font-bold text-primary hover:text-brand transition-colors">
                        (410) 449-4021
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-cool border border-slate-100 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate Office</h4>
                      <p className="text-xs text-primary font-semibold">
                        1910 Towne Centre Blvd Suite 250,<br />
                        Annapolis, MD 21401, USA
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-cool border border-slate-100 flex items-center justify-center text-green-500 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Hours</h4>
                      <p className="text-xs text-primary font-medium">
                        Monday - Friday: 7:00 AM - 7:00 PM<br />
                        Saturday - Sunday: Emergency Service Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Banner inside column */}
              <div className="bg-accent/5 border border-accent/25 rounded-2xl p-5 flex gap-4">
                <ShieldAlert className="w-8 h-8 text-accent flex-shrink-0 pulse-badge" />
                <div>
                  <h4 className="text-xs font-extrabold text-accent">Emergency Outage?</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                    Heating or AC failed in freezing winter or scorching summer weather? Don't use the form. Call us immediately at <a href="tel:4104494021" className="font-bold underline">(410) 449-4021</a> for instant dispatch priority.
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-[240px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=1910%20Towne%20Centre%20Blvd%20Suite%20250,%20Annapolis,%20MD%2021401&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambient Cooling & Heating LLC Annapolis Office"
                  className="opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
