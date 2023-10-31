import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import Projects from "./components/Projects";
import Study from "./components/Study";
import PortfolioHeading from "../../components/portfolio/PortfolioHeading.tsx";
import { studies } from "@/lib/members";
import Stack from "./components/Stack";

export const metadata: Metadata = {
  title: "Bens | Barysh",
};

const BaryshPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-lg flex flex-col gap-6">
        <PortfolioHeading
          author={studies[0].author}
          image={studies[0].image}
          role={studies[0].role}
          bio={studies[0].bio}
          about={studies[0].about}
          cv={studies[0].cv}
        />
        <Stack />
        <Study />
        <Projects />
      </div>
    </PageWrapper>
  );
};

export default BaryshPage;
