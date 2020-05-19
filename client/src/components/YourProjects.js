import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

import Project from "./Project";
import CreateFormLabel from "../utils/CreateFormLabel";

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
          <CreateFormLabel label="Name" />
          <CreateFormLabel label="Description" />
          <CreateFormLabel label="Image" />
          <CreateFormLabel label="Category" />
          <CreateFormLabel label="Funding Goal" />
        </form>
      ) : null}
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </>
  );
}
