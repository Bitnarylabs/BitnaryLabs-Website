"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Send,
  Check,
  ShieldCheck,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { siteConfig } from "@/data/content";

import { addLead } from "@/lib/leadsStorage";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    mobile: "",
    workNeeded: "Inventory software",
    description: "",
    preferredContact: "WhatsApp",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      name: formData.name,
      businessName: formData.businessName,
      mobile: formData.mobile,
      workNeeded: formData.workNeeded,
      description: formData.description,
      preferredContact: formData.preferredContact,
    });
    setSubmitted(true);
  };

  return (
    <div className="relative pb-28">
      {/* Header */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-neutral-400 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Connect With Us</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          Let&apos;s discuss your <br />
          <span className="apple-headline">requirements.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us what you want to build or improve. We will follow up promptly using your preferred contact method.
        </p>
      </section>

      {/* Grid: Form & Info */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="apple-card rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-semibold text-white">Direct Communication</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect via WhatsApp or phone for immediate consultations and demo bookings.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:bg-white/[0.06] transition-all group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      WhatsApp Direct
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    Office Location
                  </span>
                  <span className="text-xs text-neutral-300">
                    {siteConfig.contact.address}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                    Working Hours
                  </span>
                  <span className="text-xs text-neutral-300 block">
                    {siteConfig.contact.workingHours}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {siteConfig.contact.responseTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Apple Style Form */}
          <div className="lg:col-span-7">
            <div className="apple-card rounded-3xl p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-white mb-2">Project Brief</h2>
              <p className="text-xs text-neutral-400 mb-8">
                Share a few project details and our engineering team will prepare an estimate.
              </p>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Inquiry Received</h3>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    Thank you. A BitnaryLabs lead engineer will review your requirements and reach out within 2–4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="apple-btn-secondary px-5 py-2 rounded-full text-xs font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-2">
                        Your Name <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-2">
                        Business Name <span className="text-neutral-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Sharma Enterprises"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-2">
                        Mobile Number <span className="text-white">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-2">
                        Service Needed <span className="text-white">*</span>
                      </label>
                      <select
                        value={formData.workNeeded}
                        onChange={(e) => setFormData({ ...formData, workNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d14] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option value="Inventory software">StockSense (Inventory Software)</option>
                        <option value="HR software">PeopleDesk (HR & Payroll)</option>
                        <option value="E-Commerce Website">E-Commerce Website</option>
                        <option value="Corporate Website">Corporate Platform</option>
                        <option value="Landing Page">High-Conversion Landing Page</option>
                        <option value="Other">Bespoke Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-2">
                      Brief Description <span className="text-white">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please mention your current workflow challenges, store locations, or website goals..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-2">
                      Preferred Channel
                    </label>
                    <div className="flex gap-2">
                      {["WhatsApp", "Phone Call", "Email"].map((method) => (
                        <label
                          key={method}
                          className={`px-3.5 py-1.5 rounded-full text-xs cursor-pointer border transition-colors ${
                            formData.preferredContact === method
                              ? "bg-white text-black border-white"
                              : "bg-white/[0.03] border-white/[0.08] text-neutral-400 hover:text-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="hidden"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="apple-btn-primary w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Inquiry
                    </button>
                  </div>

                  <div className="text-[11px] text-neutral-400 pt-1 text-center">
                    We use your details solely to respond to your project brief. No marketing spam.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
