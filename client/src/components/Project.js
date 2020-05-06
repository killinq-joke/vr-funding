import React from "react"

const Project = ({project}) => {
    return (
      <>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <p>category: {project.category}</p>
        <img alt="" src={project.img_url}/>
      </>
    );
}

export default Project