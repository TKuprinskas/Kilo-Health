import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
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
} from './PriceCard.styles'

const PriceCard = (props) => {
  const {
    onClick,
    selected,
    title,
    discount,
    price,
    month,
    oldPrice,
    totalPrice,
    text,
  } = props

  return (
    <Container onClick={onClick} border={selected}>
      <Wrapper>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderDiscount display={discount}>Save {discount}</HeaderDiscount>
        </Header>
        <Body>
          <BodyPrice>{price}</BodyPrice>
          <BodyMonth>{month}</BodyMonth>
        </Body>
        <Footer>
          <FooterOldPrice>{oldPrice}</FooterOldPrice>
          <FooterTotalPrice>{totalPrice}</FooterTotalPrice>
          <FooterText>{text}</FooterText>
        </Footer>
      </Wrapper>
      <IconDiv style={{ opacity: selected ? '1' : '0.08' }}>
        <Icon
          icon={selected ? 'mdi:check-circle' : 'mdi:circle'}
          color={selected ? '#ff9b4e' : '#000000'}
          width="26"
          height="26"
        />
      </IconDiv>
    </Container>
  )
}

export default PriceCard

PriceCard.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
  discount: PropTypes.string,
  price: PropTypes.string,
  month: PropTypes.string,
  oldPrice: PropTypes.string,
  totalPrice: PropTypes.string,
  text: PropTypes.string,
}
