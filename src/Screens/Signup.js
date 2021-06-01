import React from "react";
import Headersignup from "../Components/Headersignup.js";
import Whyusnew from "../Components/Whyusnew";
import { useHistory, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/Signupform&Loginform.css";
const delay = require("delay");

const Signup = () => {
  const history = useHistory();

  const mytoast = async () => {
    toast.success(
      "A link has been sent to your email.You have to proceed few more steps of verification via link sent in the mail"
    );

    await delay(5000);
    history.push("/verify");
  };

  return (
    <div>
      <Headersignup location="signup" />

      <div className="loginsignup-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h4 style={{ marginTop: "20px" }} className="myformheadertext">
                Signup
              </h4>
              <p className="myformheadertext">Welcome to Priority Pulse</p>
              <p>Your Pulse,Our Priority</p>
            </div>
          </div>
          <form className="login-form">
            <input type="text" placeholder="Hospital Name" autoComplete="on" />
            <input
              type="password"
              placeholder="Email Address"
              autoComplete="on"
            />

            <Button variant="contained" onClick={mytoast}>
              Signup
            </Button>

            <p className="message">
              Already registered? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>
        </div>
      </div>

      <Whyusnew />
    </div>
  );
};

export default Signup;
