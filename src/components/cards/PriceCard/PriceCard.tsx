import React from 'react'
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

interface Props {
  onClick: () => void
  selected: boolean
  title: string
  discount?: string
  price: string
  month: string
  oldPrice?: string
  totalPrice?: string
  text: string
  border?: boolean
}

const PriceCard = (props: Props) => {
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
