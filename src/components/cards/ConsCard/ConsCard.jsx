import React from "react";
import {
  Container,
  IconDiv,
  ContentDiv,
  Title,
  Subtitle,
} from "./ConsCard.styles";

export const ConsCard = (props) => {
  return (
    <Container>
      <IconDiv className="cons-card-icon">
        <img src={props.icon} alt="icon" />
      </IconDiv>
      <ContentDiv>
        <Title className="cons-card-title">{props.title}</Title>
        <Subtitle className="cons-card-subtitle">{props.subtitle}</Subtitle>
      </ContentDiv>
    </Container>
  );
};

export default ConsCard;
