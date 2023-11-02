const ProblemStatement = ({ content }: { content: string }) => {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
        Project statement
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{content}</p>
    </>
  );
};

export default ProblemStatement;
