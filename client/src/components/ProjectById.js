import React, { useState, useEffect } from "react";
import axios from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

import Project from "./Project";

export default function ProjectById() {
  const { project_id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    axios()
      .get(`/projects/${project_id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Project key={project_id} project={project} />
    </>
  );
}
