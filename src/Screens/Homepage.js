import React, { useState, useEffect, createRef } from "react";
import Header from "../Components/Header.js";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import MyGoogleMap from "../Components/GoogleMaps/MyGoogleMap.js";
import "../Css/Home.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const delay = require("delay");

const Homepage = () => {
  const map = createRef();

  const [drivers, setDriver] = useState([
    {
      name: "Test Driver 1",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://server.prioritypulse.co.in/hosp/hospitalActiveDriver", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        res.data.map((data) => {
          setDriver(res.data);
        });
        // setDriver([...drivers, { name: data.name, id: data._id }])
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://server.prioritypulse.co.in/hosp/getUsers", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setphone(res.data);
      });
  }, []);

  const [phone, setphone] = useState([
    {
      location: {
        coordinates: [],
      },
      _id: "",

      phoneNumber: 0,
      __v: 0,
    },
  ]);

  const [user, setUser] = useState({
    name: "",
    pcase: "",
    age: "",
    patientNo: "",
    guardianNo: "",
    casePrior: "",
    pickedBy: "",
    pickUplocation: {
      coordinates: [0, 0],
    },
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "pickedBy") {
      let n = drivers.findIndex((re) => {
        return re.name === value;
      });
      // console.log(n);
      if (n === -1) {
        setUser({ ...user, [name]: "none" });
      } else {
        setUser({ ...user, [name]: drivers[n] });
      }
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      pcase: user.pcase,
      age: user.age,
      patientNo: Number(user.patientNo),
      guardianNo: Number(user.guardianNo),
      casePrior: user.casePrior,
      pickedBy: user.pickedBy,
      pickUplocation: {
        coordinates: [0, 0],
      },
    };
    axios
      .post("https://server.prioritypulse.co.in/hosp/createRide", newUser, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(async (res) => {
        toast.success("Form Submitted Sucessfully");
        await delay(5000);
        console.log("Form Submitted SuccessFully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.status);
        console.log(err.error);
        toast.error("Please fill Form correctly");
        console.log(`Please Fill form Correctly`);
      });
  };

  return (
    <>
      <Header location="home" />
      <br />
      <div className="fdiv">
      <div id="googlemaphomepagekiposition" className="main-wrapper">
        <MyGoogleMap ref={map} />
      </div>
      <div id="patientformkiposition">
        <div className="loginp-page">
          <div className="formp">
            <div className="loginp">
              <div className="loginp-header">
                <h4 className="myformheadertext">Patient Form</h4>
                <p style={{ margin: "-5px 0" }} className="myformheadertext">
                  Welcome to Priority Pulse
                </p>
                <p>Your Pulse,Our Priority</p>
              </div>
            </div>
            <form className="loginp-form" method="POST">
              <input
                name="name"
                type="text"
                placeholder="Patient Name"
                autoComplete="on"
                id="text"
                onChange={handleInputs}
              />
              <input
                name="pcase"
                type="text"
                placeholder="Patient Case"
                autoComplete="on"
                id="text"
                onChange={handleInputs}
              />
              <input
                name="age"
                type="text"
                placeholder="Age"
                autoComplete="on"
                id="number"
                onChange={handleInputs}
              />
              <input
                name="patientNo"
                type="text"
                placeholder="Patient no."
                autoComplete="on"
                id="address"
                onChange={handleInputs}
              />
              <input
                name="guardianNo"
                type="text"
                placeholder="Guardian No."
                autoComplete="off"
                id="text"
                list="phoneList"
                onChange={handleInputs}
              />
              <input
                name="casePrior"
                type="text"
                placeholder="Case priority"
                autoComplete="on"
                id="text"
                onChange={handleInputs}
              />

              <input
                name="pickedBy"
                id="search"
                type="search"
                list="mylist"
                placeholder="Driver Name"
                onChange={handleInputs}
                autoComplete="off"
              />
              <datalist id="mylist">
                {drivers.map((value) => {
                  return <option value={value.name}></option>;
                })}
              </datalist>
              <datalist id="phoneList">
                {phone.map((value) => {
                  return <option value={value.phoneNumber}></option>;
                })}
              </datalist>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Homepage;
