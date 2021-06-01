import React from "react";
import "../App.css";
import logo from "../images/logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ location }) {
  // const [icons, seticons] = useState(false);
  // const [classna, setclassna] = useState("slider");
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
      <div className="navbar" style={{display:'flex',justifyContent:'center'}}>
        <img className="navbar_logo" src={logo} alt="logo" />
        {/* <div
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
          {/* {!icons ? (
            <MenuIcon style={{ fontSize: "30px", color: "white" }} />
          ) : (
            <ClearIcon style={{ fontSize: "30px", color: "white" }} />
          )} */}
        
        {/* <nav className={classna}>
          <a href="/#"></a>
          <a href="/#"></a>
          <a href="/#"></a>
          <a href="/#"></a>
          <a href="/#"></a>
          <a href="/#"></a>
          {location === "home" && <div className="animation start-home" />}
          {location === "trackambulance" && (
            <div className="animation start-user" />
          )}
          {location === "pastride" && (
            <div className="animation start-hospital" />
          )}
          {location === "profile" && (
            <div className="animation start-aboutus" />
          )}
          {location === "login" && (
            <div className="animation start-collaborate" />
          )}
          {location === "signup" && <div className="animation start-login" />}
        </nav> */}
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Header;

