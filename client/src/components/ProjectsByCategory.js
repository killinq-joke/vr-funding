import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axiosWithAuth";

export default function ProjectsByCategory() {
  const { category } = useParams();
  const [error, setError] = useState()
  console.log(category);
  useEffect(() => {
    axios()
      .get(`/projects/category/${category}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  }, []);
return <>ProjectsByCategory {error}</>;
}
