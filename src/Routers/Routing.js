import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FeaturedPage from "../pages/Featured/Featured";

import Header from "../CommonComponents/Header/Header";

import ViewCaseStudy from "../pages/viewCaseStydy/viewCaseStudy";

import SideDrawer from "../CommonComponents/SideDrawer/SideDrawer";

import { AppContainer, MainContainer } from "../container/Style";

class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContainer>
          <SideDrawer />
          <MainContainer>
            <Header />
            <Router>
              <Switch>
                <Route path="/dashBoard" exact component={FeaturedPage} />
                <Route path="/viewCaseStudy" exact component={ViewCaseStudy} />
              </Switch>
            </Router>
          </MainContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default Routing;
