import React from 'react'
import HospitalList from '../Components/GoogleMaps/Hospitallist'
import Map from "../Components/GoogleMaps/MyGoogleMapforTrackAmbulance"
import Header from "../Components/Header"
const Trackambulance = () => {
  return (
    <div>
      <Header location="trackambulance" />
      <HospitalList />
      {/* <Map /> */}
    </div>
  );
}

export default Trackambulance
