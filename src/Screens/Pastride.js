import React from "react";
import PastrideList from "../Components/GoogleMaps/Pastridelist"
import Map from "../Components/GoogleMaps/MyGoogleMapforTrackAmbulance";
import Header from "../Components/Header";

const Pastride = () => {
  return (
    <div>
      <Header location="trackambulance" />
      <PastrideList />
      <Map />
    </div>
  );
};

export default Pastride;
