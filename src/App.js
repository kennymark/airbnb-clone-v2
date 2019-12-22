import React, { Component } from "react";
import Header from "./shared/components/header/header";
import axios from "axios";
import Flat from "./components/flat/flat";
import Search from "./components/search/search";
import Map from "./components/map/map";
import { Row, Col } from "reactstrap";
import { Badge } from "reactstrap";
import Footer from './shared/components/footer/footer';

const Marker = ({ text }) => (
  <h6>
    <Badge color="warning">{text}</Badge>
  </h6>
);

export class App extends Component {
  state = {
    flats: null,
    filteredData: null,
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 15
  };

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    axios.get(url).then(res => {
      this.setState({ flats: res.data, filteredData: res.data });
    });
  }

  findFlat = flat => {
    const { lat, lng } = flat;
    const center = { lat, lng };
    this.setState({ center, zoom: 17 });
  };

  searchFlats = val => {
    this.setState({ flats: this.state.filteredData.filter(flat => flat.name.toLowerCase().includes(val)) })
  };

  render() {
    const { flats, center, zoom } = this.state;
    return (
      <>
        <Header />
        <div className="p-4">
          <Search searchVal={this.searchFlats} />
          <Row>
            <Col>
              {flats && (<Row>
                {flats.map((flat, i) => (
                  <Col md="6" className="my-3" key={i}>
                    <Flat flat={flat} onClick={() => this.findFlat(flat)} />
                  </Col>
                ))}
              </Row>)}
            </Col>
            <Col>
              {flats && (
                <Map zoom={zoom} center={center}>
                  {flats.map((flat, i) => (
                    <Marker key={i} lat={flat.lat} lng={flat.lng} text={"£" + flat.price} />
                  ))}
                </Map>
              )}
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
