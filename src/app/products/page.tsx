"use client";

import Link from "next/link";
import {
  Boxes,
  Users2,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building,
  ChevronRight
} from "lucide-react";
import { productsData, siteConfig } from "@/data/content";
import { Section } from "@/components/Section";
import { StockSenseSvgGraphic, PeopleDeskSvgGraphic } from "@/components/InteractiveGraphics";

export default function ProductsPage() {
  const { stocksense, peopledesk } = productsData;

  return (
    <div className="relative pb-28">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-cyan-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Everyday Business Operations</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          Software built to work <br />
          <span className="apple-headline">the way you do.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Manage stock, streamline attendance, automate payroll, and keep your teams focused with software designed for Indian business workflows.
        </p>
      </section>

      {/* StockSense Section */}
      <Section
        id="stocksense"
        badge="Inventory & Warehouse"
        badgeIcon={<Boxes className="w-3.5 h-3.5 text-cyan-400" />}
        title="StockSense — Know your stock. Make better decisions."
        subtitle="StockSense helps Indian businesses track inventory, monitor stock movements, and manage orders with automated GST calculation."
        hasGlow={true}
        withTopDivider={true}
      >
        <div className="apple-card rounded-3xl p-8 sm:p-14 border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span>Real-Time Inventory Engine</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {stocksense.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stocksense.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?product=stocksense"
                  className="apple-btn-primary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  Request StockSense Demo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="apple-btn-secondary px-6 py-2.5 rounded-full text-xs font-semibold"
                >
                  View Plans from ₹999/mo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <StockSenseSvgGraphic />
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400 flex items-center justify-between">
                <span>Designed for Retail, Wholesale & Warehouses</span>
                <span className="text-white font-medium">Multi-branch ready</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PeopleDesk Section */}
      <Section
        id="peopledesk"
        badge="HR & Payroll"
        badgeIcon={<Users2 className="w-3.5 h-3.5 text-blue-400" />}
        title="PeopleDesk — Employee records and HR in one place."
        subtitle="Streamline employee onboarding, biometric attendance, leave approvals, salary calculations, and statutory compliance workflows without paperwork."
        withTopDivider={true}
      >
        <div className="apple-card rounded-3xl p-8 sm:p-14 border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span>Automated Payroll & Compliance</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {peopledesk.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {peopledesk.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?product=peopledesk"
                  className="apple-btn-primary px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  Book PeopleDesk Demo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="apple-btn-secondary px-6 py-2.5 rounded-full text-xs font-semibold"
                >
                  View Plans from ₹69/emp
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <PeopleDeskSvgGraphic />
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400 flex items-center justify-between">
                <span>Employee Self-Service Portal</span>
                <span className="text-white font-medium">Mobile check-in ready</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section
        id="comparison"
        badge="Comparison"
        title="Side by side feature capability matrix"
        subtitle="Compare core operational capabilities across StockSense and PeopleDesk."
        withTopDivider={true}
      >
        <div className="apple-card rounded-3xl overflow-hidden border border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300">
              <thead className="bg-white/[0.04] text-[11px] uppercase tracking-wider text-white border-b border-white/[0.06]">
                <tr>
                  <th className="py-4 px-6 font-semibold">Capability</th>
                  <th className="py-4 px-6 font-semibold text-cyan-400">StockSense (Inventory)</th>
                  <th className="py-4 px-6 font-semibold text-blue-400">PeopleDesk (HR & Payroll)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {[
                  {
                    feature: "Core Focus",
                    stock: "SKUs, multi-branch warehouses & GST billing",
                    people: "Digital employee records, attendance & payroll",
                  },
                  {
                    feature: "Mobile & Tablet Support",
                    stock: "Yes, fast web responsive app",
                    people: "Yes, employee self-service check-in",
                  },
                  {
                    feature: "WhatsApp Notifications",
                    stock: "Low-stock & order alerts",
                    people: "Digital salary slips delivered directly",
                  },
                  {
                    feature: "Multi-Location Support",
                    stock: "Up to 3 on Growth, Unlimited on Business",
                    people: "Multi-department and branch hierarchy",
                  },
                  {
                    feature: "Tax & Compliance",
                    stock: "Automated CGST / SGST / IGST calculation",
                    people: "Configured PF, ESI, TDS & professional tax",
                  },
                  {
                    feature: "Guided Setup & Onboarding",
                    stock: "Assisted catalog upload & training",
                    people: "Assisted employee import & policy setup",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.stock}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.people}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </div>
  );
}
