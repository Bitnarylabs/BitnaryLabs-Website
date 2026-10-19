"use client";

import Link from "next/link";
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Clock,
  ChevronRight,
  Globe2,
  Sparkles,
  Zap,
  ShoppingBag,
  Building2,
  FileText
} from "lucide-react";
import { webServiceCategories, webDevelopmentPackages, siteConfig } from "@/data/content";
import { Section } from "@/components/Section";
import { WebStudioSvgGraphic } from "@/components/InteractiveGraphics";

export default function WebDevelopmentPage() {
  return (
    <div className="relative pb-28">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Web Studio & Engineering</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          A website built for <br />
          <span className="apple-headline">your next stage of growth.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          We design and engineer responsive websites that present your business clearly, work smoothly across devices, and guide visitors to action.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact?service=custom-web"
            className="apple-btn-primary px-7 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
          >
            Discuss Your Website <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary px-7 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2"
          >
            Chat on WhatsApp <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </section>

      {/* Interactive Graphic overview */}
      <Section
        badge="Architecture"
        badgeIcon={<Zap className="w-3.5 h-3.5 text-cyan-400" />}
        title="Modern Performance & Conversion Architecture"
        subtitle="Every site we ship meets high standards for load speed, mobile layout, and clean code."
        withTopDivider={true}
      >
        <div className="max-w-4xl mx-auto">
          <WebStudioSvgGraphic />
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section
        id="solutions"
        badge="Tailored Archetypes"
        badgeIcon={<Globe2 className="w-3.5 h-3.5 text-cyan-400" />}
        title="Custom solutions for every objective"
        subtitle="From e-commerce stores with Indian payment gateways to corporate authority platforms."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webServiceCategories.map((svc, idx) => (
            <div
              key={idx}
              className="apple-card rounded-3xl p-8 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  0{idx + 1}
                </span>

                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {svc.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {svc.description}
                </p>

                <div className="border-t border-white/[0.06] pt-3 space-y-2">
                  {svc.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-neutral-400">
                  <span className="text-neutral-300 font-medium block mb-0.5">Best For:</span>
                  {svc.ideal}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.06]">
                <Link
                  href={svc.ctaLink}
                  className="apple-btn-secondary w-full py-2 rounded-xl text-center text-xs font-medium block"
                >
                  {svc.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Packages Section */}
      <Section
        id="packages"
        badge="Packages & Pricing"
        title="Fixed website packages"
        subtitle="Predictable investment, transparent delivery timelines, and zero surprise fees."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webDevelopmentPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="apple-card rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>

                <div className="text-3xl font-bold text-white mb-1">
                  {pkg.price}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Timeline: <strong className="text-neutral-300">{pkg.deliveryTime}</strong></span>
                </div>

                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {pkg.suitableFor}
                </p>

                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className="apple-btn-secondary w-full py-2.5 rounded-xl text-center text-xs font-medium block"
                >
                  Choose {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
