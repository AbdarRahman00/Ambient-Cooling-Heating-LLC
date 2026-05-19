import React from "react";
import Link from "next/link";
import { 
  Phone, Calendar, Star, CheckCircle, Wrench, Shield, 
  MapPin, Clock, Flame, CreditCard, Sparkles, ChevronRight 
} from "lucide-react";
import TrustBar from "@/components/trust-bar";
import ServicesGrid from "@/components/services-grid";
import ReviewsCarousel from "@/components/reviews-carousel";
import ContactForm from "@/components/contact-form";
import { serviceAreasData } from "@/data/serviceAreas";

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-primary text-white relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative backdrop gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Centered responsive container */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              
              {/* Emergency Standby Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-xs font-bold text-accent-light pulse-badge">
                <Flame className="w-3.5 h-3.5" />
                <span>24/7 Rapid Emergency Dispatch Standby</span>
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Reliable Heating & <br className="hidden md:inline" />
                <span className="text-gradient">Cooling Services</span> <br />
                in Annapolis, MD
              </h1>

              {/* Supporting Statement */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                Ambient Cooling & Heating LLC provides Annapolis homeowners with honest flat-rate pricing, same-day HVAC services, and energy-efficient climate control upgrades. No hidden fees. Just expert solutions.
              </p>

              {/* Star Rating Display */}
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-2xl">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">4.9 Stars Rating</span>
                <span className="text-xs text-slate-500">|</span>
                <span className="text-xs text-slate-400">250+ Maryland Reviews</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                <Link 
                  href="#contact-section" 
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-center text-sm glow-btn-orange flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Service</span>
                </Link>
                <a 
                  href="tel:4104494021" 
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-light" />
                  <span>Call (410) 449-4021</span>
                </a>
              </div>

            </div>

            {/* Right Graphics/Badge Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[400px] h-[350px] rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/50 p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-full blur-xl" />
                
                <div>
                  <span className="text-[10px] font-bold text-brand-light uppercase tracking-widest bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                    Why Customers Choose Us
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-4">
                    The Ambient Difference
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    We believe HVAC diagnostics should be clear, honest, and straightforward. Every service includes complete system testing.
                  </p>
                </div>

                <div className="space-y-3.5 my-6">
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>NATE-Certified Technical HVAC Experts</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Honest Pricing — upfront written estimates</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Same-day priority emergency response</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>MD HVAC Master License</span>
                  <span>#923481</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. FEATURED SERVICES GRID */}
      <ServicesGrid />

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/5 px-3 py-1.5 rounded-full">
              Ultimate Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mt-4">
              Annapolis Homeowners Trust Our Principles
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              We refuse to cut corners. At Ambient, we treat your home like our own, ensuring clean workmanship, honest quotes, and systems calibrated for maximum longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand mb-6 shadow-sm">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">Honest Flat Pricing</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                No surprises on your invoice. We provide complete written quotes before starting any repair or installation, so you know exactly what to expect.
              </p>
            </div>
            
            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand mb-6 shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">NATE-Certified Crew</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Our technicians are fully licensed, background-checked, drug-tested, and continually trained in the latest inverter heat pump and high-efficiency furnace technology.
              </p>
            </div>

            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand mb-6 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">Annapolis Area Experts</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Headquartered locally, we are uniquely familiar with waterfront environmental issues, heavy coastal humidity levels, and specific municipal permit requirements.
              </p>
            </div>

            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent mb-6 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">Same-Day Priority Services</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                When your cooling or heating fails, we understand the urgency. We prioritize standby outages to restore safe residential air conditions within hours.
              </p>
            </div>

            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-green-500 mb-6 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-primary">Energy-Efficient Upgrades</h3>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                We design custom system layouts utilizing premium high-SEER2 cooling units and variable-speed systems that dramatically reduce monthly energy consumption.
              </p>
            </div>

            <div className="bg-cool rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center">
              <h4 className="text-sm font-bold text-slate-800">Need Immediate Help?</h4>
              <p className="text-xs text-slate-500 mt-2">Get dispatch updates directly to your cell phone.</p>
              <a 
                href="tel:4104494021" 
                className="mt-4 px-6 py-2.5 bg-brand text-white text-xs font-bold rounded-lg hover:bg-brand-dark transition-colors shadow"
              >
                Call Hotline
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ABOUT PREVIEW */}
      <section className="py-20 bg-cool border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* About Text column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
                Established Local Authority
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Our Family-Owned Mission: Flawless Maryland Comfort
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ambient Cooling & Heating LLC was built on a simple foundation: local homeowners deserve an HVAC contractor who will do the job right the first time, communicate clearly, and stand firmly behind their pricing. 
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our certified technicians operate out of our Annapolis headquarters, equipped with diagnostic tools to resolve residential and commercial climate struggles with efficiency and precision. We don't consider a job complete until your family is perfectly comfortable.
              </p>
              
              <Link 
                href="/about" 
                className="text-xs font-bold text-brand hover:text-brand-dark flex items-center gap-1.5 mt-2 group"
              >
                <span>Read Our Full Story & Credentials</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* About Stats Column */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Our Operations at a Glance</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 text-brand flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">Fully Licensed, Bonded & Insured</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Maryland Master HVAC Lic #923481. Complete general liability protection.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 fill-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">4.9 Star Local Reputation</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Acclaimed across Annapolis, Pasadena, and Crofton for honest diagnostic quotes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">EPA Environmental Compliance</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Certified for safe refrigerant handling and energy-efficient retrofitting.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS SECTION */}
      <section className="py-20 bg-white border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
              Serving Our Community
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mt-4">
              Local HVAC Services Throughout Anne Arundel County
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              We dispatch NATE-certified standby crews directly from our Annapolis office to restore indoor comfort and install highly efficient upgrades in these nearby cities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceAreasData.map((area) => (
              <Link 
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-cool rounded-xl border border-slate-100 p-4 text-center hover:border-brand hover:bg-white hover:shadow-md transition-all group"
              >
                <h3 className="text-xs font-extrabold text-primary group-hover:text-brand transition-colors">
                  {area.cityName}, MD
                </h3>
                <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                  Zip codes: {area.zipCodes.slice(0, 2).join(", ")}
                </p>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-brand-light mt-3 group-hover:underline">
                  <span>Explore Location Page</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS CAROUSEL */}
      <ReviewsCarousel />

      {/* 8. FINANCING CTA */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-navy text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full">
                Flexible Payment Options
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-4">
                Upgrade Your System Today — Pay in Low Monthly Installments
              </h2>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                An unexpected AC or furnace breakdown shouldn't stress your savings. We partner with top lenders to provide low APR financing options, flexible approval criteria, and payment terms designed for any home budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
              <Link 
                href="/financing" 
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-center text-xs glow-btn-orange"
              >
                Explore Financing Plans
              </Link>
              <Link 
                href="#contact-section" 
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold rounded-xl text-center text-xs transition-all"
              >
                Request Free Estimate
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 9. EMERGENCY HVAC BANNER */}
      <section className="bg-gradient-orange text-white py-8 relative shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/20">
              <Flame className="w-6 h-6 pulse-badge" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg md:text-xl">Have a Critical AC or Heating Outage in Annapolis?</h3>
              <p className="text-xs text-white/80 mt-1">Our certified emergency technicians are ready to dispatch right now.</p>
            </div>
          </div>
          <a 
            href="tel:4104494021" 
            className="px-8 py-3.5 bg-white text-accent font-extrabold rounded-xl text-xs hover:bg-slate-100 transition-colors shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Urgent Hotline: (410) 449-4021</span>
          </a>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact-section" className="py-20 bg-cool border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Map column */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full w-fit">
                  Contact Our Annapolis HQ
                </span>
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                  Let's Restore Your Peace of Mind
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Have questions about furnace tune-ups, a new high-efficiency AC install, or tankless water heater flushing? Speak directly to our local staff or complete the service form.
                </p>
              </div>

              {/* Information Row */}
              <div className="space-y-4 my-2">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 flex-shrink-0 text-brand">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Call Directly</h4>
                    <a href="tel:4104494021" className="text-sm font-bold text-primary hover:text-brand transition-colors">
                      (410) 449-4021
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 flex-shrink-0 text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Corporate HQ Address</h4>
                    <p className="text-xs text-primary font-medium">
                      1910 Towne Centre Blvd Suite 250,<br />Annapolis, MD 21401, USA
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 flex-shrink-0 text-green-500">
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

              {/* Google Maps Embed iframe */}
              <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=1910%20Towne%20Centre%20Blvd%20Suite%20250,%20Annapolis,%20MD%2021401&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambient Cooling & Heating LLC Office"
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
