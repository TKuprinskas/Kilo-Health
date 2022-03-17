import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { Container, IconDiv, ContentDiv, Title } from './YogaCons.styles'

export const YogaCons = (props) => {
  return (
    <Container>
      <IconDiv>
        <Icon
          icon="mdi:check-circle-outline"
          color="#91B83D"
          width="30"
          height="30"
        />
      </IconDiv>
      <ContentDiv>
        <Title>{props.title}</Title>
      </ContentDiv>
    </Container>
  )
}

export default YogaCons

YogaCons.propTypes = {
  title: PropTypes.string.isRequired,
}
