import React, { useEffect, useState } from "react";
import axios from "../utils/axiosWithAuth";

export default function FundedProjects() {
  const [error, setError] = useState("")
  const funder_id = localStorage.getItem("user_id")

  useEffect(() => {
    axios() 
      .get(`/funders/projects/${funder_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);
  return <>{error}</>;
}
