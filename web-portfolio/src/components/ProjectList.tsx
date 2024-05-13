import {
  ReactEventHandler,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

function ProjectList() {
  const [targetCard, setTargetCard] = useState<string>("");

  const handleCardClick = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTargetCard(e.currentTarget.id);
  }, []);

  const projectCards = useMemo(() => {
    console.log(projectData.length);
    return projectData.map((project, index) => {
      return (
        <ProjectCard
          key={project.title}
          {...project}
          onClick={handleCardClick}
          isSelected={project.title === targetCard}
          rotation={projectData.length * -2 + index * 4 + 2}
          xOffset={projectData.length * -6 + index * 12 + 6}
        ></ProjectCard>
      );
    });
  }, [handleCardClick, targetCard]);

  return (
    <div className="project-container">
      <div className="project-list">{projectCards}</div>
    </div>
  );
}

export default ProjectList;
