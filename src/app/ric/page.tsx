import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import PortfolioHeading from "@/components/portfolio/PortfolioHeading.tsx";
import { studies } from "@/lib/members";
import Stack from "./components/Stack";
import Study from "./components/Study";

export const metadata: Metadata = {
  title: "Bens | Ric",
};

const RicPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-xl flex flex-col gap-6">
        <PortfolioHeading
          author={studies[2].author}
          image={studies[2].image}
          role={studies[2].role}
          bio={studies[2].bio}
          about={studies[2].about}
          cv={studies[2].cv}
        />
        <Stack />
        <Study />
      </div>
    </PageWrapper>
  );
};

export default RicPage;
