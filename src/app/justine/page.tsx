import PageWrapper from "@/components/PageWrapper";
import Role from "./components/Role";
import PStatement from "./components/PStatement";
import Design from "./components/Design";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import Mapping from "./components/Mapping";
import UserFlow from "./components/UserFlow";

const JustinePage = () => {
  return (
    <PageWrapper>
      <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
        <div className="max-w-screen-lg">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            DentaBook: A Digital Dental Appointment Solution
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
            by: Justine Elorde
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground">
            last updated: 28/10/2023
          </p>
          <Role />
          <PStatement />
          <Mapping />
          <Design />
          <UserFlow />
          <Visual />
          <Prototype />
        </div>
      </section>
    </PageWrapper>
  );
};

export default JustinePage;
