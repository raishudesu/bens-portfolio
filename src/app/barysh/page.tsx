import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import Projects from "./components/Projects";
import Study from "./components/Study";
import Contacts from "@/components/Contacts";
import PortfolioHeading from "./components/PortfolioHeading.tsx";
import { studies } from "@/lib/members";

export const metadata: Metadata = {
  title: "Bens | SITEX",
};

const BaryshPage = () => {
  return (
    <PageWrapper>
      <div className="max-w-screen-md flex flex-col gap-6 items-center">
        <PortfolioHeading
          author={studies[0].author}
          image={studies[0].image}
          role={studies[0].role}
          bio={studies[0].bio}
          about={studies[0].about}
        />
        <Study />
        <Projects />
        <Contacts />
      </div>
    </PageWrapper>
  );
};

export default BaryshPage;
