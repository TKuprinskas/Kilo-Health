import React from 'react'
import { Container, TitleWrapper, Title, Subtitle } from './Header.styles'
import PlanCons from './../../layouts/PlanCons/PlanCons'

const HeadContent = () => {
  return (
    <Container>
      <TitleWrapper>
        <Subtitle>
          Over <strong>52 147</strong> plans ordered.
        </Subtitle>
        <Title>Get access to your yoga program now!</Title>
      </TitleWrapper>
      <PlanCons />
    </Container>
  )
}

export default HeadContent
