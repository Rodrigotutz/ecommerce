"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { Settings2Icon } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (!email || !password) {
        toast.error("Preencha todos os campos");
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Credenciais inválidas");
        return;
      }

      toast.success("Login realizado com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-2/6 p-5 border shadow-2xl rounded-lg flex flex-col gap-5 m-5 md:m-0"
    >
      <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-500 dark:text-white">
        <Settings2Icon /> Acesse o sistema
      </h2>
      <div>
        <Label htmlFor="email" className="mb-2 text-blue-500 dark:text-white">
          Email
        </Label>
        <Input
          className="text-blue-600 dark:text-white placeholder:text-blue-300 dark:placeholder:text-white"
          disabled={loading}
          id="email"
          name="email"
          type="email"
          placeholder="joao@gmail.com"
          required
        />
      </div>
      <div>
        <Label
          htmlFor="password"
          className="mb-2 text-blue-500 dark:text-white"
        >
          Senha
        </Label>
        <Input
          className="text-blue-600 dark:text-white placeholder:text-blue-300 dark:placeholder:text-white"
          disabled={loading}
          id="password"
          name="password"
          type="password"
          placeholder="******"
          required
        />
      </div>
      <Link
        href="/forget"
        className="text-xs underline text-blue-500 dark:text-white text-end"
      >
        Esqueci a senha
      </Link>
      <Button
        type="submit"
        disabled={loading}
        className="bg-blue-500 dark:bg-white hover:bg-blue-400 dark:text-black"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin w-5 h-5 mr-2" />
            Acessando...
          </div>
        ) : (
          "Acessar"
        )}
      </Button>
    </form>
  );
}
