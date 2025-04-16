"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings2Icon, User, LogOut, Bell, ShoppingCart } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function LoginDialog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  const fetchSession = async () => {
    const response = await fetch("/api/auth/session");
    const data = await response.json();

    if (data?.user) {
      setHasSession(true);
      setUserData(data.user);
    } else {
      setHasSession(false);
      setUserData(null);
    }
  };

  useEffect(() => {
    fetchSession();
    window.addEventListener("focus", fetchSession);
    return () => window.removeEventListener("focus", fetchSession);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Preencha todos os campos");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Credenciais inválidas");
      setLoading(false);
      return;
    }

    await fetchSession();
    toast.info("Login realizado com sucesso!");
    setOpen(false);
    router.refresh();
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    setHasSession(false);
    setUserData(null);
    router.refresh();
    toast.info("Você saiu da sua conta");
  };

  if (hasSession) {
    return (
      <DropdownMenu>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>

          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userData?.image || undefined} />
                <AvatarFallback className="bg-primary dark:bg-white dark:text-neutral-800 text-white">
                  {userData?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        </div>

        <DropdownMenuContent align="end" className="w-56">
          <div className="py-2 mb-1">
            <div className="px-2  text-sm font-medium">
              {userData?.name || "Usuário"}
            </div>
            <div className="px-2  text-xs text-gray-500 dark:text-gray-400">
              {userData?.email || ""}
            </div>
          </div>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/me" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Meu Perfil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="focus:ring-0 focus:ring-offset-0"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-gray-200 dark:border-gray-800 focus:outline-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-50">
            <Settings2Icon className="h-5 w-5" />
            Acesse sua conta
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Insira suas credenciais para continuar
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              className="text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={loading}
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-gray-700 dark:text-gray-300"
            >
              Senha
            </Label>
            <Input
              className="text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={loading}
              id="password"
              name="password"
              type="password"
              placeholder="••••••"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <Link
              href="/forget"
              className="text-sm underline text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Esqueci minha senha
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 bg-primary hover:bg-primary/90 text-white dark:bg-primary-600 dark:hover:bg-primary-600/90"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin w-4 h-4 mr-2" />
                Acessando...
              </div>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
