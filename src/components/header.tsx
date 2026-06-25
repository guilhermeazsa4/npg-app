"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const navItems = [
  { label: "A Empresa", href: "/a-empresa" },
  { label: "Formulários", href: "/contato#formularios" },
  { label: "Revistas", href: "/revistas" },
  { label: "E-books", href: "/e-books" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = "fixed inset-x-0 top-3 z-50 px-3 transition-all duration-300";

  const shellClass = `mx-auto overflow-hidden rounded-[8px] border backdrop-blur-2xl transition-all duration-300 lg:max-w-[1220px] ${
    scrolled
      ? "border-white/22 bg-[#0E1F1E]/52 shadow-[0_22px_76px_rgba(4,17,24,0.3),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.08)]"
      : "border-white/18 bg-[#0E1F1E]/26 shadow-[0_20px_64px_rgba(4,17,24,0.2),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(255,255,255,0.07)]"
  }`;

  const inner = (
    <>
      <div className={shellClass}>
        <div className="mx-auto flex h-[72px] w-full items-center justify-between px-4 sm:px-5 lg:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="NPG Capital">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-white/35 bg-white/92 shadow-[0_12px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <Image
                src="/assets/npg-symbol.png"
                alt=""
                width={96}
                height={86}
                className="h-11 w-11 object-contain"
                priority
              />
            </span>
            <span className="leading-none text-white">
              <span className="block text-xl font-black">NPG</span>
              <span className="block text-xs font-semibold text-[#D4A53A]">
                Capital
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
              className="rounded-[8px] px-3 py-2 text-sm font-bold text-white/82 transition-all hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/seu-boleto"
              className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-[8px] border border-white/28 bg-white/10 px-5 text-sm font-bold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(4,17,24,0.14)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/42 hover:bg-white/16 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_16px_38px_rgba(4,17,24,0.18)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_34%,rgba(255,255,255,0.14)_72%,transparent)] opacity-85 transition-opacity group-hover:opacity-100" />
              <FileText aria-hidden="true" className="relative z-10 h-4 w-4" />
              <span className="relative z-10">Seu Boleto</span>
            </Link>
            <Link
              href="/contato#solicitar-proposta"
              className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/88 px-6 text-sm font-black text-[#0E1F1E] shadow-[0_16px_42px_rgba(241,199,91,0.3),inset_0_1px_0_rgba(255,255,255,0.46),inset_0_-1px_0_rgba(100,71,17,0.12)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-[#FFD66E]/92 hover:shadow-[0_20px_54px_rgba(241,199,91,0.4),inset_0_1px_0_rgba(255,255,255,0.56)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.52),transparent_36%,rgba(255,255,255,0.22)_72%,transparent)] opacity-90 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10">Solicitar Proposta</span>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/24 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-xl lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-2 max-w-[1220px] rounded-[8px] border border-white/18 bg-[#0E1F1E]/72 px-5 py-5 shadow-[0_18px_58px_rgba(4,17,24,0.24),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-[1220px] flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[8px] px-3 py-2 text-base font-semibold text-white/84 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/seu-boleto"
                className="rounded-[8px] px-3 py-2 text-base font-semibold text-white/84 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Seu Boleto
              </Link>
              <Link
                href="/contato#solicitar-proposta"
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[#FFE39A]/70 bg-[#F1C75B]/90 px-5 text-sm font-black text-[#0E1F1E] shadow-[0_14px_34px_rgba(241,199,91,0.28),inset_0_1px_0_rgba(255,255,255,0.46)]"
                onClick={() => setOpen(false)}
              >
                Solicitar Proposta
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-white/22 bg-white/12 px-5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]"
                onClick={() => setOpen(false)}
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  if (!mounted) {
    return <header className={headerClass}>{inner}</header>;
  }

  return (
    <motion.header
      className={headerClass}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {inner}
    </motion.header>
  );
}
