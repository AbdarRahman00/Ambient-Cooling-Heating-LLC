import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceIcon } from "./navbar";

export default function ServicesGrid() {
  // Select 6 primary high-converting services to show on the homepage
  const featuredServices = servicesData.filter(s => 
    ["hvac-services", "air-conditioner-repair", "heating-services", "heat-pumps", "mini-split-systems", "tankless-water-heaters"].includes(s.slug)
  );

  return (
    <section id="services-grid" className="py-20 bg-cool relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand bg-brand/5 px-3 py-1.5 rounded-full">
            Our HVAC Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mt-4">
            Professional Heating & Air Solutions in Annapolis
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            We provide residential and commercial customers with expert diagnostic, installation, and maintenance services. Every job is backed by our trust promise and honest, upfront pricing.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div 
              key={service.slug}
              className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card top border highlight */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${index % 2 === 0 ? "from-brand to-brand-dark" : "from-accent to-accent-dark"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

              <div>
                {/* Icon box */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${index % 2 === 0 ? "bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white" : "bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white"}`}>
                  <ServiceIcon name={service.iconName} className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-primary group-hover:text-brand transition-colors duration-250">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-500 mt-3 leading-relaxed line-clamp-3">
                  {service.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, bIndex) => (
                    <li key={bIndex} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-light flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link 
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-slate-700 group-hover:text-brand flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All services banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-8 py-5 rounded-2xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
            <span className="text-sm font-semibold text-slate-700">
              Need another highly specialized heating, air, water, or ventilation solution?
            </span>
            <Link 
              href="/contact"
              className="text-xs font-bold text-white bg-primary px-6 py-2.5 rounded-lg hover:bg-brand transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore All 15 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
