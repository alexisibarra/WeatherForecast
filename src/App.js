import React, { Component } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LocationList from "./Components/LocationList/LocationList";
import ForecastExtended from "./Components/ForecastExtended/ForecastExtended";

const cities = [
  "Buenos aires, ar",
  "Caracas, ve",
  "Bogota, co",
  "Santiago, cl",
  "Washington",
  "Barcelona"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  onSelectedLocation = city => {
    console.log(city);
    this.setState({ city });
  };
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static" color="default" title="hola mundo">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Title
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.onSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <ForecastExtended city={this.state.city} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;