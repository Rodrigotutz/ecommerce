"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import {
  LogOut,
  Settings2,
  ChevronRight,
  Users,
  Mail,
  LayoutDashboard,
  Forklift,
  Tags,
  Menu,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { Session } from "@/interfaces/session";
import { signOut } from "next-auth/react";
import { getFirstTwoNames } from "@/utils/getFirstTwoNames";
import { getInitials } from "@/utils/getInitials";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
    size: 20,
  },
  {
    title: "Produtos",
    url: "/produtos",
    icon: Forklift,
    size: 20,
  },
  {
    title: "Categorias",
    url: "/categorias",
    icon: Tags,
    size: 20,
  },
];

export function AppSidebar() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      setSession(data);
    }

    fetchSession();
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.refresh();
    toast.info("Você saiu da sua conta");
  };

  return (
    <Sidebar collapsible={"icon"} variant={"sidebar"}>
      <div className="flex flex-col h-full">
        <SidebarHeader className="shrink-0 bg-blue-500 text-white dark:bg-neutral-900">
          <Link href={"/dashboard/me"} className="hover:">
            <SidebarGroupLabel className="flex gap-2 mt-2">
              <Avatar>
                <AvatarImage src="user.png" />
                <AvatarFallback className="dark:bg-gray-700 text-blue-500 dark:text-white text-lg font-bold">
                  {session ? (
                    getInitials(session?.user?.name)
                  ) : (
                    <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div className="text-white">
                <h3 className="text-lg">
                  {session
                    ? getFirstTwoNames(session?.user?.name)
                    : "Carregando..."}
                </h3>
              </div>
            </SidebarGroupLabel>
          </Link>
          <SidebarSeparator className="mt-5 bg-blue-400/50 dark:bg-neutral-800" />
          <SidebarTrigger className="absolute top-1 right-1 flex items-center gap-2">
            <Menu /> Fechar Sidebar
          </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent className="text-white bg-blue-500 dark:bg-neutral-900 overflow-y-auto flex-grow">
          <SidebarGroup>
            <SidebarGroupContent className="mt-5">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-1">
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-blue-400/30 hover:text-white dark:hover:bg-neutral-800"
                    >
                      <Link href={`/dashboard${item.url}`}>
                        <item.icon size={item.size} />
                        <span className="text-[16px]">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="text-white bg-blue-500 dark:bg-neutral-900  shrink-0">
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className=" hover:text-white cursor-pointer hover:bg-blue-400/40 hover:dark:bg-neutral-800">
                    <Settings2 /> Definições
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <Link href={"/dashboard/definicoes"}>
                        <SidebarMenuButton className=" hover:text-white cursor-pointer hover:bg-blue-400/40 hover:dark:bg-neutral-800">
                          <BsGear size={20} /> Geral
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Link href={"/dashboard/definicoes/email"}>
                        <SidebarMenuButton className=" hover:text-white cursor-pointer hover:bg-blue-400/40 hover:dark:bg-neutral-800">
                          <Mail size={20} /> Email
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Link href={"/dashboard/definicoes/usuarios"}>
                        <SidebarMenuButton className=" hover:text-white cursor-pointer hover:bg-blue-400/40 hover:dark:bg-neutral-800">
                          <Users size={20} /> Usuarios
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className=" hover:text-white cursor-pointer hover:bg-blue-400/40 hover:dark:bg-neutral-800"
                onClick={handleLogout}
              >
                <LogOut /> Sair
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
