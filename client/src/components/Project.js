import React from "react"

const Project = ({project}) => {
  console.log(project)
    return (
      <>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <p>category: {project.category}</p>
        <img alt="" src={project.img_url}/>
        <p>funding: {project.funding} / {project.funding_goal}</p>
      </>
    );
}

export default Project