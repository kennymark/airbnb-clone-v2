import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA_ssqqQh2NaOfcsLAUY1mrjdIpp66QXQs" }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
