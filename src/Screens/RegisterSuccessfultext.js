import React from 'react'
import Headerverify from "../Components/Headerverify.js";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterSuccessfultext = () => {
  const history=useHistory();
  const loginsuccessfully=()=>{
    toast.success("Welcome to Priority Pulse,Please login");
    history.push("/login")
  }
    return (
      <>
        <Headerverify />
        <div id="registersuccessfulltext">
          <h1>
            HospitalName with H-Code registered successfully in Priority Pulse
            <br />
            <div className="myloginbuttoninregistertext">
              <Button
                variant="contained"
                size="large"
                onClick={loginsuccessfully}
                style={{ backgroundColor: "orangered", color: "#FFFFFF" }}
              >
                Login
              </Button>
            </div>
          </h1>
        </div>
      </>
    );
}

export default RegisterSuccessfultext
