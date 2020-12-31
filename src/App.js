import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Welcome from "./Components/Welcome";
import AuthRoute from "./Components/authRoute";
import { connect } from "react-redux";
import Profile from "./Components/Profile";
function App({ authenticated }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <AuthRoute auth={authenticated} path="/home" component={Welcome} />
          <AuthRoute auth={authenticated} path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};
export default connect(mapStateToProps)(App);
