import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Wrapper,
  Title,
  Location,
  ImgBox,
  Text,
} from './SuccessCard.styles'
import StarRating from '../../starRating/StarRating'

const SuccessCard = (props) => {
  return (
    <Container>
      <Wrapper>
        <Title>{props.title}</Title>
        <Location>{props.location}</Location>
        <StarRating />
        <ImgBox>
          <img src={props.img} alt={props.img} />
        </ImgBox>
        <Text>{props.text}</Text>
      </Wrapper>
    </Container>
  )
}

export default SuccessCard

SuccessCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
