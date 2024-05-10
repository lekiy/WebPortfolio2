import { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

function ProjectList() {
  const projectCards = useMemo(() => {
    return projectData.map((project) => {
      return <ProjectCard key={project.title} {...project}></ProjectCard>;
    });
  }, []);

  return <div>{projectCards}</div>;
}

export default ProjectList;
