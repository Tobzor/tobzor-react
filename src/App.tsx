// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Locals
import Home from "./components/views/Home";
import About from "./components/views/About";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
