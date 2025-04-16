"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  CheckCheckIcon,
  FileText,
  Mail,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const items = [
  { name: "Geral", href: "/geral" },
  { name: "Eletronicos", href: "/eletronicos" },
  { name: "Cupons", href: "/cupons" },
  { name: "Contato", href: "/contato" },
];

const handleSubmit = () => {
  toast.info("Te acalma que não tá funcionando ainda");
};

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 dark:bg-neutral-950 dark:text-white pt-16 pb-10 mt-15">
      <Separator className="bg-white/10 dark:bg-neutral-800 mb-12" />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 text-white">
        <div className="space-y-4 md:col-span-2">
          <h4 className="text-xl font-semibold">
            <span className="text-xl font-bold tracking-tight text-white dark:text-gray-50 flex items-center gap-2">
              <svg
                id="logo-88"
                width="25"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
                  fill="#fff"
                ></path>
              </svg>
              Ipsum
            </span>
          </h4>
          <p className="text-sm dark:text-neutral-400 leading-relaxed">
            Criando soluções digitais com performance, acessibilidade e
            excelência em experiência do usuário. Desenvolvimento full-stack com
            foco em Next.js e Laravel.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <ShieldCheck size={18} className="text-white dark:text-green-500" />
            <span className="text-sm dark:text-neutral-400">
              Site seguro e criptografado
            </span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm dark:text-neutral-400 mb-3">
            Receba dicas e novidades direto no seu e-mail.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-white dark:bg-neutral-800 border-none text-white placeholder:text-neutral-500 md:flex-1"
            />
            <Button
              onClick={handleSubmit}
              variant="secondary"
              className="text-blue-500 dark:text-white whitespace-nowrap"
            >
              <Send size={16} className="mr-2" />
              Inscrever-se
            </Button>
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Navegação</h4>
          <ul className="space-y-3 text-sm dark:text-neutral-400">
            {items.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center space-x-2 hover:text-white transition"
                >
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="mt-12 mb-6 text-white bg-white/10 dark:bg-neutral-900" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white dark:text-gray-50 flex items-center gap-2">
            <svg
              id="logo-88"
              width="25"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
                fill="#fff"
              ></path>
            </svg>
            Ipsum
          </span>
          <small className="text-white dark:text-neutral-500">
            &copy; {year}, Todos os direitos reservados
          </small>
        </div>
        <div className="flex space-x-4 text-white dark:text-gray-500">
          <Link
            href="/politica-de-privacidade"
            className="hover:text-white transition"
          >
            Política de Privacidade
          </Link>
          <Link href="/termos" className="hover:text-white transition">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
