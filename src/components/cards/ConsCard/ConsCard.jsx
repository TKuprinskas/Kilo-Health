import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  IconDiv,
  ContentDiv,
  Title,
  Subtitle,
} from './ConsCard.styles'

const ConsCard = (props) => {
  return (
    <Container>
      <IconDiv>
        <img src={props.icon} alt="icon" />
      </IconDiv>
      <ContentDiv>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </ContentDiv>
    </Container>
  )
}

export default ConsCard

ConsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
