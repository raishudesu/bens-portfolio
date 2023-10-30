"use client";

import { Button } from "./ui/button";

const ExploreBtn = () => {
  function exploreScroll() {
    const element = document.getElementById("team") as HTMLElement;
    element.scrollIntoView();
  }

  function contactScroll() {
    const element = document.getElementById("contact") as HTMLElement;
    element.scrollIntoView();
  }

  return (
    <>
      <Button onClick={exploreScroll} className="self-stretch md:self-start">
        Explore
      </Button>
      <Button
        variant={"outline"}
        onClick={contactScroll}
        className="self-stretch md:self-start"
      >
        Contact us
      </Button>
    </>
  );
};

export default ExploreBtn;
