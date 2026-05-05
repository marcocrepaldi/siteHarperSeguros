import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    default: "Harper Seguros | Corretora de Seguros em São Paulo - Pinheiros",
    template: "%s | Harper Seguros"
  },
  description: "A Harper Seguros é sua corretora de confiança em São Paulo. Especialistas em Seguro Auto, Residencial, Vida, Empresarial e Consórcios. Atendimento consultivo e personalizado em Pinheiros.",
  keywords: ["corretora de seguros", "seguro auto são paulo", "seguro residencial", "seguro de vida", "consórcio de imóveis", "seguro empresarial", "harper seguros", "seguros em pinheiros", "porto seguro"],
  authors: [{ name: "Harper Seguros" }],
  creator: "Harper Seguros",
  publisher: "Harper Seguros",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://harperseguros.com.br",
    title: "Harper Seguros | Corretora de Seguros em São Paulo",
    description: "Tranquilidade e segurança para você, sua família e sua empresa. Conheça nossas soluções em seguros e consórcios.",
    siteName: "Harper Seguros",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
