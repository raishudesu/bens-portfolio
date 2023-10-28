import PageWrapper from "@/components/PageWrapper";
import Design from "./components/Design";
import PStatement from "./components/PStatement";
import Prototype from "./components/Prototype";
import Role from "./components/Role";
import Visual from "./components/Visual";

const RicPage = () => {
  return (
    <PageWrapper>
      <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
        <div className="max-w-screen-lg">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            A Mental Health Support Chatbot for Information Technology Student
            in Palawan State University
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
            by: Ric Ryan Nolasco
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
            last updated: 28/10/2023
          </p>
          <Role />
          <PStatement />
          <Design />
          <Visual />
          <Prototype />
        </div>
      </section>
    </PageWrapper>
  );
};

export default RicPage;
