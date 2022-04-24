import React from 'react'
import {
  Container,
  Wrapper,
  Title,
  Location,
  ImgBox,
  Text,
} from './SuccessCard.styles'
import StarRating from 'components/starRating/StarRating'

interface SuccessCardProps {
  title: string
  location: string
  img: string
  text: string
}

const SuccessCard = (props: SuccessCardProps) => {
  const { title, location, img, text } = props
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <StarRating />
        <ImgBox>
          <img src={img} alt={img} />
        </ImgBox>
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  )
}

export default SuccessCard
