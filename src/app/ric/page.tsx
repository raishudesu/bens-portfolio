import PageWrapper from "@/components/PageWrapper";
import Design from "./components/Design";
import Prototype from "./components/Prototype";
import Visual from "./components/Visual";
import { Metadata } from "next";
import UserFlow from "./components/UserFlow";
import Mapping from "./components/Mapping";
import ContentHeader from "@/components/ContentHeader";
import { header, statementContent, summaryContent } from "./components/data";
import ProjectSummary from "@/components/ProjectSummary";
import ProblemStatement from "@/components/ProblemStatement";

export const metadata: Metadata = {
  title: "Bens | V-Companion",
};

const RicPage = () => {
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
          <UserFlow />
          <Visual />
          <Prototype />
        </div>
      </section>
    </PageWrapper>
  );
};

export default RicPage;
