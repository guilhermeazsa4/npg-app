"use client";

import { motion } from "framer-motion";
import {
  BanknoteArrowUp,
  Gavel,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PrimaryButton, WhatsAppButton } from "@/components/ui";

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

function HeroContent() {
  return (
    <>
      <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-[#D4A53A] bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl">
        <LockKeyhole aria-hidden="true" className="h-4 w-4 text-[#D4A53A]" />
        Garantidora condominial
      </div>
      <h1 className="max-w-[860px] text-4xl font-black leading-[1.02] md:text-6xl lg:text-[68px]">
        Inadimplência é{" "}
        <span className="text-[#D4A53A]">problema nosso</span>.
        {" "}Caixa cheio é problema resolvido.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
        A NPG Capital garante 100% da arrecadação do seu condomínio e
        assume a cobrança dos inadimplentes. Previsibilidade total, sem o
        desgaste de cobrar vizinho.
      </p>

      <p className="mt-5 text-sm font-semibold text-[#D4A53A]">
        Mais de 420 condomínios atendidos &middot; R$ 180 milhões garantidos
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <PrimaryButton href="/contato#solicitar-proposta">
          Solicitar Proposta
        </PrimaryButton>
        <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
      </div>
    </>
  );
}

export function Hero() {
  const hydrated = useHydrated();

  const highlights = [
    { icon: ShieldCheck, text: "Garantia de 100% da receita" },
    { icon: BanknoteArrowUp, text: "Cobrança de taxas atrasadas" },
    { icon: Gavel, text: "Cobrança judicial inclusa" },
    { icon: TrendingUp, text: "Antecipação para obras" },
  ];

  return (
    <section className="relative min-h-[820px] bg-[#0E1F1E] pb-12 pt-28 text-white lg:min-h-screen lg:pb-44">
      <div className="hero-image absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,31,30,0.94)_0%,rgba(20,52,78,0.76)_46%,rgba(20,52,78,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,24,0.08)_0%,rgba(4,17,24,0.18)_48%,rgba(4,17,24,0.74)_100%)]" />
      <div className="noise-soft absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px] px-5 pt-14 lg:px-8 lg:pt-24">
        {hydrated ? (
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <HeroContent />
          </motion.div>
        ) : (
          <div className="max-w-4xl">
            <HeroContent />
          </div>
        )}
      </div>

      {/* Faixa de destaques */}
      <div className="relative z-20 mt-10 px-5 lg:absolute lg:inset-x-0 lg:bottom-[-82px] lg:mt-0 lg:px-8">
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            const featured = i === 0;
            const content = (
              <div className="relative z-10 flex h-full flex-col justify-between">
                <Icon
                  aria-hidden="true"
                  className={`h-9 w-9 ${featured ? "text-[#14344E]" : "text-[#D4A53A]"}`}
                />
                <h3
                  className={`pt-6 text-lg font-black leading-tight ${
                    featured ? "text-[#0E1F1E]" : "text-white"
                  }`}
                >
                  {item.text}
                </h3>
              </div>
            );

            return hydrated ? (
              <motion.article
                key={item.text}
                className={`group min-h-[164px] rounded-[8px] p-5 text-white ${
                  featured ? "gold-surface text-[#0E1F1E]" : "glass-premium"
                }`}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.32 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
              >
                {content}
              </motion.article>
            ) : (
              <article
                key={item.text}
                className={`group min-h-[164px] rounded-[8px] p-5 text-white ${
                  featured ? "gold-surface text-[#0E1F1E]" : "glass-premium"
                }`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
