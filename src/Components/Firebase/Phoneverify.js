import React, {useEffect } from "react";
import "../../App.css"
import firebaseConfig from "./firebaseConfig";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import "../../Css/Firebase.css"

function Otp() {
 
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const uiConfig = {
      signInSuccessUrl: "https://prioritypulse-hospitalsite.herokuapp.com/verify",
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN",
        },
      ],
      // callbacks: {
      //   signINSuccessWithAuthResult: function (authResult, redirectUrl) {

      //   }
      callbacks: {
        signInSuccess: (user) => {
          const userDetails = {
            number: user.phoneNumber.slice(3, 13),
          };
          fetch("/auth/usersignin", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              number: userDetails.number,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem("jwt", JSON.stringify(result));
            })
            .catch((error) => console.log(error));
        },
      },
    };
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start("#firebaseui-auth-container", uiConfig);
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }

    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start("#firebaseui-auth-container", uiConfig);
    // componentDidMount()
  }, []);

  // async function componentDidMount(){
  //   fetch('/auth/usersignin',{
  //     method:'post',
  //     headers:{
  //         "Content-Type":"application/json"
  //     },body:JSON.stringify({
  //         number:8290292841
  //     })
  // }).then(res=>res.json()).then(result=>{
  //   console.log(result)
  // }).catch(error=> console.log(error))
  // }

  return (
    <div className="outer-firebase">
      <div id="firebaseui-auth-container" className="firebase-input"></div>
    </div>
  );
}
export default Otp;






