import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../helpers/jwtHelper";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    try {
      setUserData(getUser());
    } catch (ex) {}
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData) return <Redirect to="/" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
