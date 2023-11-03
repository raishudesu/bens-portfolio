import ContentHeader from "@/components/portfolio/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import { header, statementContent, summaryContent } from "../components/data";
import ProjectSummary from "@/components/portfolio/ProjectSummary";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import Mapping from "./components/Mapping";
import Design from "./components/Design";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import UserFlow from "@/components/portfolio/UserFlow";
import userflow from "../../../assets/barysh/userflow.jpg";
import { Metadata } from "next";
import Results from "./components/Results";

export const metadata: Metadata = {
  title: "Bens | SITEX",
};

const CaseStudyPage = () => {
  return (
    <PageWrapper>
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
        <UserFlow src={userflow} />
        <Visual />
        <Prototype />
        <Results />
      </div>
    </PageWrapper>
  );
};

export default CaseStudyPage;
