import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Container,
  IconDiv,
  Header,
  HeaderTitle,
  HeaderDiscount,
  Wrapper,
  Body,
  BodyPrice,
  BodyMonth,
  Footer,
  FooterOldPrice,
  FooterTotalPrice,
  FooterText,
} from "./PriceCard.styles";

const PriceCard = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Container
      onClick={handleClick}
      style={{
        border: selected
          ? "2px solid #ff9b4e"
          : "2px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <Wrapper>
        <Header>
          <HeaderTitle>{props.title}</HeaderTitle>
          <HeaderDiscount style={{ display: props.discount ? "flex" : "none" }}>
            {props.discount}
          </HeaderDiscount>
        </Header>
        <Body>
          <BodyPrice>{props.price}</BodyPrice>
          <BodyMonth>{props.month}</BodyMonth>
        </Body>
        <Footer>
          <FooterOldPrice>{props.oldPrice}</FooterOldPrice>
          <FooterTotalPrice>{props.totalPrice}</FooterTotalPrice>
          <FooterText>{props.text}</FooterText>
        </Footer>
      </Wrapper>
      <IconDiv style={{ opacity: selected ? "1" : "0.08" }}>
        <Icon
          icon={selected ? "mdi:check-circle" : "mdi:circle"}
          color={selected ? "#ff9b4e" : "#000000"}
        />
      </IconDiv>
    </Container>
  );
};

export default PriceCard;
