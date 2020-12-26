import React from "react";
import { Route, Redirect } from "react-router-dom";
function AuthRoute({ auth, path, component }) {
  if (auth) {
    return <Route path={path} component={component} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthRoute;
