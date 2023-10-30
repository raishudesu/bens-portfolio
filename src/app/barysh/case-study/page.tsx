import ContentHeader from "@/components/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import { header, statementContent, summaryContent } from "../components/data";
import ProjectSummary from "@/components/ProjectSummary";
import ProblemStatement from "@/components/ProblemStatement";
import Mapping from "./components/Mapping";
import Design from "./components/Design";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";

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
        <Visual />
        <Prototype />
      </div>
    </PageWrapper>
  );
};

export default CaseStudyPage;