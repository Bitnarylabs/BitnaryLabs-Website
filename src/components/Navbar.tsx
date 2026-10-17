"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare, Terminal } from "lucide-react";
import { siteConfig } from "@/data/content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Apple-like Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-sm font-semibold tracking-tighter text-white">BL</span>
            </div>
            <span className="text-base font-semibold tracking-tight text-white group-hover:text-slate-200 transition-colors">
              BitnaryLabs
            </span>
          </Link>

          {/* Desktop Navigation - Subtle Apple style pill */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] backdrop-blur-lg">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20BitnaryLabs`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white transition-colors px-3 py-1.5 flex items-center gap-1"
            >
              WhatsApp
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            <Link
              href="/contact"
              className="apple-btn-primary px-4 py-1.5 rounded-full text-xs tracking-tight"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0b10] border-b border-white/[0.08] px-6 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-white bg-white/10" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="apple-btn-primary w-full py-2.5 rounded-xl text-center text-xs font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
