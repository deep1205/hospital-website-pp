import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function Header({ location }) {
  const [icons, seticons] = useState(false);
  const [classna, setclassna] = useState("slider");
  return (
    <>
      <ToastContainer
        className="white text-center text-capitalize"
        position="top-center"
        closeOnClick
        draggable
        margin-top="-50px"
        zIndex="999999"
      />
      <div className="navbar">
        <img className="navbar_logo" src={logo} alt="logo" />
        <div
          className="menu-toggle"
          onClick={() => {
            var bola = !icons;
            seticons(!icons);
            if (bola === false) {
              setclassna("mid");
              setTimeout(() => {
                setclassna(bola ? "active" : "slider");
              }, 1000);
            } else {
              setclassna(bola ? "active" : "slider");
            }
          }}
        >
          {!icons ? (
            <MenuIcon style={{ fontSize: "30px", color: "white" }} />
          ) : (
            <ClearIcon style={{ fontSize: "30px", color: "white" }} />
          )}
        </div>
        <nav className={classna}>
          <div class="signupheader">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
          
        </nav>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Header;

