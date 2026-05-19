import React from "react";
import Link from "next/link";
import { CreditCard, Calendar, CheckCircle2, ShieldCheck, Phone, BadgePercent, Sparkles } from "lucide-react";

export const metadata = {
  title: "Financing Options | Ambient Cooling & Heating LLC",
  description: "Flexible HVAC financing options in Annapolis, MD. Buy a new central AC unit, furnace, or heat pump with low monthly payments and flexible terms.",
};

export default function FinancingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light bg-brand/20 px-3 py-1.5 rounded-full">
            Budget Friendly Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Flexible HVAC Financing Options
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Don't let an unexpected replacement strain your budget. Upgrade today and pay in low, manageable monthly installments with quick approval.
          </p>
        </div>
      </section>

      {/* Main Financing Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand bg-brand/5 px-3 py-1 w-fit rounded-full">
                Upgrade Comfort Today
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                Premium Climate Comfort within Your Budget
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heating and air conditioning are essential to your family's health and safety. When an aging furnace or central AC system fails, the upfront replacement costs can be stressful.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Ambient Cooling & Heating LLC, we partner with premier home improvement lenders to deliver highly flexible financing programs. With competitive interest rates, low APR plans, and fast digital credit approval, securing perfect comfort has never been easier.
              </p>

              <div className="space-y-4 mt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">Low Monthly Installments</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Customize payment schedules to match your monthly household income budget perfectly.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">Fast Credit Decisions</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Paperless online application processes providing solid pre-approvals in minutes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">No Pre-Payment Penalties</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Pay off your complete balance early at any time without incurring single extra fees.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Packages Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-cool rounded-3xl border border-slate-100 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-accent" />
                  Featured Financing Terms
                </h3>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm">
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest leading-none bg-accent/5 px-2.5 py-0.5 rounded-full">Primary Offer</span>
                    <h4 className="text-sm font-bold text-primary mt-2">0% APR Promotional Financing</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Available on select high-efficiency central cooling and furnace installs. Equal monthly payments apply.</p>
                  </div>

                  <div className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none bg-slate-50 px-2.5 py-0.5 rounded-full">Standard Program</span>
                    <h4 className="text-sm font-bold text-primary mt-2">Low Interest Installments</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Extended repayment options stretching over 36, 60, or 72 months to keep your monthly payments as low as possible.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Financing Steps */}
      <section className="py-20 bg-cool border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
              Frictionless Process
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4">
              How Our Financing Works
            </h2>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Unlock a premium new system in three simple, hassle-free steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mx-auto mb-6 text-sm">1</span>
              <h3 className="text-base font-bold text-primary">Schedule Consultation</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Contact our team for a free on-site estimate. Our technician evaluates your property and recommends the perfect system size and efficiency rating.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mx-auto mb-6 text-sm">2</span>
              <h3 className="text-base font-bold text-primary">Apply Online in Minutes</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Complete a short paperless application form on a secure digital portal. Get a transparent credit pre-approval decision in under 5 minutes.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center mx-auto mb-6 text-sm">3</span>
              <h3 className="text-base font-bold text-primary">flawless Installation</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Once approved, we book your installation. Our NATE-certified crew installs and calibrates your new system, backed by premium manufacturer warranties.
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
            Lock In Your High-Efficiency HVAC Upgrade
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Get in touch with an Ambient financing coordinator today to review active federal clean energy tax credits, local utility rebates, and low monthly rates.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-xs glow-btn-orange shadow-lg shadow-accent/15 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Apply & Book Consultation</span>
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
