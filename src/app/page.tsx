import Contacts from "@/components/home/Contacts";
import Hero from "@/components/home/Hero";
import PageWrapper from "@/components/PageWrapper";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <PageWrapper>
      <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
        <Hero />

        <h2
          id="team"
          className="w-full max-w-screen-xl text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          The development team
        </h2>
        <Team />
        <Contacts />
      </section>
    </PageWrapper>
  );
}
