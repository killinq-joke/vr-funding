import React, { useEffect } from "react";
import axios from "../utils/axiosWithAuth";

export default function YourProjects() {
  const creator_id = localStorage.getItem("user_id")
  useEffect(() => {
    axios()
      .get(`/creator/${creator_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return <>your projects</>;
}
