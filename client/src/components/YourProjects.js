import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

import Project from "./Project";

export default function YourProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const creator_id = localStorage.getItem("user_id");
  useEffect(() => {
    axios()
      .get(`/projects/creator/7`)
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);
  if (projects.length !== 0) {
    return (
      <>
        your projects
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </>
    );
  } else {
    return (
      <>
        {error}
        <button>create a project</button>
      </>
    );
  }
}
