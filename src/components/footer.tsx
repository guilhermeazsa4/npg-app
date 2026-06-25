import Image from "next/image";
import Link from "next/link";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1F1E] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-[1220px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Image
              src="/assets/logoFull.png"
              alt="NPG Capital"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Arrecadação garantida e inadimplência por nossa conta — para o seu
              condomínio receber todo mês.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-black text-white">Institucional</h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <Link href="/a-empresa" className="text-white/50 transition-colors hover:text-white">
                  A Empresa
                </Link>
                <Link href="/contato" className="text-white/50 transition-colors hover:text-white">
                  Contato
                </Link>
                <Link href="/contato#formularios" className="text-white/50 transition-colors hover:text-white">
                  Serviços
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black text-white">Conteúdo</h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <Link href="/revistas" className="text-white/50 transition-colors hover:text-white">
                  Revistas
                </Link>
                <Link href="/e-books" className="text-white/50 transition-colors hover:text-white">
                  E-books
                </Link>
                <Link href="/seu-boleto" className="text-white/50 transition-colors hover:text-white">
                  Seu Boleto
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-black text-white">Contato</h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/50">
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                  {CONTACT.email}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {CONTACT.phone}
                </a>
                <p>{CONTACT.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {year} NPG Capital. CNPJ {CONTACT.cnpj}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
