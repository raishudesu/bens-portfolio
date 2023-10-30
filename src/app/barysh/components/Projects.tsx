import ProjectCard from "./ProjectCard";
import { projects } from "./data";

const Projects = () => {
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Relevant Projects
      </h2>
      {projects.map(({ title, summary, image, links }, index) => (
        <ProjectCard
          title={title}
          summary={summary}
          image={image}
          links={links}
          key={index}
        />
      ))}
    </>
  );
};

export default Projects;
