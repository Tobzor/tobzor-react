// Dependencies
import React from "react";
import ReactMarkdown from "react-markdown";
import { RouteComponentProps } from "react-router-dom";
// Locals
import useGetMarkdown from "../hooks/useGetMarkdown";
import ProjectLink from "../lists/projectlists/ProjectLink";
type ProjectParams = {
    projectId: string;
};

type Project = RouteComponentProps<ProjectParams>;

const Project: React.FC<Project> = ({ match }) => {
    const source = useGetMarkdown(match.params.projectId);

    // return <div dangerouslySetInnerHTML={{ __html: source }} />;

    return (
        <div>
            <ProjectLink url="/" text="Go back" />
            <ReactMarkdown source={source} renderers={{ image: Image }} />
        </div>
    );
};

export default Project;

const Image = (props: any) => {
    return <img style={{ maxWidth: "100%" }} alt="" {...props} />;
};
