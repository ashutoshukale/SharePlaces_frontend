import React from "react";
import { useRef, useEffect } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const mapRef = useRef();
  useEffect(() => {}, []);
  const defaultProps = {
    center: props.center,
    zoom: props.zoom,
  };

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={{ height: "100%", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lng={defaultProps.center.lng}
          lat={defaultProps.center.lat}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
