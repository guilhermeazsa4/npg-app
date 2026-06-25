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

  const headerClass = `fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? "border-white/10 bg-[#0E1F1E]/80 shadow-[0_16px_48px_rgba(4,17,24,0.24)]"
      : "border-white/10 bg-[#0E1F1E]/55"
  } backdrop-blur-2xl`;

  const inner = (
    <>
      <div className="mx-auto flex h-20 w-full max-w-[1220px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="NPG Capital">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-white/20 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
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
              className="text-xs font-bold text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/seu-boleto"
            className="inline-flex min-h-10 items-center gap-2 rounded-[4px] border border-white/20 bg-white/10 px-4 text-xs font-bold text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
            Seu Boleto
          </Link>
          <Link
            href="/contato#solicitar-proposta"
            className="inline-flex min-h-10 items-center gap-2 rounded-[4px] bg-[#D4A53A] px-5 text-xs font-black text-[#0E1F1E] transition-colors hover:bg-[#E1B34C]"
          >
            Solicitar Proposta
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/15 bg-white/10 text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-white/10 bg-[#0E1F1E]/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-[1220px] flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[4px] px-2 py-2 text-sm font-semibold text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/seu-boleto"
                className="rounded-[4px] px-2 py-2 text-sm font-semibold text-white/80"
                onClick={() => setOpen(false)}
              >
                Seu Boleto
              </Link>
              <Link
                href="/contato#solicitar-proposta"
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] bg-[#D4A53A] px-5 text-xs font-black text-[#0E1F1E]"
                onClick={() => setOpen(false)}
              >
                Solicitar Proposta
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] border border-white/15 bg-white/10 px-5 text-xs font-bold text-white"
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
