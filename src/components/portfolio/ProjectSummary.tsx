const ProjectSummary = ({ content }: { content: string }) => {
  return (
    <>
      <h3
        id="project-summary"
        className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6"
      >
        Project summary
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{content}</p>
    </>
  );
};

export default ProjectSummary;
