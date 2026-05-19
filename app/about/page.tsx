import React from "react";
import Link from "next/link";
import { Shield, Star, Clock, Calendar, CheckCircle2, Award, HeartHandshake, Phone } from "lucide-react";

export const metadata = {
  title: "About Us | Ambient Cooling & Heating LLC",
  description: "Learn about Annapolis's trusted family-owned HVAC contractor. Certified NATE technicians, upfront pricing, same-day heating & AC support.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light bg-brand/20 px-3 py-1.5 rounded-full">
            Our Identity & Core Values
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            About Ambient Cooling & Heating LLC
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Annapolis's premier residential & commercial HVAC team, committed to honest pricing, top-tier workmanship, and unmatched indoor comfort.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                Our Mission: Restoring Comfort with Complete Honesty
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Ambient Cooling & Heating LLC, we noticed a frustrating trend in the local HVAC industry: bloated estimates, confusing diagnostics, and pushy sales reps. We set out to change that by founding a company built strictly on honest, flat-rate diagnostics, certified mechanical expertise, and transparent upfront quotes.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need a simple AC capacitor replaced, an energy-saving high-efficiency heat pump installed, or an old, heavy oil tank replaced in your basement, our crew approaches every single project with meticulous care.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary">Family Values First</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">We are your neighbors. We guarantee respectful, clean service in your home.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary">100% Upfront Quotes</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">You approve the written estimate before we turn a single wrench. Zero hidden fees.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary">NATE Technical Experts</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Continuous training ensures we troubleshoot complex modern inverter systems accurately.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary">EPA Refrigerant Safe</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Strict adherence to environmental codes for leak capture, safety, and disposal.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Graphic Credentials column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-cool rounded-3xl border border-slate-100 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand" />
                  Local Credentials
                </h3>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Maryland Master License</span>
                    <h4 className="text-sm font-bold text-primary mt-1">Licensed Master HVACR</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Active MD License #923481. Licensed for commercial and residential.</p>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">General Liability Coverage</span>
                    <h4 className="text-sm font-bold text-primary mt-1">Fully Bonded & Insured</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Complete property damage and worker compensation safety policies.</p>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Verified Google Reputation</span>
                    <h4 className="text-sm font-bold text-primary mt-1">4.9 Star Average Rating</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Over 250+ local reviews from Annapolis, Severn, and Severna Park.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-cool border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
              Why Annapolis Trusts Us
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4">
              Our Core Philosophies
            </h2>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              We operate under a set of rigid principles designed to elevate your home service experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center mb-6">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-primary">Honest Pricing</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Many HVAC companies rely on high-pressure sales tactics. We don't. We provide clear, objective diagnosis reports and pricing options, leaving the decision entirely in your hands.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-primary">Expert Calibration</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                We go beyond simply standard hookups. Our NATE-certified crew checks airflows, measures subcooling levels, and calibrates sensors to extend the lifespan of your unit.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-brand/5 text-brand flex items-center justify-center mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-primary">Same-Day Dispatch</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                When winter freezing or summer humidity strikes, you need immediate HVAC relief. We prioritize local Annapolis standby diagnostics to keep homes safe and comfortable within hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to Experience the Ambient Difference?
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Schedule your seasonal tune-up, request a free central heating & cooling upgrade estimate, or book an emergency call.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-xs glow-btn-orange shadow-lg shadow-accent/15 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online Consultation</span>
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
