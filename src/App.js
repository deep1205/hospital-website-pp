import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Screens/Homepage";
import Login from "./Screens/Login.js";
import Pastride from "./Screens/Pastride.js";
import Profile from "./Screens/Profile.js";
import Verificationform from "./Screens/Verificationform.js";
import Footer from "./Components/Footer"
import Signup from "./Screens/Signup.js";
import Trackambulance from "./Screens/Trackambulance.js";
import RegisterSuccessfultext from "./Screens/RegisterSuccessfultext.js";

import { GuardProvider, GuardedRoute } from 'react-router-guards';

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem("token")!=null) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

const App = () => {
  return (
    <>
      
<GuardProvider guards={[requireLogin]} >
<Switch>
        <GuardedRoute path="/home" exact component={Homepage} meta={{ auth: true }} />
        <GuardedRoute path="/pastride" exact component={Pastride} meta={{ auth: true }} />
        <GuardedRoute path="/trackambulance" exact component={Trackambulance} meta={{ auth: true }} />
        <GuardedRoute path="/profile" exact component={Profile} meta={{ auth: true }} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/verify">
          <Verificationform />
        </Route>
        <Route exact path="/registersuccessfull">
          <RegisterSuccessfultext />
        </Route>
        
        <Redirect to="/signup" />
</Switch>
</GuardProvider>
      <Footer />
    </>
  );
};

export default App;
