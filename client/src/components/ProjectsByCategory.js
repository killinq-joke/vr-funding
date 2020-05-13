import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectsByCategory() {
    const {category} = useParams()
    console.log(category)
    return <>ProjectsByCategory</>;
}