import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Calendar, ArrowRight, ShieldCheck, Flame, Star } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceIcon } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Our HVAC Services | Ambient Cooling & Heating LLC",
  description: "Explore all 15 residential and commercial HVAC services we offer in Annapolis, MD. From AC repair to furnace installs, boilers, heat pumps, and ductless mini-splits.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light bg-brand/20 px-3 py-1.5 rounded-full">
            Complete Heating & Air Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Our HVAC Services in Annapolis
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            From emergency cooling repairs and NATE-certified system tune-ups to high-efficiency upgrades and geothermal design, we handle every home comfort need.
          </p>
        </div>
      </section>

      {/* Services Master Grid */}
      <section className="py-20 bg-cool">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand bg-brand/5 px-3 py-1 w-fit rounded-full mx-auto">
              15 Specialized Services
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4">
              Explore Our Heating, Cooling, & Air Quality Offerings
            </h2>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Click on any card to explore a detailed service blueprint, customized local FAQs, and upfront flat rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-brand to-brand-dark" : "from-accent to-accent-dark"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                <div>
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${index % 2 === 0 ? "bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white" : "bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white"}`}>
                    <ServiceIcon name={service.iconName} className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-base font-bold text-primary group-hover:text-brand transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-slate-600 group-hover:text-brand flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Service Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Efficiency Banner */}
      <section className="py-20 bg-white border-t border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold text-green-600 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Environmental EPA Compliance Certified
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4">
            Optimized for Long-term Energy Savings
          </h2>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed max-w-xl mx-auto">
            We don't simply fix mechanical units. Our certified crew tests airflows, cleans systems, and seals duct networks to cut utility bills and maximize standard operating lifespans.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto text-left">
            <div className="bg-cool border border-slate-100 p-5 rounded-xl text-center">
              <span className="text-2xl font-black text-brand">Up to 40%</span>
              <h4 className="text-xs font-bold text-primary mt-1">Lower Utility Bills</h4>
            </div>
            <div className="bg-cool border border-slate-100 p-5 rounded-xl text-center">
              <span className="text-2xl font-black text-brand">20+ Years</span>
              <h4 className="text-xs font-bold text-primary mt-1">Extended System Life</h4>
            </div>
            <div className="bg-cool border border-slate-100 p-5 rounded-xl text-center">
              <span className="text-2xl font-black text-brand">4.9/5 Stars</span>
              <h4 className="text-xs font-bold text-primary mt-1">Google Verified Trust</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Schedule a Diagnostic Call in Annapolis Today
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Need urgent diagnostic work? Or looking for a clean, professional estimate for a new high-efficiency heating and cooling system? We respond instantly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-xs glow-btn-orange shadow-lg shadow-accent/15 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>
            <a 
              href="tel:4104494021" 
              className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-light" />
              <span>Call (410) 449-4021</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
