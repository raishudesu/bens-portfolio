"use client";

import MyCard from "./MyCard";
import { studies } from "@/lib/members";

const Team = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {studies.map(({ title, author, image, link }, index) => (
        <MyCard
          key={index}
          title={title}
          author={author}
          image={image}
          link={link}
        />
      ))}
    </div>
  );
};

export default Team;
