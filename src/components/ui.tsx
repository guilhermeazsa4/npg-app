"use client";

import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay > 0) {
      el.style.transitionDelay = `${delay}s`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.24 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] bg-[#D4A53A] px-6 py-3 text-sm font-bold text-[#0E1F1E] shadow-[0_18px_40px_rgba(100,71,17,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#E1B34C] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D4A53A] focus:ring-offset-2 focus:ring-offset-[#0E1F1E]"
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export function PrimaryButtonLight({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] bg-[#D4A53A] px-6 py-3 text-sm font-bold text-[#0E1F1E] shadow-[0_18px_40px_rgba(100,71,17,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#E1B34C] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D4A53A] focus:ring-offset-2"
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#0E1F1E]"
    >
      {children}
      <ChevronRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export function WhatsAppButton({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href ?? WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#0E1F1E]"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
      {children}
    </a>
  );
}

export function Eyebrow({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
  light?: boolean;
}) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#D4A53A]">
      {icon}
      {children}
    </p>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="whatsapp-animate fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#1FAF67] px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(31,175,103,0.34)] transition-transform hover:-translate-y-1 hover:bg-[#168E53] active:scale-95"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A53A]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {description}
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}
