"use client";

import { X as XIcon } from "lucide-react";
import { Eyebrow, MotionBlock } from "@/components/ui";

export function ProblemaSection() {
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
