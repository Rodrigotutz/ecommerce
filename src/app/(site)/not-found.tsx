import NotFoundSvg from "@/../public/errors/404.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-5 bg-white dark:bg-neutral-900">
      <div className="w-44 md:w-[500px] text-gray-800 dark:text-gray-100">
        <Image
          src={NotFoundSvg}
          alt="Página Não Encontrada"
          width={500}
          height={300}
          className="h-auto"
        />
      </div>

      <p className="text-xl text-neutral-800 dark:text-gray-200">
        Oops, Não foi possível acessar a página
      </p>

      <Link
        href={"/"}
        className="bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-400 dark:bg-white dark:text-neutral-950 font-bold dark:hover:bg-white/70 transition-colors"
      >
        Página Inicial
      </Link>
    </div>
  );
}
