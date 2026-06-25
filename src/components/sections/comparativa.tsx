"use client";

import { CheckCircle2, Scale, X as XIcon } from "lucide-react";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function ComparativaSection() {
  const semGarantidora = [
    "Caixa oscila conforme quem pagou no mês",
    "Síndico assume a cobrança dos inadimplentes",
    "Fundo de reserva usado para cobrir buracos",
    "Recuperação só pela via judicial, lenta e cara",
  ];
  const comNpg = [
    "Caixa previsível, independente da inadimplência",
    "A NPG assume a cobrança — você não cobra vizinho",
    "Fundo de reserva preservado para o que importa",
    "Receita garantida em contrato, sem espera",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<Scale aria-hidden="true" className="h-4 w-4" />}>
            A diferença
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            O mesmo condomínio, com e sem a NPG.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            A garantia não é um luxo — é a diferença entre um caixa que oscila
            todo mês e um caixa que você consegue planejar.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <MotionBlock delay={0.08}>
            <div className="rounded-[8px] border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-black text-white/60">Sem garantidora</h3>
                <p className="text-4xl font-black text-white/40">85%</p>
              </div>
              <p className="mb-5 text-xs text-white/40">da arrecadação prevista, na média.</p>
              <ul className="space-y-3">
                {semGarantidora.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/60">
                    <XIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.16}>
            <div className="glass-premium rounded-[8px] p-6">
              <div className="relative z-10">
                <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-black text-[#F1C75B]">Com a NPG Capital</h3>
                  <p className="text-4xl font-black text-[#F1C75B]">100%</p>
                </div>
                <p className="mb-5 text-xs text-white/60">da arrecadação repassada, todo mês.</p>
                <ul className="space-y-3">
                  {comNpg.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#F1C75B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}
