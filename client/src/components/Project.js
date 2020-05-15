import React from "react";
import { Link, useParams } from "react-router-dom";

const Project = ({ project }) => {
  const user_id = Number(localStorage.getItem("user_id"));
  const { project_id } = useParams();

  return (
    <>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <p>category: {project.category}</p>
      <img alt="" src={project.img_url} />
      <p>
        funding: {project.funding} / {project.funding_goal}
      </p>
      {user_id === project.creator_id ||
      project.id === Number(project_id) ? null : (
        <Link to={`/fund/${project.id}`}>fund</Link>
      )}
    </>
  );
};

export default Project;
