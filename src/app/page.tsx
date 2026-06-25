import { FloatingWhatsApp } from "@/components/ui";
import {
  Hero,
  ProblemaSection,
  ComparativaSection,
  BeneficiosSection,
  ComoFuncionaSection,
  BannerConfianca,
  RevistasSection,
  EbooksSection,
  DepoimentosSection,
  CtaFinal,
} from "@/components/sections";

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
