// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Sistema de Produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="transition-colors duration-200">
        <ThemeProvider>
          <ThemeToggle />
          <Toaster richColors position="bottom-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
