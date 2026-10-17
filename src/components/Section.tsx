"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  title?: string | ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  children: ReactNode;
  hasGlow?: boolean;
  withTopDivider?: boolean;
}

export function Section({
  id,
  className,
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  children,
  hasGlow = false,
  withTopDivider = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32 overflow-hidden", className)}>
      {/* Top Section Beam Divider */}
      {withTopDivider && (
        <div className="absolute top-0 left-0 right-0 w-full flex justify-center pointer-events-none">
          <div className="section-divider" />
        </div>
      )}

      {/* Subtle Background Glow Accent */}
      {hasGlow && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow" />
      )}

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {(badge || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "mb-16",
              align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
            )}
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-cyan-400 mb-5 backdrop-blur-md shadow-sm">
                {badgeIcon && <span className="w-3.5 h-3.5 flex items-center justify-center">{badgeIcon}</span>}
                <span>{badge}</span>
              </div>
            )}

            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
