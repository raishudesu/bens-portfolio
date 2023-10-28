"use client";

import { Button } from "./ui/button";

const ExploreBtn = () => {
  function scroll() {
    window.scrollTo({ top: 600, behavior: "smooth" });
  }

  return (
    <Button onClick={scroll} className="self-start">
      Explore
    </Button>
  );
};

export default ExploreBtn;
