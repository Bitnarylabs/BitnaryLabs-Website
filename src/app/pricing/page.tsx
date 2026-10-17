"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
  CreditCard
} from "lucide-react";
import { productsData, webDevelopmentPackages, faqsData } from "@/data/content";
import { Section } from "@/components/Section";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="relative pb-28">
      {/* Header */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent & Predictable</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          Clear pricing for <br />
          <span className="apple-headline">better planning.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Review scope, inclusions, and billing cycles with total transparency before choosing a plan.
        </p>

        {/* Minimal Apple toggle pill */}
        <div className="mt-10 inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all ${
              billingCycle === "monthly"
                ? "bg-white text-black shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 ${
              billingCycle === "annual"
                ? "bg-white text-black shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>Annual</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
              Save 2 Months
            </span>
          </button>
        </div>
      </section>

      {/* StockSense Pricing */}
      <Section
        badge="Inventory"
        title="StockSense Plans"
        subtitle="Transparent pricing for single shops, growing retail chains, and distributors."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsData.stocksense.plans.map((p, idx) => (
            <div
              key={idx}
              className="apple-card rounded-3xl p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {p.name}
                  </span>
                  {p.popular && (
                    <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 mb-6">{p.target}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {billingCycle === "annual"
                      ? idx === 0 ? "₹833" : idx === 1 ? "₹2,082" : "₹4,166"
                      : p.price}
                  </span>
                  <span className="text-xs text-neutral-400">/mo</span>
                </div>

                <div className="text-xs text-emerald-400 font-medium mb-6">
                  {billingCycle === "annual" ? p.billedAnnually : "Billed monthly"}
                </div>

                <div className="border-t border-white/[0.06] pt-5 space-y-2.5">
                  <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider block mb-1">
                    What&apos;s Included
                  </span>
                  {p.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <Link
                  href={`/contact?product=stocksense&plan=${encodeURIComponent(p.name)}`}
                  className="apple-btn-secondary w-full py-2.5 rounded-xl text-center text-xs font-medium block"
                >
                  Choose {p.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PeopleDesk Pricing */}
      <Section
        badge="HR & Payroll"
        title="PeopleDesk Plans"
        subtitle="Per-employee monthly pricing designed with full statutory tax compliance."
        withTopDivider={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsData.peopledesk.plans.map((p, idx) => (
            <div
              key={idx}
              className="apple-card rounded-3xl p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {p.name}
                  </span>
                  {p.popular && (
                    <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 mb-6">{p.target}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-xs text-neutral-400">/emp/month</span>
                </div>

                <div className="text-xs text-neutral-400 mb-6">
                  {p.minEmployees}
                </div>

                <div className="border-t border-white/[0.06] pt-5 space-y-2.5">
                  <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider block mb-1">
                    What&apos;s Included
                  </span>
                  {p.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <Link
                  href={`/contact?product=peopledesk&plan=${encodeURIComponent(p.name)}`}
                  className="apple-btn-secondary w-full py-2.5 rounded-xl text-center text-xs font-medium block"
                >
                  Choose {p.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Frequently Asked Questions */}
      <Section
        badge="FAQ"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-cyan-400" />}
        title="Frequently Asked Questions"
        subtitle="Answers regarding billing, setup, payment methods, and scope."
        withTopDivider={true}
      >
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="apple-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
