import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import TaskList from "./components/TaskList"; // TaskList component is assumed to be in ./components directory
import TaskDetail from "./components/TaskDetail"; // TaskDetail component is assumed to be in ./components directory

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/task/:id" component={TaskDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
