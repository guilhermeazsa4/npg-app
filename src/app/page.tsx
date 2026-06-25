"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BanknoteArrowUp,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  Gavel,
  Handshake,
  LockKeyhole,
  MessageCircle,
  PiggyBank,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X as XIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Eyebrow,
  FloatingWhatsApp,
  MotionBlock,
  PrimaryButton,
  PrimaryButtonLight,
  WhatsAppButton,
} from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/constants";

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

/* ───────── Hero ───────── */

function Hero() {
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,31,30,0.02)_0%,rgba(14,31,30,0.04)_35%,rgba(20,52,78,0.18)_68%,rgba(14,31,30,0.32)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,24,0.02)_0%,rgba(4,17,24,0.06)_52%,rgba(4,17,24,0.34)_100%)]" />
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

/* ───────── Problema ───────── */

function ProblemaSection() {
  const stats = [
    { value: "15%", label: "da arrecadação em atraso, em média, nos condomínios sem garantia" },
    { value: "R$ 22 mil", label: "de déficit mensal de caixa num prédio de 100 unidades" },
    { value: "8 meses", label: "é o tempo médio para recuperar uma dívida pela via judicial" },
  ];

  return (
    <section className="section-grid bg-white px-5 pb-24 pt-20 lg:px-8 lg:pb-28 lg:pt-44">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<XIcon aria-hidden="true" className="h-4 w-4" />}>
            O problema
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            A inadimplência não atrasa só um boleto. Ela trava o condomínio inteiro.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
            Quando uma unidade deixa de pagar, o rombo não some — ele é dividido
            entre os bons pagadores ou tirado do fundo de reserva. E sobra para
            o síndico a parte mais ingrata: cobrar o vizinho.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <MotionBlock key={stat.value} delay={i * 0.08}>
              <div className="border-l-2 border-[#D4A53A] bg-[#14344E]/5 p-6">
                <p className="text-4xl font-black text-[#D4A53A] md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-[#14344E]/70">{stat.label}</p>
              </div>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock delay={0.3}>
          <p className="mt-10 max-w-2xl text-base font-semibold leading-8 text-[#14344E]/80">
            O resultado: manutenção adiada, obras paradas e assembleias tensas —
            por causa de quem não paga.
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}

/* ───────── Comparativa ───────── */

function ComparativaSection() {
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A53A]/70 to-transparent" />
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
          {/* Sem garantidora */}
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

          {/* Com a NPG */}
          <MotionBlock delay={0.16}>
            <div className="glass-premium rounded-[8px] p-6">
              <div className="relative z-10">
                <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-black text-[#D4A53A]">Com a NPG Capital</h3>
                  <p className="text-4xl font-black text-[#D4A53A]">100%</p>
                </div>
                <p className="mb-5 text-xs text-white/60">da arrecadação repassada, todo mês.</p>
                <ul className="space-y-3">
                  {comNpg.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A53A]" />
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

/* ───────── Benefícios ───────── */

function BeneficiosSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Receita 100% garantida",
      text: "O condomínio recebe o valor previsto todo mês, independentemente de quem pagou.",
    },
    {
      icon: Users,
      title: "Fim da cobrança a vizinho",
      text: "A NPG assume a relação com o inadimplente. O síndico sai do papel de cobrador.",
    },
    {
      icon: TrendingUp,
      title: "Caixa previsível",
      text: "Orçamento estável o ano inteiro — dá para planejar obras e contratos com segurança.",
    },
    {
      icon: PiggyBank,
      title: "Fundo de reserva preservado",
      text: "Sem usar a reserva para tapar buracos de inadimplência. Ela fica para emergências reais.",
    },
    {
      icon: Gavel,
      title: "Sem custo de processo",
      text: "A recuperação da dívida fica por nossa conta — o condomínio não gasta com ação judicial.",
    },
    {
      icon: Zap,
      title: "Implantação sem burocracia",
      text: "Análise rápida e início simples, sem mudar de administradora nem virar a operação de cabeça para baixo.",
    },
  ];

  return (
    <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<CheckCircle2 aria-hidden="true" className="h-4 w-4" />}>
            Por que a NPG
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Previsibilidade financeira, sem a parte ingrata.
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <MotionBlock key={b.title} delay={i * 0.06}>
                <article
                  className="group h-full border-l-2 border-[#D4A53A] bg-white p-6 shadow-[0_16px_46px_rgba(20,52,78,0.08)] transition-transform duration-300 hover:translate-x-1.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#14344E] text-[#D4A53A] shadow-[0_14px_30px_rgba(20,52,78,0.18)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-[#14344E]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#14344E]/70">{b.text}</p>
                </article>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── Como Funciona ───────── */

function ComoFuncionaSection() {
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A53A]/70 to-transparent" />
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
                  <span className="text-5xl font-black text-[#D4A53A]">{step.n}</span>
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

/* ───────── Banner de confiança ───────── */

