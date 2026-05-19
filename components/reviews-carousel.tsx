"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael R.",
    location: "Annapolis, MD",
    quote: "Our AC died in the middle of a July heatwave. Ambient Cooling & Heating had a tech out to our house within 2 hours. He diagnosed a broken capacitor, had the part on his truck, and fixed it instantly. Honest pricing and outstanding speed!",
    rating: 5,
    date: "1 week ago",
    service: "Emergency AC Repair"
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Severna Park, MD",
    quote: "We converted our old oil furnace to a high-efficiency electric heat pump with Ambient. They handled the tank disposal, electrical upgrades, and permitting. Outstanding, professional crew who kept our house clean throughout the process.",
    rating: 5,
    date: "3 weeks ago",
    service: "Oil Replacement & Heat Pump Install"
  },
  {
    id: 3,
    name: "David L.",
    location: "Crofton, MD",
    quote: "Highly recommend Ambient! They installed a Rinnai tankless water heater in our basement. We now have endless hot water, and our gas bill has dropped significantly. Very polite installers and absolute upfront pricing.",
    rating: 5,
    date: "1 month ago",
    service: "Tankless Water Heater Installation"
  },
  {
    id: 4,
    name: "Jennifer M.",
    location: "Edgewater, MD",
    quote: "Our coastal home was feeling incredibly sticky in the summer. They installed a whole-house dehumidification system that worked wonders. The air is crisp, clean, and our AC doesn't have to run constantly anymore. Phenomenal service!",
    rating: 5,
    date: "2 months ago",
    service: "Drying & Dehumidifying"
  },
  {
    id: 5,
    name: "Robert H.",
    location: "Severn, MD",
    quote: "Professional, prompt, and honest. They serviced our furnace for the winter tune-up. The technician did a thorough safety inspection, explained all measurements, and didn't try to upsell me on unnecessary parts. Will use them for life.",
    rating: 5,
    date: "3 months ago",
    service: "Furnace Seasonal Tune-up"
  }
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const currentReview = testimonials[index];

  return (
    <section className="py-20 bg-primary relative overflow-hidden text-white">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light bg-brand/20 px-3 py-1.5 rounded-full">
            Real Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4">
            What Our Maryland Neighbors Say
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            With a 4.9-star rating on Google, our mission is to deliver absolute honesty, flawless workmanship, and top-tier comfort to families across Anne Arundel County.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto min-h-[380px] md:min-h-[320px] flex flex-col justify-between bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative">
          
          <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-800/40 pointer-events-none" />

          {/* Testimonial Active Display */}
          <div className="relative overflow-hidden flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentReview.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base md:text-lg lg:text-xl font-medium leading-relaxed italic text-slate-200">
                    "{currentReview.quote}"
                  </blockquote>
                </div>

                {/* Reviewer Details */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-800/80 pt-6">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      {currentReview.name}
                      <span className="inline-flex items-center gap-1 text-[10px] text-green-400 font-semibold bg-green-950/60 border border-green-800/30 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-2.5 h-2.5" /> Verified Customer
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {currentReview.location} • {currentReview.service}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 font-medium mt-2 sm:mt-0">
                    {currentReview.date} via Google Reviews
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-brand text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-black/35 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(idx > index ? 1 : -1);
                    setIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${idx === index ? "bg-brand w-6" : "bg-slate-700"}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:border-brand text-white flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-black/35 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Rating Grid below */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
            <span className="text-2xl md:text-3xl font-extrabold text-brand-light">4.9/5</span>
            <p className="text-xs text-slate-400 mt-1">Google Star Rating</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
            <span className="text-2xl md:text-3xl font-extrabold text-white">250+</span>
            <p className="text-xs text-slate-400 mt-1">Verified local reviews</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
            <span className="text-2xl md:text-3xl font-extrabold text-white">100%</span>
            <p className="text-xs text-slate-400 mt-1">Honest Pricing Promise</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl">
            <span className="text-2xl md:text-3xl font-extrabold text-white">24/7</span>
            <p className="text-xs text-slate-400 mt-1">Emergency Standby</p>
          </div>
        </div>

      </div>
    </section>
  );
}
