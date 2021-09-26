import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthNav from "../components/AuthNav";
import Footer from "../components/Footer";
import TaskList from "./TaskList";
import CreateTaskScreen from "./CreateTaskScreen";
import ProfileScreen from "./ProfileScreen";
import { getUser } from "../helpers/jwtHelper";
import { getMe } from "../redux/actions/user";
import Logout from "./Logout";

const MainScreen = (props) => {

  return !getUser() ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <AuthNav />
      <Switch>
        <Route path="/app/logout">
          <Logout />
        </Route>
        <Route path="/app/profile">
          <ProfileScreen />
        </Route>
        <Route path="/app/create-task">
          <CreateTaskScreen />
        </Route>
        <Route path="/app">
          <TaskList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    loading: user.loading,
    user: user.user,
    error: user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => dispatch(getMe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
