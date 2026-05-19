import React from "react";
import { ShieldCheck, Clock, CreditCard, Flame, Star } from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand" />,
    label: "Licensed & Insured",
    sub: "MD License #923481",
  },
  {
    icon: <Clock className="w-5 h-5 text-brand" />,
    label: "Fast Local Response",
    sub: "Annapolis Standby",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-brand" />,
    label: "Financing Available",
    sub: "Low Monthly Payments",
  },
  {
    icon: <Flame className="w-5 h-5 text-accent pulse-badge" />,
    label: "Emergency Support",
    sub: "Same-Day Priority",
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />,
    label: "4.9 Google Rating",
    sub: "250+ Local Reviews",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 relative z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-3.5 pl-2 lg:pl-6 ${index > 0 && index % 2 === 0 ? "pt-4 md:pt-0" : ""} ${index === 1 ? "pt-0" : ""} lg:pt-0`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cool flex items-center justify-center border border-slate-100">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary leading-tight">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
