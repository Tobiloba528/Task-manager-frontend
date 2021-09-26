import React from "react";
import AuthNav from "../components/AuthNav";
import { getUser } from "../helpers/jwtHelper";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthScreen = () => {
  return getUser() ? (
    <Redirect to="/app" />
  ) : (
    <div>
      <AuthNav />
      <Switch>
        <Route path="/register">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default AuthScreen;
