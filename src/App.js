import React, { Component } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";
import { createStore } from "redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LocationList from "./Components/LocationList/LocationList";
import ForecastExtended from "./Components/ForecastExtended/ForecastExtended";
import "./styles.css";

import { setCity } from "./actions";

const cities = [
  "Buenos aires, ar",
  "Caracas, ve",
  "Bogota, co",
  "Santiago, cl",
  "Washington",
  "Barcelona"
];

const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  onSelectedLocation = city => {
    this.setState({ city });

    store.dispatch(setCity(city));
  };

  render() {
    const { city } = this.state;
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
            <ForecastExtended city={city} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
