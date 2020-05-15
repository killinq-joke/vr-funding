import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../utils/axiosWithAuth";
//components
import Project from "./Project";

export default function ProjectsByCategory() {
  const [projects, setProjects] = useState([]);
  let category = useLocation().pathname.slice(1);
  category = category.charAt(0).toUpperCase() + category.slice(1);

  const [error, setError] = useState();
  useEffect(() => {
    axios()
      .get(`/projects/category/${category}`)
      .then((res) => {
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  }, []);

  if (error) {
    return <> {error} </>;
  } else {
    return (
      <>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </>
    );
  }
}
