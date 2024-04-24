import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero";
import Beneficios from "@/components/beneficios";
import Cta from "@/components/cta";
import Etapas from "@/components/etapas";
import Price from "@/components/price";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Hero />
      <Beneficios />
      <Cta />
      <Etapas />
      <Price />
    </main>
  );
}
