import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import ThemeHandler from "@/components/providers/ThemeHandler";
import Navbar from "@/components/Navbar";
import MenuSmall from "@/components/MenuSmall";
import Menu from "@/components/Menu";
import TransitionBloc from "@/components/TransitionBloc";

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
          </ThemeHandler>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
