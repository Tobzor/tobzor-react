// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Locals

type ProjectLink = {
    url: string;
    text?: string;
};

const ProjectLink: React.FC<ProjectLink> = ({ text, url }) => {
    return <Link to={url}>{text || url}</Link>;
};

export default ProjectLink;
