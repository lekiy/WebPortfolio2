import { useCallback, useMemo } from "react";

type ProjectType = {
  key: string;
  title: string;
  description: string;
  images: string[];
  onClick: (e) => void;
  isSelected: boolean;
  rotation: number;
  xOffset: number;
  yOffset: number;
};

function ProjectCard({
  title,
  description,
  images,
  onClick,
  isSelected,
  rotation,
  xOffset,
  yOffset,
}: ProjectType) {
  return (
    <div
      style={{
        translate: isSelected
          ? `${-xOffset * 1.275}rem ${yOffset - 25}rem`
          : `${-xOffset}rem ${yOffset}rem`,
        rotate: isSelected ? "0deg" : `${rotation}deg`,
        scale: isSelected ? "1.2 1.2" : "0.8 0.8",
        pointerEvents: isSelected ? "none" : "inherit",
      }}
      id={title}
      onClick={onClick}
      className={"project-card"}
    >
      <div className="project-card-content">
        <h2 className="project-title">{title}</h2>
        <img
          src="src\assets\SampleScreenShot.png"
          className="project-thumbnail"
        />
        <h5 className="project-tags">-Test tag -test tag2</h5>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
