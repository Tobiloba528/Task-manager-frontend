import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthNav from "../components/AuthNav";
import Footer from "../components/Footer";
import TaskList from "./TaskList";
import CreateTaskScreen from "./CreateTaskScreen";
import ProfileScreen from "./ProfileScreen";

const MainScreen = () => {
  return (
    <div>
      <AuthNav />
      <Switch>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path="/create-task">
          <CreateTaskScreen />
        </Route>
        <Route path="/tasks">
          <TaskList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default MainScreen;
