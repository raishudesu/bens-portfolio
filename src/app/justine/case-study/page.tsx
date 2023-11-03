import ContentHeader from "@/components/portfolio/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import ProblemStatement from "@/components/portfolio/ProblemStatement";
import ProjectSummary from "@/components/portfolio/ProjectSummary";
import React from "react";
import Mapping from "./components/Mapping";
import Design from "./components/Design";
import UserFlow from "@/components/portfolio/UserFlow";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import { header, statementContent, summaryContent } from "../components/data";
import userflow from "../../../assets/justine/userflow.jpg";
import { Metadata } from "next";
import Results from "./components/Results";

export const metadata: Metadata = {
  title: "Bens | Dentabook",
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
