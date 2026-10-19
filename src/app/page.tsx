"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
  Layers,
  Smartphone,
  ShieldCheck,
  Clock,
  HeadphonesIcon,
  CreditCard,
  Building2,
  Boxes,
  Users2,
  Globe2
} from "lucide-react";
import { siteConfig, productsData, webDevelopmentPackages } from "@/data/content";
import { Section } from "@/components/Section";
import { StockSenseSvgGraphic, PeopleDeskSvgGraphic, WebStudioSvgGraphic } from "@/components/InteractiveGraphics";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Grid Beam Background */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Subtle radial ambient beam */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/[0.08] rounded-full blur-[140px] pointer-events-none -z-10 animate-glow" />

        {/* Micro indicator badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Practical Software & Websites Tailored for Indian Businesses</span>
        </motion.div>

        {/* Apple Style Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]"
        >
          Software and Websites. <br />
          <span className="apple-headline">Engineered for Indian scale.</span>
        </motion.h1>

        {/* Refined clean paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Practical business software and high-performing websites. Simplify daily work, serve customers better, and grow with technology that fits your workflow.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <Link
            href="/products"
            className="apple-btn-primary w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            Explore Our Products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20BitnaryLabs,%20I'd%20like%20to%20consult%20regarding%20software/website%20solutions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
          >
            Talk to Us on WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </motion.div>

        {/* Sector tags with icons */}
        <div className="mt-20 pt-10 border-t border-white/[0.06]">
          <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold mb-6">
            Supporting businesses across key sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {[
              "Retail & Distribution",
              "Manufacturing Units",
              "D2C & E-Commerce",
              "Warehousing & Logistics",
              "Healthcare & Clinics",
              "Professional Services",
            ].map((sector, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs text-neutral-300 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Products Section with Reusable Section wrapper and Live Visuals */}
      <Section
        id="products"
        badge="Business Operations"
        badgeIcon={<Boxes className="w-3.5 h-3.5 text-cyan-400" />}
        title="Less manual work. More control over your business."
        subtitle="Spreadsheets, scattered WhatsApp messages, and repetitive admin tasks slow a growing team down. We bring everything into unified, mobile-first systems."
        hasGlow={true}
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* StockSense Bento Card */}
          <div className="apple-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Boxes className="w-4 h-4" />
                  Inventory & Warehouse
                </span>
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                  From ₹999/mo
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  StockSense
                </h3>
                <p className="text-sm font-normal text-neutral-300 mt-1">
                  Know your stock. Make better decisions.
                </p>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Track stock across multiple store locations, receive low-inventory alerts on WhatsApp, scan barcodes instantly, and generate GST sales & purchase records.
              </p>

              {/* Live Interactive Graphic HUD */}
              <StockSenseSvgGraphic />

              <div className="space-y-2 pt-2">
                {[
                  "Real-time tracking by product, rack, and location",
                  "Automated low-stock alerts via WhatsApp & SMS",
                  "Fast barcode & QR scanning on mobile devices",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href="/products#stocksense"
                className="text-xs font-semibold text-white hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                Learn more about StockSense <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact?product=stocksense"
                className="apple-btn-secondary px-4 py-1.5 rounded-full text-xs"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* PeopleDesk Bento Card */}
          <div className="apple-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-400 flex items-center gap-1.5">
                  <Users2 className="w-4 h-4" />
                  HR & Payroll Automation
                </span>
                <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-0.5 rounded-full">
                  From ₹69/emp/mo
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  PeopleDesk
                </h3>
                <p className="text-sm font-normal text-neutral-300 mt-1">
                  Keep employee records and HR tasks in one place.
                </p>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Streamline employee onboarding, biometric attendance, leave approvals, salary calculations, and statutory compliance workflows without messy paperwork.
              </p>

              {/* Live Interactive Graphic HUD */}
              <PeopleDeskSvgGraphic />

              <div className="space-y-2 pt-2">
                {[
                  "Digital onboarding & employee records repository",
                  "Biometric sync & mobile attendance check-in",
                  "Direct WhatsApp payslip sharing & tax sheets",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.06] flex items-center justify-between">
              <Link
                href="/products#peopledesk"
                className="text-xs font-semibold text-white hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                Learn more about PeopleDesk <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact?product=peopledesk"
                className="apple-btn-secondary px-4 py-1.5 rounded-full text-xs"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Web Studio Section with Visual Showcase */}
      <Section
        id="web-studio"
        badge="Web Studio"
        badgeIcon={<Globe2 className="w-3.5 h-3.5 text-cyan-400" />}
        title="Websites crafted for high conversion"
        subtitle="From corporate presentations to full-scale e-commerce stores with Indian checkout & GST invoice capabilities."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <WebStudioSvgGraphic />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-semibold text-white">Built for speed, mobile, and conversion</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every website we build is optimized for Google PageSpeed 90+, integrated with Razorpay/UPI checkout and instant WhatsApp routing.
            </p>
            <div className="pt-2">
              <Link
                href="/web-development"
                className="apple-btn-primary px-5 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2"
              >
                View Web Studio Services <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDevelopmentPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="apple-card rounded-3xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                <div className="text-2xl font-bold text-white mt-1 mb-1">
                  {pkg.price}
                </div>
                <div className="text-xs text-neutral-400 mb-4">
                  Timeline: <span className="text-neutral-300">{pkg.deliveryTime}</span>
                </div>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {pkg.suitableFor}
                </p>

                <div className="border-t border-white/[0.06] pt-4 space-y-2">
                  {pkg.features.slice(0, 4).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className="apple-btn-secondary w-full py-2 rounded-xl text-center text-xs font-medium block"
                >
                  Choose {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section
        id="why-us"
        badge="Core Values"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />}
        title="Why work with BitnaryLabs"
        subtitle="Principles engineered around real business reliability, clear deliverables, and mutual respect."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              icon: Layers,
              title: "Practical Workflows",
              desc: "Features selected around real business tasks. No unnecessary bloat or theoretical complexity.",
            },
            {
              icon: Smartphone,
              title: "Mobile-First",
              desc: "Tested across mobile screens, regional workflows, GST invoices, and WhatsApp notification alerts.",
            },
            {
              icon: CreditCard,
              title: "Clear Pricing",
              desc: "Clear deliverable boundaries, timeline milestones, and honest fixed pricing before work commences.",
            },
            {
              icon: ShieldCheck,
              title: "Guided Onboarding",
              desc: "Hands-on setup guidance and training for your management and staff with zero downtime.",
            },
            {
              icon: HeadphonesIcon,
              title: "Responsive Support",
              desc: "Prompt WhatsApp & phone response within confirmed business hours from real engineers.",
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="apple-card p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{pillar.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Minimal Apple-Style Closing CTA */}
      <Section withTopDivider={true}>
        <div className="apple-card rounded-3xl p-10 sm:p-16 border border-white/[0.1] text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
            Tell us what you want <br />
            <span className="apple-headline">to improve.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Need better business software or a website that works harder for your company? Share your goals and our team will guide you through the ideal next step.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="apple-btn-primary w-full sm:w-auto px-8 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary w-full sm:w-auto px-8 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
            >
              WhatsApp Us Directly
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
