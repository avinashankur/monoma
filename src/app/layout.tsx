import "/src/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provide";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/mobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monoma | Home",
  description: "The Monomoa App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <MobileMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
