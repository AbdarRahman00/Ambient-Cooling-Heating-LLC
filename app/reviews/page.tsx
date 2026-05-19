import React from "react";
import Link from "next/link";
import { Star, CheckCircle, Quote, Calendar, Phone, HeartHandshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Customer Reviews | Ambient Cooling & Heating LLC",
  description: "Read real, verified reviews from homeowners in Annapolis, Severna Park, Pasadena, Severn, and Crofton, MD. 4.9 Stars on Google.",
};

const allReviews = [
  {
    name: "Michael R.",
    location: "Annapolis, MD",
    quote: "Our AC died in the middle of a July heatwave. Ambient Cooling & Heating had a tech out to our house within 2 hours. He diagnosed a broken capacitor, had the part on his truck, and fixed it instantly. Honest pricing and outstanding speed!",
    rating: 5,
    service: "Emergency AC Repair",
    date: "1 week ago"
  },
  {
    name: "Sarah K.",
    location: "Severna Park, MD",
    quote: "We converted our old oil furnace to a high-efficiency electric heat pump with Ambient. They handled the tank disposal, electrical upgrades, and permitting. Outstanding, professional crew who kept our house clean throughout the process.",
    rating: 5,
    service: "Oil Replacement & Heat Pump Install",
    date: "3 weeks ago"
  },
  {
    name: "David L.",
    location: "Crofton, MD",
    quote: "Highly recommend Ambient! They installed a Rinnai tankless water heater in our basement. We now have endless hot water, and our gas bill has dropped significantly. Very polite installers and absolute upfront pricing.",
    rating: 5,
    service: "Tankless Water Heater Installation",
    date: "1 month ago"
  },
  {
    name: "Jennifer M.",
    location: "Edgewater, MD",
    quote: "Our coastal home was feeling incredibly sticky in the summer. They installed a whole-house dehumidification system that worked wonders. The air is crisp, clean, and our AC doesn't have to run constantly anymore. Phenomenal service!",
    rating: 5,
    service: "Drying & Dehumidifying",
    date: "2 months ago"
  },
  {
    name: "Robert H.",
    location: "Severn, MD",
    quote: "Professional, prompt, and honest. They serviced our furnace for the winter tune-up. The technician did a thorough safety inspection, explained all measurements, and didn't try to upsell me on unnecessary parts. Will use them for life.",
    rating: 5,
    service: "Furnace Seasonal Tune-up",
    date: "3 months ago"
  },
  {
    name: "Thomas D.",
    location: "Pasadena, MD",
    quote: "Best HVAC experience I've had. They replaced our broken outdoor heat pump with a highly efficient model. The pricing was exactly as estimated, and they explained every part of the installation process. 5 stars!",
    rating: 5,
    service: "Heat Pump Installation",
    date: "4 months ago"
  },
  {
    name: "Amanda G.",
    location: "Arnold, MD",
    quote: "Excellent communication and absolute integrity. They diagnosed our mini-split system when it stopped cooling. Instead of trying to sell a new system like another company did, they replaced a faulty sensor and saved us thousands.",
    rating: 5,
    service: "Ductless Mini Split Repair",
    date: "5 months ago"
  },
  {
    name: "James P.",
    location: "Glen Burnie, MD",
    quote: "Reliable, quick, and polite. We had an emergency boiler leak in the middle of a winter storm. Their hydronic heating expert arrived quickly, patched the line, and balanced our radiator pressures. Lifesavers!",
    rating: 5,
    service: "Emergency Boiler Repair",
    date: "6 months ago"
  }
];

export default function ReviewsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light bg-brand/20 px-3 py-1.5 rounded-full">
            Social Proof & Local Stories
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            Customer Reviews & Feedback
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Read real, unedited stories of how Ambient Cooling & Heating LLC restores comfort, saves energy, and delivers upfront pricing across Maryland.
          </p>
        </div>
      </section>

      {/* Trust Rating Bar */}
      <section className="bg-white border-b border-slate-200/80 py-8 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-4xl md:text-5xl font-black text-brand">4.9/5</span>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">Based on over 250+ verified Google & local homeowner ratings.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-xl bg-cool border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% Verified Reviews</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-cool border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>Honest Pricing Promise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-cool">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allReviews.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm relative group flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 pointer-events-none" />

                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <blockquote className="text-sm font-medium leading-relaxed italic text-slate-700">
                    "{review.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <div>
                    <h4 className="text-xs font-bold text-primary flex items-center gap-1.5">
                      {review.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[9px] text-green-500 font-semibold uppercase tracking-wider">Verified</span>
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">{review.location} • {review.service}</p>
                  </div>
                  <span>{review.date} via Google</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Help Us Serve You Better
          </h2>
          <p className="text-xs text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Are you an Ambient customer? Your reviews help us maintain high-efficiency support and honest pricing schedules for families across Annapolis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-xs glow-btn-orange shadow-lg shadow-accent/15 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Service Online</span>
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
