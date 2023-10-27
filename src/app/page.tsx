import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <Hero />

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Our development team
      </h2>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Case studies
      </h3>

      <Team />
    </section>
  );
}
