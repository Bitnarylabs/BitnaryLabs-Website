"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050507] text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="inline-block text-white font-semibold text-sm tracking-tight">
              BitnaryLabs
            </Link>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              Purpose-built software products and high-conversion web development for modern Indian enterprises.
            </p>
            <div className="pt-2 text-neutral-400">
              {siteConfig.contact.workingHours} • {siteConfig.contact.responseTime}
            </div>
          </div>

          {/* Software */}
          <div className="space-y-2.5">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Products</div>
            <ul className="space-y-2">
              <li>
                <Link href="/products#stocksense" className="hover:text-white transition-colors">
                  StockSense
                </Link>
              </li>
              <li>
                <Link href="/products#peopledesk" className="hover:text-white transition-colors">
                  PeopleDesk
                </Link>
              </li>
              <li>
                <Link href="/products#comparison" className="hover:text-white transition-colors">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Software Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Web Studio */}
          <div className="space-y-2.5">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Studio</div>
            <ul className="space-y-2">
              <li>
                <Link href="/web-development" className="hover:text-white transition-colors">
                  E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="hover:text-white transition-colors">
                  Corporate Platforms
                </Link>
              </li>
              <li>
                <Link href="/web-development#packages" className="hover:text-white transition-colors">
                  Fixed Packages
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  All Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2.5">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Direct</div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  WhatsApp <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="text-neutral-400">{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Apple style sub-footer */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>Copyright © 2026 {siteConfig.legalName}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-neutral-400">About</Link>
            <Link href="/pricing" className="hover:text-neutral-400">Pricing</Link>
            <Link href="/contact" className="hover:text-neutral-400">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
