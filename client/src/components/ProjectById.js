import React from "react";
import axios from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

export default function ProjectById() {
  const { project_id } = useParams();
  axios()
    .get(`/projects/${project_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return <>funded projects</>;
}
