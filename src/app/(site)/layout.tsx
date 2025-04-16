import SiteFooter from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
