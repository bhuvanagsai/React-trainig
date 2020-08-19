import React, { Component } from "react";

import DemoCarousel from "../components/Carousel/carousel";

import axios from "../Axios/Axios";

import CaseStudyTabs from "../components/CaseStudyTabs/caseStudyTabs";

class ViewCaseStudyPage extends Component {
  state = {
    caseStudyBanner: [],
    Bannerloader: false,
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
    cardData : []
  };
  async componentDidMount() {
    axios.get("/0.json").then((response) => {
      this.setState({caseStudyBanner: Object.values(response.data.caseStudyBanner)});
      this.setState({tabData : response.data.caseStudyTabs});
      this.setState({cardData : response.data.cardData});
      setTimeout(() => this.setState({ Bannerloader: true }), 3000);
      setTimeout(() => this.setState({tabLoader: false}),5000) ;
    });
  }
  buttonHandler = (id) => {
    this.setState({ buttonState: id });
  };
  render() {    
    return (
      <div>
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
        />
      </div>
    );
  }
}

export default ViewCaseStudyPage;
