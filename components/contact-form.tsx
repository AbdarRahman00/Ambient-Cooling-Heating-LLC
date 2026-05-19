"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Calendar, Phone, Sparkles, Loader2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "Normal",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in Name, Phone, and select a Service.");
      return;
    }
    
    setStatus("submitting");

    // Simulate database write
    setTimeout(() => {
      setStatus("success");
      setTicketId(`ACH-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-10 shadow-xl relative overflow-hidden">
      
      {/* Top indicator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand to-accent" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 border border-green-100 shadow-sm animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
              Request Received Successfully
            </span>
            
            <h3 className="text-2xl font-extrabold text-primary tracking-tight mt-4">
              Thank You, {formData.name.split(" ")[0]}!
            </h3>
            
            <p className="text-sm text-slate-500 max-w-md mt-3 leading-relaxed">
              We have received your service request and dispatched it to our local Annapolis team. An HVAC coordinator will call you shortly to confirm your booking.
            </p>

            <div className="mt-8 bg-cool border border-slate-200/80 rounded-2xl p-6 text-left w-full max-w-md">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Service Ticket Summary</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between"><span className="font-semibold text-slate-500">Ticket ID:</span> <span className="font-mono text-brand font-bold">{ticketId}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-slate-500">Service:</span> <span className="font-medium text-slate-800">{formData.service}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-slate-500">Phone:</span> <span className="font-medium text-slate-800">{formData.phone}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-slate-500">Priority:</span> <span className={`font-bold ${formData.urgency === "Emergency" ? "text-accent" : "text-brand"}`}>{formData.urgency}</span></div>
              </div>
            </div>

            <button 
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", phone: "", service: "", urgency: "Normal", message: "" });
              }}
              className="mt-8 text-xs font-bold text-brand hover:underline"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                Schedule HVAC Service <Sparkles className="w-4 h-4 text-accent" />
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your details below to lock in an honest flat-rate service window in Maryland.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-700">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone"
                  required
                  placeholder="e.g. (410) 555-0199"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Requested Service */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-xs font-bold text-slate-700">Requested Service *</label>
                <select 
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="" disabled>-- Select a Service --</option>
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Urgency Level */}
              <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">Service Priority Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Normal", "Urgent", "Emergency"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, urgency: level }))}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        formData.urgency === level 
                          ? level === "Emergency"
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-brand/10 border-brand text-brand"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {level} {level === "Emergency" && "🚨"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700">Special Notes or Symptoms</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={3}
                  placeholder="Tell us what's happening (e.g. AC unit blowing warm air, leaking water, makes ticking sounds...)"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 glow-btn-orange shadow-lg shadow-accent/10 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Request & Lock In Booking</span>
                </>
              )}
            </button>

            {/* Privacy note */}
            <p className="text-[10px] text-slate-400 text-center leading-normal">
              🛡️ Your information is protected. We will never sell your details or send spam. By submitting, you agree to receive a diagnostic confirmation call.
            </p>

          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
