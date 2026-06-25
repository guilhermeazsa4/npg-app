"use client";

import { Quote } from "lucide-react";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function DepoimentosSection() {
  const testimonials = [
    {
      quote: "Parei de perseguir morador no corredor. O condomínio recebe certo todo mês e eu cuido do que importa.",
      name: "Ricardo Almeida",
      role: "Residencial Alphaville · Barueri, SP",
      initials: "RA",
    },
    {
      quote: "A inadimplência tinha travado a reforma da fachada. Com a garantia, conseguimos planejar e executar a obra.",
      name: "Sandra Beltrão",
      role: "Edifício Aurora · Belo Horizonte, MG",
      initials: "SB",
    },
    {
      quote: "O que mais pesava era a cobrança. Hoje isso é da NPG, e as assembleias ficaram muito menos tensas.",
      name: "Marcos Tavares",
      role: "Condomínio Parque das Águas · Curitiba, PR",
      initials: "MT",
    },
    {
      quote: "Como gestora de uma carteira de prédios, a previsibilidade de caixa mudou a forma como faço o orçamento.",
      name: "Letícia Moraes",
      role: "Administradora Moraes & Cia · São Paulo, SP",
      initials: "LM",
    },
  ];

  return (
    <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<Quote aria-hidden="true" className="h-4 w-4" />}>
            Quem já garantiu
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Síndicos que pararam de se preocupar com o caixa.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <MotionBlock key={t.name} delay={i * 0.08}>
              <article
                className="h-full rounded-[8px] border border-[#14344E]/10 bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Quote aria-hidden="true" className="mb-4 h-6 w-6 text-[#F1C75B]" />
                <p className="text-base leading-7 text-[#14344E]/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#14344E]/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14344E] text-xs font-black text-[#F1C75B]">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#14344E]">{t.name}</p>
                    <p className="text-xs text-[#14344E]/50">{t.role}</p>
                  </div>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
