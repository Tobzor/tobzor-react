// Dependencies
import React from "react";
// Locals
import ProjectLink from "./ProjectLink";
import styles from "./ProjectList.module.css";

const routeList: string[] = ["handsy-computer-vision", "libgdx-android-game", "organisation-unit-manager", "photo-viewer"];

const ProjectList: React.FC = () => {
    return (
        <div className={styles.root}>
            {routeList.map(projectroute => {
                return <ProjectLink key={projectroute} url={projectroute} />;
            })}
        </div>
    );
};

export default ProjectList;
