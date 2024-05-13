import { useCallback } from "react";

type ProjectType = {
  title: string;
  description: string;
  images: string[];
  onClick: (e) => void;
};

function ProjectCard({ title, description, images, onClick }: ProjectType) {
  return (
    <div onClick={onClick} className="project-card">
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
