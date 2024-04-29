import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero";
import Beneficios from "@/components/beneficios";
import Cta from "@/components/cta";
import Etapas from "@/components/etapas";
import Price from "@/components/price";
import PriceB from "@/components/priceB";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <Hero />
      <Beneficios />
      <Cta />
      <Etapas />

      <PriceB />
      <Footer />
    </main>
  );
}
