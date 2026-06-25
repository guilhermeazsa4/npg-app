"use client";

import { Eye, Handshake, ShieldCheck } from "lucide-react";
import {
  Eyebrow,
  FloatingWhatsApp,
  MotionBlock,
  PageHeader,
  PrimaryButtonLight,
} from "@/components/ui";

const stats = [
  { value: "+R$ 180 mi", label: "em arrecadação garantida" },
  { value: "420", label: "condomínios atendidos" },
  { value: "12 anos", label: "de atuação no setor" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Solidez",
    text: "Garantimos por contrato. O condomínio recebe independentemente da inadimplência — sem letras miúdas.",
  },
  {
    icon: Eye,
    title: "Transparência",
    text: "Condições claras, valores definidos e comunicação direta. Sem surpresas no meio do caminho.",
  },
  {
    icon: Handshake,
    title: "Parceria",
    text: "Trabalhamos junto da administradora e do síndico, sem trocar a operação que já funciona.",
  },
];

export function AEmpresaContent() {
  return (
    <main className="bg-white">
      <PageHeader
        eyebrow="A Empresa"
        title="Previsibilidade financeira para o condomínio brasileiro"
        description="A NPG Capital nasceu para resolver um problema antigo da gestão condominial: a inadimplência que trava o caixa e sobrecarrega o síndico."
      />

      {/* Sobre */}
      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <MotionBlock>
            <h2 className="max-w-xl text-3xl font-black leading-tight text-[#14344E] md:text-4xl">
              Garantia de receita, sem a parte ingrata da cobrança
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
              Assumimos o risco da inadimplência para que o condomínio receba o
              valor previsto todo mês. O síndico deixa de cobrar vizinho e o
              caixa passa a ser planejável o ano inteiro.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#14344E]/72">
              Atuamos em parceria com administradoras e conselhos, com contratos
              claros e acompanhamento próximo — do primeiro repasse à garantia
              ativa.
            </p>
            <div className="mt-9">
              <PrimaryButtonLight href="/contato#solicitar-proposta">
                Solicitar Proposta
              </PrimaryButtonLight>
            </div>
          </MotionBlock>
        </div>
      </section>

      {/* Números */}
      <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1220px]">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <MotionBlock key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-5xl font-black text-[#F1C75B] md:text-6xl">{s.value}</p>
                  <p className="mt-3 text-sm text-white/60">{s.label}</p>
                </div>
              </MotionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <MotionBlock>
            <Eyebrow>O que orienta a NPG</Eyebrow>
          </MotionBlock>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <MotionBlock key={v.title} delay={i * 0.08}>
                  <article
                    className="h-full border-l-2 border-[#F1C75B] bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] transition-transform duration-300 hover:translate-x-1.5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#14344E] text-[#F1C75B] shadow-[0_14px_30px_rgba(20,52,78,0.18)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-black text-[#14344E]">{v.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#14344E]/70">{v.text}</p>
                  </article>
                </MotionBlock>
              );
            })}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
