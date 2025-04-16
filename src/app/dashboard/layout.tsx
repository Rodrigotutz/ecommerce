import { AppSidebar } from "@/components/dashboard/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <header>
          <AppSidebar />
        </header>
        <main className="w-full h-screen">{children}</main>
      </SidebarProvider>
    </div>
  );
}
