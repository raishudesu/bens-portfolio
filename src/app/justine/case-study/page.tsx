import ContentHeader from "@/components/ContentHeader";
import PageWrapper from "@/components/PageWrapper";
import ProblemStatement from "@/components/ProblemStatement";
import ProjectSummary from "@/components/ProjectSummary";
import React from "react";
import Mapping from "./components/Mapping";
import Design from "./components/Design";
import UserFlow from "@/components/portfolio/UserFlow";
import Visual from "./components/Visual";
import Prototype from "./components/Prototype";
import { header, statementContent, summaryContent } from "../components/data";
import userflow from "../../../assets/justine/userflow.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bens | Dentabook",
};

const JustinePage = () => {
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
      </div>
    </PageWrapper>
  );
};

export default JustinePage;
