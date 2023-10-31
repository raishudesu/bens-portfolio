import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import PortfolioHeading from "@/components/portfolio/PortfolioHeading.tsx";
import { studies } from "@/lib/members";
import Study from "./components/Study";
import Stack from "./components/Stack";

export const metadata: Metadata = {
  title: "Bens | Raven",
};

const RavenPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-lg flex flex-col gap-6">
        <PortfolioHeading
          author={studies[3].author}
          image={studies[3].image}
          role={studies[3].role}
          bio={studies[3].bio}
          about={studies[3].about}
          cv={studies[3].cv}
        />
        <Stack />
        <Study />
      </div>
    </PageWrapper>
  );
};

export default RavenPage;
