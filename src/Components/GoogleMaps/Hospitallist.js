import React, { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/Hospitalist.css";
import Map from "./MyGoogleMapforTrackAmbulance";

const HospitalList = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [rides, setdata] = useState([]);
  const toggle = () => setOpen(!dropdownOpen);
  useEffect(() => {
    axios
      .get("https://server.prioritypulse.co.in/hosp/hospitalActiveRides", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        const arr = data.map((data) => {
          return {
            name: data["pickedBy"].name,
            driverno: data["pickedBy"].mobileNo,
            pcase: data.pcase,
            rideid: data.RideId,
            _id:data['pickedBy']._id,
            patientPolyline:data.patientPolyline
          };
        });
        setdata(arr);
      });
  }, []);


  const [hospital, setHospital] = useState({
    name: "",
    pcase: "",
    rideid: "",
    driverno: "",
    _id:'',
    patientPolyline:""
  });

  return (
    <div>
      <ButtonDropdown
        direction="right"
        isOpen={dropdownOpen}
        toggle={toggle}
        style={{ zIndex: 10 }}
      >
        <DropdownToggle
          caret
          id="mytogglebutton"
        >
          {hospital.name}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu" positionFixed={true}>
          <div>
            <div style={{ textAlign: "center", color: "blue" }}>
              <h5>
                Present Rides
                <span
                  className="dropdown-span"
                  style={{ marginLeft: "70px", color: "red" }}
                  onClick={() => setOpen(!dropdownOpen)}
                >
                  &times;
                </span>
              </h5>
              <hr />
            </div>
            {rides.map((val, id) => {
              return (
                <div>
                  <div key={id}>
                    {/* <DropdownItem onClick={() => setHospital({ name: val.name,rating:val.rating, description: val.description})}><h5>{val.name}</h5></DropdownItem> */}
                    <DropdownItem
                      onClick={() => {
                        // setHospitalCenter(val);
                        setHospital({
                          name: val.name,
                          pcase: val.pcase,
                          rideid: val.rideid,
                          driverno: val.driverno,
                          _id:val._id,
                          patientPolyline:val.patientPolyline 
                        });
                      }}
                    >
                      <div style={{ diplay: "flex", flexDirection: "row" }}>
                        <h6>{val.name}</h6>
                        <h6>{val.pcase}</h6>
                        <h6>{val.driverno}</h6>
                      </div>
                    </DropdownItem>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </DropdownMenu>
      </ButtonDropdown>
      <Map 
      _id={hospital._id} 
      polyline={hospital.patientPolyline} />
      {hospital.name !== "" ? (
        <div className="card" style={{ margin: "-30px 0" }}>
          <h4 style={{ margin: "3px 0" }}>&nbsp;Ride details</h4>
          <div className="card-body">
            <div style={{width:"50%",textAlign:"justify"}}>
            <p style={{fontSize:20}}>
              Name:{hospital.name}
            </p>
            </div>
            <div style={{width:"50%",textAlign:"justify"}}>
            <p style={{fontSize:20}}>
            Case:{hospital.pcase}
            </p>
            </div>
            <div style={{width:"50%",textAlign:"justify"}}>
            <p style={{fontSize:20}}>
            RideId:{hospital.rideid}
            </p>
            </div>
            <div style={{width:"50%",textAlign:"justify"}}>
            <p style={{fontSize:20}}>
            Driver No:{hospital.driverno}
            </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HospitalList;
