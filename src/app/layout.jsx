import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portail Officiel du Gouvernement du Niger",
  description: "Portail Officiel du Gouvernement du Niger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
