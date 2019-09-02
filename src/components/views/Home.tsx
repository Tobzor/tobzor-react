// Dependencies
import React from "react";
import { Route, RouteProps } from "react-router-dom";
// Locals
import PageWrapper from "../wrappers/PageWrapper";
import Header from "../header/Header";
import ProjectList from "../lists/projectlists/ProjectList";
import Project from "../template/Project";

type Home = {
    match: RouteProps;
};

const Home: React.FC<Home> = ({ match }) => {
    return (
        <PageWrapper>
            <Header />
            <Route path={`/:projectId`} component={Project} />
            <Route exact path={match.path} component={ProjectList} />
        </PageWrapper>
    );
};

export default Home;
