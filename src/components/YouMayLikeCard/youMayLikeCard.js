import React from "react";

import { YouMayLikeHeading, YouMayLikeContainer, Card } from "./Style";

const YouMayLikeCard = (props) => {
  return (
    <YouMayLikeContainer>
      <YouMayLikeHeading>You might like</YouMayLikeHeading>
      <Card>
        <div>{props.cardData.title}</div>
        <p>{props.cardData.cardDescription}</p>
        <span>{props.cardData.footerTitle}</span>
      </Card>
    </YouMayLikeContainer>
  );
};
export default YouMayLikeCard;
