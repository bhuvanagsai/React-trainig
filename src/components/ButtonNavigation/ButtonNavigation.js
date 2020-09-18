import React, { useState } from "react";

import { NavgationContainer, NavButton, Line } from "./Style";

import QuickConcepts from "../QuickConcepts/quickConcepts";

const ButtonNavigation = (props) => {
  const [activeState, setActiveState] = useState(0);
  const [buttonType, setButtonType] = useState("Quick Concepts");

  const switchHandler = (id, btnName) => {
    setActiveState(id);
    setButtonType(btnName);
  };

  const renderSwitch = (buttonName) => {
    switch (buttonName) {
      case "Quick Concepts":
        return <QuickConcepts />;
      case "Articles":
        return <div>Articles</div>;
      case "News":
        return <div>News</div>;
      default:
        return <QuickConcepts />;
    }
  };
  return (
    <div>
      <Line></Line>
      <NavgationContainer>
        {props.myFeedNavs.map((p, index) => (
          <NavButton
            key={p.id}
            active={p.id === activeState}
            onClick={() => {
              switchHandler(index, p.buttonName);
            }}
          >
            {p.buttonName}
          </NavButton>
        ))}
      </NavgationContainer>
      {renderSwitch(buttonType)}
    </div>
  );
};

export default ButtonNavigation;
