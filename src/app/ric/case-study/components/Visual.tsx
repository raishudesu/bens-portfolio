import { design, points } from "../../components/data";

const Visual = () => {
  return (
    <>
      <h3
        id="visual-design"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6"
      >
        Visual UI Design
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In terms of the user flow and the approach we&apos;ve taken to address
        the user&apos;s pain points, we&apos;ve recognized several significant
        concerns related to outreach, lack of acknowledgment, and the stigma
        surrounding mental health. Bearing these issues in mind, anonymity
        becomes a central focus of this project. Having a confidential and
        dependable AI-powered companion ensures that the user&apos;s
        conversations remain private and inaccessible to anyone, providing
        reassurance and peace of mind.
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Color and style
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {design.map(({ design, description }, index) => (
          <li key={index}>
            <span className="font-bold">{design}</span>: {description}
          </li>
        ))}
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">
        Solution to pain points
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {points.map(({ feature, description }, index) => (
          <li key={index}>
            <span className="font-bold">{feature}</span>: {description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Visual;
