import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

export default function YourProjects() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState("")
  const creator_id = localStorage.getItem("user_id")
  useEffect(() => {
    axios()
      .get(`/projects/creator/6`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, [])
  if (projects.length !== 0) {
    return <>your projects</>;
  } else {
    return (
      <>
        {error}
        <button>create a project</button>
      </>
    );
  }
  
}
