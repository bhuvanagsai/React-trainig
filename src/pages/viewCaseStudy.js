import React, { Component } from "react";

import DemoCarousel from "../components/Carousel/carousel";

import axios from "../Axios/Axios";

import CaseStudyTabs from "../components/CaseStudyTabs/caseStudyTabs";

import {MainContainerWrapper} from '../container/Style';

class ViewCaseStudyPage extends Component {
  state = {
    caseStudyBanner: [],
    Bannerloader: true,
    caseStudyTabs: [
      {
        buttonName: "About",
        id: 0,
      },
      {
        buttonName: "Scope & Outcome",
        id: 1,
      },
      {
        buttonName: "Team & Stakeholders",
        id: 2,
      },
      {
        buttonName: "Toolkits",
        id: 3,
      },
    ],
    buttonState: 0,
    tabData : [],
    tabLoader : true,
    cardData : [],
    viewDetailedCaseStudy : false
  };
  componentDidMount() {
    axios.get("/0.json").then((response) => {
      this.setState({caseStudyBanner: Object.values(response.data.caseStudyBanner)});
      this.setState({tabData : response.data.caseStudyTabs});
      this.setState({cardData : response.data.cardData});
      this.setState({ Bannerloader: false });
      this.setState({tabLoader: false}) ;
    });
  }
  buttonHandler = (id) => {
    this.setState({ buttonState: id });
  };
  viewDetailedCaseButton = () =>{
    this.setState({ viewDetailedCaseStudy: true });
  };
  render() {    
    return (
      <MainContainerWrapper>
        <DemoCarousel
          bannerData={this.state.caseStudyBanner}
          loading={this.state.Bannerloader}
          indicator={false}
          button={false}
        />
        <CaseStudyTabs
          caseStudyTab={this.state.caseStudyTabs}
          buttonState={this.state.buttonState}
          buttonTabHandler={this.buttonHandler}
          youMayLike = {this.state.cardData}
          tabLoading = {this.state.tabLoader}
          tabData = {this.state.tabData}
          DetailedCaseStudy = {this.state.viewDetailedCaseStudy}
          caseStudyHandler = {this.viewDetailedCaseButton}
        />
      </MainContainerWrapper>
    );
  }
}

export default ViewCaseStudyPage;
