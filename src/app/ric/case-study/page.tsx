import ContentHeader from "@/components/portfolio/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import { header, statementContent, summaryContent } from "../components/data";
import ProjectSummary from "@/components/portfolio/ProjectSummary";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import Mapping from "./components/Mapping";
import Design from "./components/Design";
import UserFlow from "./components/UserFlow";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import { Metadata } from "next";
import Results from "./components/Results";
import StudyNav from "@/components/StudyNav";

export const metadata: Metadata = {
  title: "Bens | V-Companion",
};

const CaseStudyPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-xl flex items-start gap-6">
        <aside className="hidden md:flex flex-col gap-4">
          <StudyNav />
        </aside>
        <article>
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
          <Results />
        </article>
      </div>
    </PageWrapper>
  );
};

export default CaseStudyPage;
