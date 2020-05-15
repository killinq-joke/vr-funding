import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";
//components
import Project from "./Project";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios()
      .get("/projects")
      .then(async (res) => {
        await setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      project list
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </>
  );
}
