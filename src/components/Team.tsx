"use client";

import MyCard from "./MyCard";
import { studies } from "@/lib/members";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.35 }}
      className="w-full max-w-screen-xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
    >
      {studies.map(({ author, image, link }, index) => (
        <MyCard key={index} author={author} image={image} link={link} />
      ))}
    </motion.div>
  );
};

export default Team;
