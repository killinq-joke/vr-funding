import React from "react";

const Project = ({ project }) => {
  const user_id = Number(localStorage.getItem("user_id"));

  return (
    <>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <p>category: {project.category}</p>
      <img alt="" src={project.img_url} />
      <p>
        funding: {project.funding} / {project.funding_goal}
      </p>
      {user_id === project.creator_id ? null : <button>fund</button>}
    </>
  );
};

export default Project;
