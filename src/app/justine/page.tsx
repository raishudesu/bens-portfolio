import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import PortfolioHeading from "@/components/portfolio/PortfolioHeading.tsx";
import Study from "./components/Study";
import { studies } from "@/lib/members";
import Stack from "./components/Stack";

export const metadata: Metadata = {
  title: "Bens | Justine",
};

const JustinePage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-xl flex flex-col gap-6">
        <PortfolioHeading
          author={studies[1].author}
          image={studies[1].image}
          role={studies[1].role}
          bio={studies[1].bio}
          about={studies[1].about}
          cv={studies[1].cv}
        />
        <Stack />
        <Study />
      </div>
    </PageWrapper>
  );
};

export default JustinePage;
