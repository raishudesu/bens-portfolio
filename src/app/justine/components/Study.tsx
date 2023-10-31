"use client";

import ProjectSummary from "@/components/ProjectSummary";
import React from "react";
import { summaryContent } from "./data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Study = () => {
  const router = useRouter();
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
        Case study
      </h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        DentaBook: A Digital Dental Appointment Solution
      </h3>
      <ProjectSummary content={summaryContent} />
      <Button
        className="self-stretch md:self-start"
        onClick={() => router.push("/justine/case-study")}
      >
        See more
      </Button>
    </>
  );
};

export default Study;
