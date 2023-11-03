import React from "react";

const challenges = [
  "Due to multiple features my project offers, the application has higher complexity. The solution for this is I used Next.js, a web framework that offers creation of full-stack web applications.",
  "Complexity—code redundancy. To reduce code redundancy, code composability is applied, especially in client side rendering to improve performance and code readability.",
  "Complexity—low code organization. Code composability helps code organization, and optimizing file structure. The use of versioning tools like Git also helps for this case.",
  "Complexity adds security risks. Role-based authentication is applied to separate user and admin accessibility. 3-layer validation is also applied (client, server and database). Encryption is also applied to hash and encrypt sensitive data such as passwords.",
];

const Results = () => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Results/Conclusions
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The first phase of this case study concludes that most of the students
        (potential users) struggles in enhancing their learning developments due
        to lack of collaboration, inconvenience in finding relevant materials,
        unavailability of mentors, and more. This project will solve this
        problem by developing a learning community platform tailored for
        technology enthusiast students.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I have encountered challenges, but I have every solution I needed. These
        include:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Integrating such features in the platform is not easy and requires a lot
        of resources. The key for the success of this integrations is
        consistency and continuous learning through development. Additionally,
        one of the challenging steps is integrating nested approaches, such as
        content interaction through comments, replies, and number of likes. This
        would require complex logic and schema optimization.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The next steps of this project are integrating functionalities, updating
        the whole application from static to dynamic. This would be the
        development of its backend code which handles all the functionalities
        and logic of its code, and the data processing through frontend code
        (client).
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I believe that learning community platforms have the potential to create
        a collaborative and supportive environment for students, providing them
        with the resources, guidance, and motivation they need to succeed in
        their studies and career development.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        As this project is based on my experience, I am deeply invested in
        developing, optimizing, and integrating it for its greater use for
        aspiring technology professionals. This would also make as a potential
        example that every student might be inspired to develop innovations such
        as this project, or collaborate with the further enhancement and
        maintenance of the application.
      </p>
    </>
  );
};

export default Results;
