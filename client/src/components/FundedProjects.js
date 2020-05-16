import React, { useEffect } from "react";
import axios from "../utils/axiosWithAuth";

export default function FundedProjects() {
  
  const funder_id = localStorage.getItem("user_id")

  useEffect(() => {
    axios() 
      .get(`/funders/projects/${funder_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);
  return <>funded projects</>;
}
