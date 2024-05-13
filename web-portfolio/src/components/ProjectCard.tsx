import { useCallback } from "react";

type ProjectType = {
  key: string;
  title: string;
  description: string;
  images: string[];
  onClick: (e) => void;
  isSelected: boolean;
  rotation: number;
  xOffset: number;
};

function ProjectCard({
  title,
  description,
  images,
  onClick,
  isSelected,
  rotation,
  xOffset,
}: ProjectType) {
  if (isSelected) {
    console.log("selected");
  }

  return (
    <div
      style={{ translate: `${-xOffset}rem`, rotate: `${rotation}deg` }}
      id={title}
      onClick={onClick}
      className={
        isSelected
          ? "project-card exposed"
          : "project-card unexposed wiggle-on-hover"
      }
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
