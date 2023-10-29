import PageWrapper from "@/components/PageWrapper";
import Design from "./components/Design";
import Prototype from "./components/Prototype";
import Visual from "./components/Visual";
import { Metadata } from "next";
import Mapping from "./components/Mapping";
import ContentHeader from "@/components/ContentHeader";
import { summaryContent, header, statementContent } from "./components/data";
import ProjectSummary from "@/components/ProjectSummary";
import ProblemStatement from "@/components/ProblemStatement";

export const metadata: Metadata = {
  title: "Bens | SITEX",
};

const BaryshPage = () => {
  return (
    <PageWrapper>
      <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
        <div className="max-w-screen-lg">
          <ContentHeader
            title={header.title}
            author={header.author}
            lastUpdated={header.lastUpdated}
          />
          <ProjectSummary content={summaryContent} />
          <ProblemStatement content={statementContent} />
          <Mapping />
          <Design />
          <Visual />
          <Prototype />
        </div>
      </section>
    </PageWrapper>
  );
};

export default BaryshPage;
