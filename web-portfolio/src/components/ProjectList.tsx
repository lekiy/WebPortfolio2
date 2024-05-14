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
  const rotationOffset = 5;
  const xOffset = 6;
  const yOffset = 1;

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
          rotation={
            projectData.length * -rotationOffset +
            index * rotationOffset * 2 +
            rotationOffset
          }
          xOffset={
            projectData.length * -xOffset + index * xOffset * 2 + xOffset
          }
          yOffset={yOffset * index * 0.2 + 13}
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
