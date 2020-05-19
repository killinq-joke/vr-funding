import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

import Project from "./Project";

export default function YourProjects() {
  const [projects, setProjects] = useState([]);
  const [creating, setCreating] = useState(false);
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

  const createProject = () => {
    setCreating(!creating);
  };

  return (
    <>
      {error || "your projects"}
      <button onClick={createProject}>create a new project</button>
      {creating ? (
        <form>
          <label>
            Name:
            <input />
          </label>
          <label>
            Description:
            <input />
          </label>
          <label>
            Image:
            <input />
          </label>
          <label>
            Category:
            <input />
          </label>
          <label>
            Funding Goal:
            <input />
          </label>
        </form>
      ) : null}
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </>
  );
}
