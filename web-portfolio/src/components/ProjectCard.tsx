type ProjectType = {
  title: string;
  description: string;
  images: string[];
};

function ProjectCard({ title, description, images }: ProjectType) {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{images}</div>
    </div>
  );
}

export default ProjectCard;
