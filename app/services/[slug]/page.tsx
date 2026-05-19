import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, Calendar, Star, CheckCircle, ShieldCheck, 
  MapPin, Clock, Flame, ChevronRight, Sparkles 
} from "lucide-react";
import { servicesData } from "@/data/services";
import FAQAccordion from "@/components/faq-accordion";
import { ServiceIcon } from "@/components/navbar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// pre-render all 15 services at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: `${service.title} Annapolis MD`,
    description: service.summary,
    alternates: {
      canonical: `https://ambientcoolingandheating.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Ambient Cooling & Heating LLC`,
      description: service.summary,
      url: `https://ambientcoolingandheating.com/services/${slug}`,
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
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
              <span className="text-slate-500 font-medium">Services</span>
              <span>/</span>
              <span className="text-brand-light font-semibold">{service.title}</span>
            </div>

            {/* Standby Indicator */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/25 border border-accent/35 text-[10px] font-bold text-accent-light uppercase tracking-wider mt-2">
              <Flame className="w-3 h-3 pulse-badge" /> Same-Day Priority Standby
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
              {service.title} in Annapolis, MD
            </h1>

            {/* Summary */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              {service.summary} Certified technicians, honest flat pricing structures, and quick local response.
            </p>

            {/* Star badge */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-xl mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white">4.9 Star Annapolis Standard</span>
            </div>

          </div>
        </div>
      </section>

      {/* Trust credentials row */}
      <section className="bg-white border-b border-slate-200/80 py-4 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-2">🛡️ MD License #923481</span>
          <span>•</span>
          <span className="flex items-center gap-2">⚡ 100% Upfront Pricing Promise</span>
          <span>•</span>
          <span className="flex items-center gap-2">⭐ NATE Certified Technicians</span>
          <span>•</span>
          <span className="flex items-center gap-2">🔥 Same-Day Diagnostic Priority</span>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Service Explanation */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                  Professional {service.title} Details
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description} We arrive in fully stocked diagnostic service vehicles, troubleshoot the electrical and mechanical systems, and outline exactly what is needed with upfront flat rates.
                </p>
              </div>

              {/* Service Benefits */}
              <div className="bg-cool rounded-3xl border border-slate-100 p-6 md:p-8 flex flex-col gap-5">
                <h3 className="text-base font-bold text-primary flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand" />
                  Key Advantages & Benefits
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-brand/5 text-brand flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">✓</span>
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-primary">Why Trust Ambient for {service.title}?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.whyChooseUs.map((item, wcIdx) => (
                    <div key={wcIdx} className="border border-slate-200/80 p-5 rounded-2xl shadow-sm">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider">Advantage 0{wcIdx + 1}</span>
                      <h4 className="text-xs font-bold text-primary mt-2">Verified Professionalism</h4>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Workflow Process */}
              <div className="flex flex-col gap-6 border-t border-slate-100 pt-10">
                <h3 className="text-lg font-bold text-primary">Our Step-by-Step {service.title} Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {service.process.map((step, pIdx) => (
                    <div key={pIdx} className="bg-cool rounded-xl p-5 border border-slate-100 text-center relative">
                      <span className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-xs flex items-center justify-center mx-auto mb-4">{pIdx + 1}</span>
                      <h4 className="text-xs font-bold text-primary leading-snug">{step}</h4>
                      <p className="text-[10px] text-slate-400 mt-2 leading-normal">Meticulous completion check.</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Local SEO Paragraph */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-xs text-slate-500 leading-relaxed">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> Local Maryland Targeting Statement
                </h4>
                <p>{service.localSEOParagraph}</p>
              </div>

              {/* FAQ Accordion Section */}
              <div className="border-t border-slate-100 pt-10 flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-bold text-primary">Frequently Asked Questions</h3>
                  <p className="text-xs text-slate-500 mt-1">Get immediate answers regarding our {service.title.toLowerCase()} service.</p>
                </div>
                <FAQAccordion items={service.faq} />
              </div>

            </div>

            {/* Right Booking Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Sticky booking prompt */}
              <div className="bg-cool rounded-3xl border border-slate-200/80 p-6 shadow-sm sticky top-24 flex flex-col gap-5">
                <div className="text-center pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-brand/5 text-brand flex items-center justify-center mx-auto mb-3">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">Request {service.title}</h3>
                  <p className="text-[10px] text-slate-500 mt-1">Lock in a priority service call in Annapolis today.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 text-xs">
                    <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Licensed, Bonded, Insured</span>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Upfront flat-rate diagnosis</span>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Complete safety certification</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <Link 
                    href="/contact" 
                    className="py-3 bg-accent hover:bg-accent-dark text-white font-extrabold text-xs rounded-xl text-center glow-btn-orange shadow-md"
                  >
                    Schedule Online Booking
                  </Link>
                  <a 
                    href="tel:4104494021" 
                    className="py-3 bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs rounded-xl text-center flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-light" />
                    <span>Call (410) 449-4021</span>
                  </a>
                </div>

                <p className="text-[9px] text-slate-400 text-center leading-normal">
                  🚨 {service.emergencyText}
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Emergency Callout Banner */}
      <section className="bg-accent text-white py-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-[70px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-extrabold text-xl">Need Immediate {service.title} Emergency Support?</h3>
            <p className="text-xs text-white/80 mt-1">We prioritize total outages. Certified technicians are on standby in Anne Arundel County.</p>
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
