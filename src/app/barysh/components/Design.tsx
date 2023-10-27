import React from "react";

const Design = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Design solutions
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Survey respondents struggle to find helpful learning materials. The
          solution is to integrate relevant materials from various sources,
          including user-generated content.
        </li>
        <li>
          Learners use online platforms and AI but often can&apos;t find
          specific answers. Create a tailored learning community for tech
          enthusiasts to connect with individuals who can provide the needed
          answers.
        </li>
        <li>
          Integrate an AI Chatbot Assistant to help students in their learning
          journey.
        </li>
        <li>
          Students lack collaboration due to skill level concerns. Implement
          open-source forums and collaboration features like blogs and forums.
        </li>
        <li>
          These problems are interconnected, leading to a single solution:
          creating a specialized learning community platform for tech enthusiast
          students to guide them in their learning journey.
        </li>
      </ul>
    </>
  );
};

export default Design;
