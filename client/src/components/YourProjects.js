import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

import Project from "./Project";

export default function YourProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const creator_id = localStorage.getItem("user_id");
  useEffect(() => {
    axios()
      .get(`/projects/creator/${creator_id}`)
      .then((res) => {
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
        <button>create a project</button>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </>
    );
  } else {
    return (
      <>
        you have no project currently
        <button>create a project</button>
      </>
    );
  }
}