function BannerConfianca() {
  return (
    <section className="relative overflow-hidden bg-[#14344E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="trust-image absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.96),rgba(14,31,30,0.88)_62%,rgba(14,31,30,0.5))]" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<BadgeCheck aria-hidden="true" className="h-4 w-4" />}>
            Por que confiam na NPG
          </Eyebrow>
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Quem garante o caixa sustenta o condomínio inteiro.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            De obras em dia a assembleias tranquilas: quando a arrecadação é
            previsível, a gestão muda de patamar.
          </p>
          <div className="mt-9">
            <PrimaryButton href="/contato#solicitar-proposta">
              Solicitar Proposta
            </PrimaryButton>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

/* ───────── Revistas ───────── */

function RevistasSection() {
  const revistas = [
    { edition: "Edição 12", title: "Inadimplência condominial: o que mudou na lei" },
    { edition: "Edição 11", title: "Como aprovar o orçamento anual sem desgaste em assembleia" },
    { edition: "Edição 10", title: "Fundo de reserva: quanto guardar e quando usar" },
  ];

  return (
    <section className="section-grid bg-white px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<BookOpen aria-hidden="true" className="h-4 w-4" />}>
            Conteúdo
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
            Gestão condominial sem achismo.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#14344E]/72">
            Edições com análises de mercado, jurídico condominial e boas
            práticas de gestão para síndicos e administradoras.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {revistas.map((r, i) => (
            <MotionBlock key={r.edition} delay={i * 0.08}>
              <article
                className="group overflow-hidden rounded-[8px] border border-[#14344E]/10 bg-white shadow-[0_16px_46px_rgba(20,52,78,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex h-48 items-center justify-center bg-[#14344E]">
                  <BookOpen className="h-12 w-12 text-[#D4A53A]" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-[#D4A53A]">{r.edition}</p>
                  <h3 className="mt-2 text-base font-black leading-snug text-[#14344E]">
                    {r.title}
                  </h3>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>

        <MotionBlock delay={0.3} className="mt-10">
          <Link
            href="/revistas"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#D4A53A] transition-colors hover:text-[#b8882e]"
          >
            Ver todas as edições
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionBlock>
      </div>
    </section>
  );
}

/* ───────── E-books ───────── */

function EbooksSection() {
  const ebooks = [
    { title: "Guia do síndico para reduzir a inadimplência", format: "24 páginas" },
    { title: "Checklist de transição de administradora", format: "16 páginas" },
    { title: "Modelo de planejamento orçamentário anual", format: "Planilha + guia" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1F1E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.9),rgba(14,31,30,1)_55%,rgba(20,52,78,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A53A]/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <MotionBlock>
          <Eyebrow icon={<Download aria-hidden="true" className="h-4 w-4" />}>
            Materiais gratuitos
          </Eyebrow>
          <h2 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
            Guias práticos para a gestão do seu condomínio.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            Materiais aprofundados para baixar e consultar quando precisar.
            Gratuitos, em troca apenas do seu e-mail.
          </p>
        </MotionBlock>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((eb, i) => (
            <MotionBlock key={eb.title} delay={i * 0.08}>
              <article
                className="glass-premium flex h-full flex-col justify-between rounded-[8px] p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative z-10">
                  <FileText aria-hidden="true" className="mb-4 h-8 w-8 text-[#D4A53A]" />
                  <h3 className="text-lg font-black text-white">{eb.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{eb.format}</p>
                </div>
                <div className="relative z-10 mt-6">
                  <Link
                    href="/contato#formularios"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#D4A53A] transition-colors hover:text-[#E1B34C]"
                  >
                    Baixar gratuitamente
                    <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Depoimentos ───────── */

function DepoimentosSection() {
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
                <Quote aria-hidden="true" className="mb-4 h-6 w-6 text-[#D4A53A]" />
                <p className="text-base leading-7 text-[#14344E]/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#14344E]/10 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14344E] text-xs font-black text-[#D4A53A]">
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

/* ───────── CTA Final ───────── */

function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#14344E] px-5 py-24 text-white lg:px-8 lg:py-28">
      <div className="cta-image absolute inset-0 bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,52,78,0.98),rgba(14,31,30,0.9)_62%,rgba(14,31,30,0.62))]" />
      <div className="relative z-10 mx-auto max-w-[1220px] text-center">
        <MotionBlock>
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Quanto a inadimplência custa ao seu condomínio este mês?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75">
            Faça uma análise gratuita e descubra qual seria a arrecadação
            garantida do seu prédio. Sem custo e sem compromisso.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/contato#solicitar-proposta">
              Solicitar Proposta
            </PrimaryButton>
            <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Análise gratuita &middot; Resposta em até 1 dia útil &middot; Sem compromisso
          </p>
        </MotionBlock>
      </div>
    </section>
  );
}

/* ───────── Page ───────── */

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemaSection />
      <ComparativaSection />
      <BeneficiosSection />
      <ComoFuncionaSection />
      <BannerConfianca />
      <RevistasSection />
      <EbooksSection />
      <DepoimentosSection />
      <CtaFinal />
      <FloatingWhatsApp />
    </main>
  );
}
