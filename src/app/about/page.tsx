import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check
} from "lucide-react";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Engineering Philosophy | BitnaryLabs",
  description: "Learn about BitnaryLabs, our approach to practical business software, and our web development philosophy for enterprises.",
};

export default function AboutPage() {
  return (
    <div className="relative pb-28">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-neutral-400 mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>The Philosophy</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          Technology that fits the <br />
          <span className="apple-headline">way you work.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          We build business tools and web platforms shaped around measurable customer workflows rather than unnecessary complexity.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="apple-card rounded-3xl p-8 sm:p-14 border border-white/[0.08] space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Practical tools over theoretical complexity
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            <p>
              Business software should eliminate friction, not introduce new administrative burdens. We design our platforms with clean typography, straightforward interfaces, and robust workflows tailored for Indian commerce.
            </p>
            <p>
              Whether handling physical inventory across multiple regional warehouses or deploying bespoke online retail experiences, our purpose is simple: help businesses automate repetitive tasks and focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we value</h2>
          <p className="mt-2 text-xs text-neutral-400">
            Guiding principles that define our software architecture and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Clarity over complexity",
              desc: "We prioritize clean, intuitive user experiences over feature bloat. Systems that your team can adopt instantly without weeks of training.",
            },
            {
              title: "Practical, India-aware workflows",
              desc: "Integrated with local compliance expectations, GST invoices, WhatsApp alert channels, and multi-location logistics.",
            },
            {
              title: "Transparent scope and pricing",
              desc: "Clear deliverable boundaries, honest schedules, and upfront pricing before any contract or work begins.",
            },
            {
              title: "Long-term engineering reliability",
              desc: "We stand behind our code with documented APIs, dependable infrastructure, and responsive customer support.",
            },
          ].map((val, idx) => (
            <div key={idx} className="apple-card rounded-3xl p-8 space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-bold">0{idx + 1}</span>
              <h3 className="text-base font-semibold text-white">{val.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Consultation CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="apple-card rounded-3xl p-10 sm:p-14 border border-white/[0.08] space-y-4">
          <h3 className="text-2xl font-semibold text-white">Direct Engineering Collaboration</h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            When you work with BitnaryLabs, you work directly with experienced software engineers who understand product architecture.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="apple-btn-primary px-7 py-3 rounded-full text-xs font-semibold flex items-center gap-2"
            >
              Book a 30-Minute Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
