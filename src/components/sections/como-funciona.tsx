"use client";

import { Sparkles } from "lucide-react";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function ComoFuncionaSection() {
  const steps = [
    {
      n: "01",
      title: "Análise",
      text: "Avaliamos a arrecadação e o histórico do condomínio, sem custo e sem compromisso.",
    },
    {
      n: "02",
      title: "Proposta",
      text: "Apresentamos uma proposta clara, com o valor garantido e as condições por escrito.",
    },
    {
      n: "03",
      title: "Implantação",
      text: "Formalizamos o contrato e integramos com a administradora, sem trocar sua operação.",
    },
    {
      n: "04",
      title: "Garantia ativa",
      text: "A partir do primeiro repasse, o condomínio recebe todo mês — a inadimplência é nossa.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<Sparkles aria-hidden="true" className="h-4 w-4" />}>
            Como funciona
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Do primeiro contato à garantia ativa em poucos passos.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <MotionBlock key={step.n} delay={i * 0.1}>
              <article
                className="glass-premium min-h-[260px] rounded-[8px] p-6 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="text-5xl font-black text-[#F1C75B]">{step.n}</span>
                  <div className="pt-8">
                    <h3 className="text-xl font-black text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{step.text}</p>
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
