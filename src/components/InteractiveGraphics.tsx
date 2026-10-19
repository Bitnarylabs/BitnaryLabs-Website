"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Users2,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  QrCode,
  MapPin,
  Clock,
  Send,
  Zap,
  Globe2,
  Lock,
  Sparkles
} from "lucide-react";

export function StockSenseSvgGraphic() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090d19]/90 border border-white/[0.08] p-5 font-mono text-xs shadow-2xl overflow-hidden group">
      {/* Top subtle lighting effect */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-neutral-300 font-semibold tracking-wider text-[11px] uppercase">
            StockSense Live Inventory
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          GST 18% Engine Ready
        </span>
      </div>

      {/* Grid of Metrics */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
            Total Inventory
          </span>
          <span className="text-lg font-bold text-white tracking-tight">18,450 Units</span>
          <span className="text-[10px] text-cyan-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +14.2% turnover
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
            Active Warehouses
          </span>
          <span className="text-lg font-bold text-white tracking-tight">3 Branches</span>
          <span className="text-[10px] text-neutral-400 flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-cyan-400" /> Delhi, Mumbai, Noida
          </span>
        </div>
      </div>

      {/* Live Activity rows */}
      <div className="space-y-2 pt-1 border-t border-white/[0.04]">
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-black/40 border border-white/[0.03]">
          <div className="flex items-center gap-2 text-neutral-300">
            <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>Barcode batch #8491 scanned</span>
          </div>
          <span className="text-emerald-400 font-semibold">+120 Units</span>
        </div>

        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-black/40 border border-white/[0.03]">
          <div className="flex items-center gap-2 text-neutral-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Low-stock alert sent via WhatsApp</span>
          </div>
          <span className="text-amber-400">Triggered (5 units left)</span>
        </div>
      </div>
    </div>
  );
}

export function PeopleDeskSvgGraphic() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090d19]/90 border border-white/[0.08] p-5 font-mono text-xs shadow-2xl overflow-hidden group">
      {/* Top subtle lighting effect */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-neutral-300 font-semibold tracking-wider text-[11px] uppercase">
            PeopleDesk Payroll Run
          </span>
        </div>
        <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
          PF / ESI / TDS Verified
        </span>
      </div>

      {/* Grid of Metrics */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
            Biometric Sync
          </span>
          <span className="text-lg font-bold text-white tracking-tight">99.8% Logged</span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
            <CheckCircle2 className="w-3 h-3" /> Auto-deductions OK
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
            Payslips Generated
          </span>
          <span className="text-lg font-bold text-white tracking-tight">1-Click Dispatch</span>
          <span className="text-[10px] text-blue-400 flex items-center gap-1 mt-1">
            <Send className="w-3 h-3" /> Sent via WhatsApp
          </span>
        </div>
      </div>

      {/* Live statutory breakdown */}
      <div className="space-y-2 pt-1 border-t border-white/[0.04]">
        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-black/40 border border-white/[0.03]">
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Form 16 & TDS tax bracket rules</span>
          </div>
          <span className="text-neutral-200">Applied</span>
        </div>

        <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-black/40 border border-white/[0.03]">
          <div className="flex items-center gap-2 text-neutral-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Salary Disbursement CSV export</span>
          </div>
          <span className="text-emerald-400 font-semibold">NEFT/RTGS Ready</span>
        </div>
      </div>
    </div>
  );
}

export function WebStudioSvgGraphic() {
  return (
    <div className="relative w-full rounded-2xl bg-[#090d19]/90 border border-white/[0.08] p-5 font-mono text-xs shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-neutral-300 font-semibold text-[11px] uppercase tracking-wider">
            High-Performance Web Architecture
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          100 Google PageSpeed
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 my-4 text-center">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase block mb-1">FCP</span>
          <span className="text-base font-bold text-emerald-400">0.4s</span>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase block mb-1">Checkout</span>
          <span className="text-base font-bold text-cyan-400">UPI / COD</span>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <span className="text-[10px] text-neutral-400 uppercase block mb-1">SEO</span>
          <span className="text-base font-bold text-white">Schema OK</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] flex items-center justify-between">
        <span className="text-neutral-400">WhatsApp Lead Routing Hook</span>
        <span className="text-emerald-400 font-semibold">Active &bull; &lt; 2s</span>
      </div>
    </div>
  );
}
