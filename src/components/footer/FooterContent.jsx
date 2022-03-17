import React from 'react'
import { Wrapper, TitleWrapper, Title } from './FooterContent.styles'
import PlanCons from './../../layouts/PlanCons/PlanCons'

const FooterContent = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Start your yoga program today!</Title>
      </TitleWrapper>
      <PlanCons />
    </Wrapper>
  )
}

export default FooterContent
