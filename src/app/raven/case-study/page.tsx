import ContentHeader from "@/components/portfolio/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import { header, statementContent, summaryContent } from "../components/data";
import Mapping from "./components/Mapping";
import ProjectSummary from "@/components/portfolio/ProjectSummary";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import Design from "./components/Design";
import UserFlow from "@/components/portfolio/UserFlow";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import userflow from "../../../assets/raven/userflow.jpg";
import { Metadata } from "next";
import Results from "./components/Results";
import StudyNav from "@/components/StudyNav";

export const metadata: Metadata = {
  title: "Bens | Coursecrafters",
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
          <UserFlow src={userflow} />
          <Visual />
          <Prototype />
          <Results />
        </article>
      </div>
    </PageWrapper>
  );
};

export default CaseStudyPage;
