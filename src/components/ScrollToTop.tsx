"use client";

import { ArrowUp } from "lucide-react";
import {
  Variants,
  useAnimationControls,
  useScroll,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.2) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <motion.div
      className="fixed bottom-5 right-5 flex flex-col gap-2"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
    >
      <Button variant={"outline"} className="p-2" onClick={scrollToTop}>
        <ArrowUp color="#2563eb" />
      </Button>
    </motion.div>
  );
};

export default ScrollToTop;
