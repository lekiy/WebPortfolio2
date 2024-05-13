import { useCallback, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

function ProjectList() {
  const handleCardClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("exposed");
    console.log(e.target);
  }, []);

  const projectCards = useMemo(() => {
    return projectData.map((project) => {
      return (
        <ProjectCard
          key={project.title}
          {...project}
          onClick={handleCardClick}
        ></ProjectCard>
      );
    });
  }, [handleCardClick]);

  return <div className="project-list">{projectCards}</div>;
}

export default ProjectList;
