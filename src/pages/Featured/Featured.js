import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchDashboardData } from "./actions";

import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";

import DemoCarousel from "../../components/Carousel/carousel";

import { MainContainerWrapper } from "../../container/Style";

import Loader from "../../CommonComponents/Loader/Loader";

class FeaturedPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboardData());
  }

  render() {
    const { error, loading, myFeedItems, carouselData } = this.props;
    if (error) {
      return <div>Something went wrong !!!!!</div>;
    }

    if (loading) {
      return <Loader />;
    }
    return (
      <MainContainerWrapper>
        <DemoCarousel
          bannerData={carouselData}
          indicator={true}
          button={true}
        />
        <ButtonNavigation myFeedNavs={myFeedItems} />
      </MainContainerWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  myFeedItems: state.myFeedItems,
  carouselData: state.carouselData,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps)(FeaturedPage);
