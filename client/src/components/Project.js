import React from "react"

const Project = ({project}) => {
    return (
      <>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        
      </>
    );
}

export default Project