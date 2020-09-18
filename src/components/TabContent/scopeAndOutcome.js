import React from "react";

import { Heading, Description, ImageContainer } from "./Style";

const ScopeOutcomeData = (props) => {
  return (
    <div id="Scope & Outcome">
      <Heading>{props.data.title}</Heading>
      <Description>
        <p>{props.data.description}</p>
      </Description>
      <ImageContainer>
        <img
          src={require(`../../assets/Images/${props.data.image}.png`)}
          alt="Slider"
        />
      </ImageContainer>
    </div>
  );
};

export default ScopeOutcomeData;
