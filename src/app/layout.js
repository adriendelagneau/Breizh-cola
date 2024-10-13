import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import ThemeHandler from "@/components/providers/ThemeHandler";
import Navbar from "@/components/Navbar";
import TransitionBloc from "@/components/TransitionBloc";
import Menu from "@/components/Menu";
import MenuSmall from "@/components/MenuSmall";
import TestFooter from "@/components/TestFooter";


export const metadata = {
  title: "Breizh Cola",
  description: "Le Cola Du Phare Ouest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <SmoothScrollProvider>
          <ThemeHandler>
            <Navbar />
            <TransitionBloc />
            <Menu />
            <MenuSmall />
            {children}
            <TestFooter />
          </ThemeHandler>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
