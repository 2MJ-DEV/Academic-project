import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh", // Prend toute la hauteur de l'écran
};

const center = {
  lat: -11.651583,
  lng: 27.483273,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAvcAqstWEbpmaYxhClxkFEMfm0G5aMxPg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;