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
      className="grid md:grid-cols-2 gap-6"
    >
      {studies.map(({ title, author, image, link }, index) => (
        <MyCard
          key={index}
          title={title}
          author={author}
          image={image}
          link={link}
        />
      ))}
    </motion.div>
  );
};

export default Team;
