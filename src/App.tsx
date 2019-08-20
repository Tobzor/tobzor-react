// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Locals
import Home from "./components/views/Home";
import About from "./components/views/About";

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;
