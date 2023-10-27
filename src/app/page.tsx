import Team from "@/components/Team";

export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Case Studies
      </h1>
      <Team />
    </section>
  );
}
