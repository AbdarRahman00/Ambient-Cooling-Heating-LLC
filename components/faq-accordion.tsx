"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div 
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-shadow"
          >
            {/* Header / Question Toggle Button */}
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${isOpen ? "text-brand" : "text-slate-400"}`} />
                <h4 className="text-xs md:text-sm font-bold text-primary leading-snug">
                  {item.question}
                </h4>
              </div>
              <span className={`w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-all ${isOpen ? "rotate-180 bg-brand/5 text-brand" : ""}`}>
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Answer body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 md:px-6 pb-6 pt-0 border-t border-slate-100 mt-0.5">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
