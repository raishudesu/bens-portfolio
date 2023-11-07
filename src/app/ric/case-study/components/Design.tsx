import { solutions } from "../../components/data";

const Design = () => {
  return (
    <>
      <h3
        id="design-solutions"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6"
      >
        Design solutions
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {solutions.map(({ design, solution }, index) => (
          <li key={index}>
            <span className="font-bold">{design}</span>: {solution}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Design;
