"use client";

import { motion } from "framer-motion";
import {
  BanknoteArrowUp,
  Gavel,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/ui";

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

function HeroContent() {
  return (
    <>
      <h1 className="ml-auto max-w-[860px] text-4xl font-black leading-[1.02] md:text-6xl lg:text-[68px]">
        Garantimos a receita,{" "}
        <span className="text-[#D4A53A]">Você gere melhor.</span>
      </h1>
      <p className="ml-auto mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
        Com a NPG Capital, seu condomínio conta com
        <br />
        arrecadação garantida, previsibilidade financeira
        <br />
        e mais tranquilidade para uma gestão eficiente.
      </p>
      <p className="mt-5 text-sm font-semibold text-[#D4A53A]">
        Mais de 420 condomínios atendidos &middot; R$ 180 milhões garantidos
      </p>

      <div className="mt-9 flex flex-col items-end gap-4 sm:flex-row sm:justify-end">
        <PrimaryButton href="/contato#solicitar-proposta">
          Solicitar Proposta
        </PrimaryButton>
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
    <section className="relative min-h-[820px] bg-[#0E1F1E] pb-12 pt-20 text-white lg:min-h-screen lg:pb-44">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/HeroFamily.webp')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_33%,rgba(38,43,59,0.55)_50%,rgba(38,43,59,0.82)_66%,rgba(38,43,59,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(4,17,24,0.05)_50%,rgba(4,17,24,0.4)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px] px-5 pt-12 lg:px-8 lg:pt-20">
        {hydrated ? (
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto max-w-4xl text-right"
          >
            <HeroContent />
          </motion.div>
        ) : (
          <div className="ml-auto max-w-4xl text-right">
            <HeroContent />
          </div>
        )}
      </div>

      {/* Faixa de destaques */}
      <div className="relative z-20 mt-10 px-5 lg:absolute lg:inset-x-0 lg:bottom-[8px] lg:mt-0 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid max-w-[820px] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            const featured = i === 0;
            const content = (
              <div className="relative z-10 flex h-full items-center gap-3">
                <Icon
                  aria-hidden="true"
                  className={`h-11 w-11 shrink-0 ${featured ? "text-[#14344E]" : "text-[#D4A53A]"}`}
                />
                <h3
                  className={`text-sm font-black leading-tight ${
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
                className={`group rounded-[8px] p-4 text-white ${
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
                className={`group rounded-[8px] p-4 text-white ${
                  featured ? "gold-surface text-[#0E1F1E]" : "glass-premium"
                }`}
              >
                {content}
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
