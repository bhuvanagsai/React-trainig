import {
  FETCH_DASHBOARD_BEGIN,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
} from "../pages/Featured/actions";

import {
  FETCH_VIEWCASESTUDY_BEGIN,
  FETCH_VIEWCASESTUDY_SUCCESS,
  FETCH_VIEWCASESTUDY_FAILURE,
} from "../pages/viewCaseStydy/actions";

const initialState = {
  myFeedItems: [],
  carouselData: [],
  caseStudyBanner: [],
  tabData: [],
  cardData: [],
  loading: false,
  error: null,
};

const reducer = (userstate = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_BEGIN:
      return {
        ...userstate,
        loading: true,
        error: null,
      };

    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...userstate,
        loading: false,
        myFeedItems: action.payload.myFeedNavigation,
        carouselData: action.payload.carouselData,
      };

    case FETCH_DASHBOARD_FAILURE:
      return {
        ...userstate,
        loading: true,
        error: action.payload.error,
        myFeedItems: [],
        carouselData: [],
      };
    case FETCH_VIEWCASESTUDY_BEGIN:
      return {
        ...userstate,
        loading: true,
        error: null,
      };

    case FETCH_VIEWCASESTUDY_SUCCESS:
      return {
        ...userstate,
        loading: false,
        caseStudyBanner: action.payload.caseStudyBanner,
        tabData: action.payload.caseStudyTabs,
        cardData: action.payload.cardData,
      };

    case FETCH_VIEWCASESTUDY_FAILURE:
      return {
        ...userstate,
        loading: true,
        error: action.payload.error,
        caseStudyBanner: [],
        tabData: [],
        cardData: [],
      };

    default:
      return userstate;
  }
};

export default reducer;
