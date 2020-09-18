import React from "react";

import {
  Tabs,
  Tab,
  ContainWrapper,
  TabsHeader,
  RatingsContainer,
} from "./Style";

import TabContent from "../TabContent/tabContent";

import YouMayLikeCard from "../YouMayLikeCard/youMayLikeCard";

import Loader from "../../CommonComponents/Loader/Loader";

const CaseStudyTabs = (props) => {
  return (
    <div>
      <TabsHeader>
        <Tabs>
          {props.caseStudyTab.map((p, index) => (
            <Tab
              key={p.id}
              onClick={() => {
                props.buttonTabHandler(index);
              }}
              active={p.id === props.buttonState}
            >
              <a href={"#" + p.buttonName}>{p.buttonName}</a>
            </Tab>
          ))}
        </Tabs>
        <RatingsContainer>
          <img
            src={require("../../assets/Images/star-icon.png")}
            alt="Star icon"
          />
          <span>Interested?</span>
          <img
            src={require("../../assets/Images/save-icon.png")}
            alt="Save icon"
          />
        </RatingsContainer>
      </TabsHeader>
      {props.tabLoading === true ? (
        <Loader />
      ) : (
        <ContainWrapper>
          <TabContent
            tabsContent={props.tabsContent}
            viewDetailedCaseStudy={props.DetailedCaseStudy}
            caseStudyButtonHandler={props.caseStudyHandler}
          />
          <YouMayLikeCard cardData={props.youMayLike} />
        </ContainWrapper>
      )}
    </div>
  );
};

export default CaseStudyTabs;
