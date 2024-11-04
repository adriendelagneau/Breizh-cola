import type { Metadata } from "next";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SmoothScrollProvider } from "@/hooks/SmoothScrollProvider";

export const metadata = {
  title: "Breizh Cola",
  description: "Le Cola Du Phare Ouest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden bg-secondColor">
        <SmoothScrollProvider>
          <Header />
          <main>
            {children}
            <ViewCanvas />
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
