import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, Calendar, Star, CheckCircle, ShieldCheck, 
  MapPin, Clock, Flame, ChevronRight, Home, Shield 
} from "lucide-react";
import { serviceAreasData } from "@/data/serviceAreas";
import FAQAccordion from "@/components/faq-accordion";
import ContactForm from "@/components/contact-form";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// pre-render all 10 service areas at build time
export async function generateStaticParams() {
  return serviceAreasData.map((area) => ({
    slug: area.slug,
  }));
}

// dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreasData.find((a) => a.slug === slug);
  
  if (!area) {
    return {
      title: "Location Not Found"
    };
  }

  return {
    title: `HVAC Services ${area.cityName} MD | AC & Heating Repair`,
    description: area.description,
    alternates: {
      canonical: `https://ambientcoolingandheating.com/service-areas/${slug}`,
    },
    openGraph: {
      title: `HVAC Services ${area.cityName} MD | Ambient Cooling & Heating`,
      description: area.description,
      url: `https://ambientcoolingandheating.com/service-areas/${slug}`,
    }
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = serviceAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-3xl">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-500 font-medium">Service Areas</span>
              <span>/</span>
              <span className="text-brand-light font-semibold">{area.cityName}</span>
            </div>

            {/* Emergency badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/25 border border-accent/35 text-[10px] font-bold text-accent-light uppercase tracking-wider mt-2 animate-pulse">
              <Flame className="w-3 h-3 text-accent" /> Dispatch Center Active in {area.cityName}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              HVAC Services in {area.cityName}, MD
            </h1>

            {/* Summary */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              {area.description} Upfront pricing, licensed Maryland NATE technicians, and same-day priority diagnostics.
            </p>

            {/* Zip codes list */}
            <p className="text-xs text-slate-400 font-semibold tracking-wider bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-xl">
              📍 Fully serving Zip Codes: {area.zipCodes.join(", ")}
            </p>

          </div>
        </div>
      </section>

      {/* Trust bar row */}
      <section className="bg-white border-b border-slate-200 py-4 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-2">🛡️ MD HVAC Master Lic #923481</span>
          <span>•</span>
          <span className="flex items-center gap-2">⚡ Flat-Rate Transparent Estimates</span>
          <span>•</span>
          <span className="flex items-center gap-2">⭐ 4.9 Stars Average Google Rating</span>
          <span>•</span>
          <span className="flex items-center gap-2">🔥 Same-Day System Restoration</span>
        </div>
      </section>

      {/* Main content split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in">
            
            {/* Left Main Content */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              
              {/* Local Connection */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                  Trusted Local Heating & Cooling Experts in {area.cityName}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {area.aboutCity} We arrive in mobile dispatch vehicles fully stocked with standard manufacturer replacement parts, ensuring that most central cooling repairs, furnace tune-ups, and heat pump failures are resolved on our very first visit.
                </p>
              </div>

              {/* Serviced Neighborhoods */}
              <div className="bg-cool rounded-3xl border border-slate-200/80 p-6 md:p-8 flex flex-col gap-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-accent" />
                  Neighborhoods We Serve in {area.cityName}
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Our dispatch technicians operate daily across all major subdivisions, residential parks, and custom estates inside {area.cityName}, MD:
                </p>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {area.neighborhoods.map((hood, hIdx) => (
                    <span 
                      key={hIdx}
                      className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {hood}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Services in this area */}
              <div className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-primary">Popular HVAC Solutions in {area.cityName}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.services.map((srv, srvIdx) => (
                    <div 
                      key={srvIdx}
                      className="border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-brand hover:shadow transition-all flex gap-3.5"
                    >
                      <div className="w-8 h-8 rounded bg-brand/5 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary">{srv}</h4>
                        <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Fully backed by manufacturer warranties and our flat rates.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local FAQs */}
              <div className="border-t border-slate-100 pt-10 flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-primary">Local HVAC FAQs for {area.cityName} Residents</h3>
                  <p className="text-xs text-slate-500 mt-1">Get immediate advice tailored to the unique {area.cityName} Maryland climate.</p>
                </div>
                <FAQAccordion items={area.faq} />
              </div>

            </div>

            {/* Right Booking Column & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Form Embed */}
              <ContactForm />

              {/* Local Map Embed */}
              <div className="bg-cool rounded-3xl border border-slate-200/80 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-slate-200 text-brand">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">{area.cityName} Service Area Map</h4>
                    <p className="text-[10px] text-slate-400">Rapid dispatch within Anne Arundel County</p>
                  </div>
                </div>

                <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${area.cityName}%20MD&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Ambient Cooling & Heating LLC ${area.cityName} Service Area Map`}
                    className="opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Emergency Callout Banner */}
      <section className="bg-accent text-white py-12 relative overflow-hidden shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-[70px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-extrabold text-xl">Need Immediate HVAC Relief in {area.cityName}?</h3>
            <p className="text-xs text-white/80 mt-1">Our certified emergency technicians live in the community, ensuring fast diagnostic arrivals.</p>
          </div>
          <a 
            href="tel:4104494021" 
            className="px-8 py-3.5 bg-white text-accent font-extrabold rounded-xl text-xs hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call (410) 449-4021</span>
          </a>
        </div>
      </section>
    </>
  );
}
