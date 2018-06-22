import React, { Component } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./styles.css";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

const App = () => {
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
          <LocationListContainer />
        </Col>
        <Col xs={12} md={6}>
          <ForecastExtendedContainer />
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
