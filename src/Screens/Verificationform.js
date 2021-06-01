import React from 'react'
import Headerverify from "../Components/Headerverify.js";
import Button from "@material-ui/core/Button";
import FileUploader from "../Components/FileUploader";
import { useHistory } from "react-router-dom";
import ReactImageuploader from "../Components/ReactImageuploader"
import { toast } from "react-toastify";
import "../Css/VerifyUrl.css"
import Phoneverify from "../Components/Firebase/Phoneverify.js"
import "react-toastify/dist/ReactToastify.css";
const delay = require("delay");

const Verificationform = () => {
       const history=useHistory();
      const mytoast = () => {
        toast.success("Form Submitted Successfully");
      };
       const mycodegenerate = () => {
         toast.success("Code Generated Successfully");
       };
       const register = (async() => { 
         toast.success("Registered Successfully");
         await delay(5000);
         history.push("/registersuccessfull")
       });
    return (
      <>
        <Headerverify />

        <hr />
        <div id="verifypage">
          <div>
            <h1 className="stepsname"> Step 1 : Fill the Form</h1>
            <br />
          </div>

          <div className="loginverify-page">
            <div className="formp">
              <div className="loginp">
                <div className="loginp-header">
                  <div className="loginp-header">
                    <h2 style={{ color: "red" }} className="myformheadertext">
                      Welcome to Priority Pulse
                    </h2>
                    <p style={{ color: "blue", margin: "5px" }}>
                      Your Pulse,Our Priority
                    </p>
                    <h2 className="myformheadertext">Verification Form </h2>
                    <br />
                  </div>
                  <br />
                  {/* <p className="myformheadertextp">Welcome to Priority Pulse</p>
                <p>Your Pulse,Our Priority</p> */}
                </div>
              </div>
              <form className="loginp-form">
                <input type="text" placeholder="Address" autoComplete="on" />
                <input type="text" placeholder="State" autoComplete="on" />
                <input type="text" placeholder="District" autoComplete="on" />
                <input type="text" placeholder="City" autoComplete="on" />
                <input type="text" placeholder="Pincode" autoComplete="on" />
                <input type="text" placeholder="Landmark" autoComplete="on" />
                <input
                  type="text"
                  placeholder="Street name"
                  autoComplete="on"
                />
                <input type="text" placeholder="D no." autoComplete="on" />

                <Button variant="contained" onClick={mytoast}>
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <hr class="animated" />

          <h1 className="stepsname">
            Step 2 : Hospital Certificate verification{" "}
          </h1>
          <FileUploader />
          <hr class="animated" />

          <h1 className="stepsname"> Step 3 : Phone Verification </h1>
          <div className="myfirebase">
            <Phoneverify />
          </div>
          <hr class="animated" />

          <h1 className="stepsname"> Step 4 : Upload Images </h1>
          {/* <FileUploader /> */}
          <div className="reactimageuploader">
            <ReactImageuploader />
          </div>
          <hr class="animated" />
          <h1 className="stepsname"> Step 5 : Generating Code </h1>
          <br />
          <div className="loginverify-page">
            <div className="formp">
              <div className="loginp">
                <div className="loginp-header">
                  <h3 style={{ color: "red" }} className="myformheadertext">
                    Welcome to Priority Pulse
                  </h3>
                  <p style={{ color: "blue", margin: "5px" }}>
                    Your Pulse,Our Priority
                  </p>
                  <h3 className="myformheadertext">Code Generation</h3>
                  <br />
                </div>
              </div>
              <form className="loginp-form">
                <input type="text" placeholder="H-code" autoComplete="on" />
                <input
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                />

                <Button variant="contained" onClick={mycodegenerate}>
                  Generated
                </Button>
              </form>
            </div>
            <hr />
          </div>

          <div className="registerbutton">
            <Button
            
              variant="contained"
              size="large"
              onClick={register}
              style={{
                backgroundColor: "red",
                color: "#FFFFFF",
                marginBottom: "15px",
              }}
            >
              Registered
            </Button>
          </div>
        </div>
      </>
    );
}

export default Verificationform
