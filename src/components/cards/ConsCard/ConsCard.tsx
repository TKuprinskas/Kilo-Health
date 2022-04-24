import React from 'react'
import {
  Container,
  IconDiv,
  ContentDiv,
  Title,
  Subtitle,
} from './ConsCard.styles'

interface ConsCardProps {
  title: string
  subtitle: string
  icon: string
}

const ConsCard = (props: ConsCardProps) => {
  const { title, subtitle, icon } = props
  return (
    <Container>
      <IconDiv>
        <img src={icon} alt="icon" />
      </IconDiv>
      <ContentDiv>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentDiv>
    </Container>
  )
}

export default ConsCard
