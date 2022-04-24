import React from 'react'
import SuccessCard from 'components/cards/SuccessCard/SuccessCard'
import { SuccessStories } from 'content/SuccessStories'
import { Container, Wrapper, Title, BtnDiv } from './SuccessStories.styles'
import Button from 'components/button/Button'

const SuccessStoriesLayout = () => {
  return (
    <Container>
      <Title>Hear success stories from our clients</Title>
      <Wrapper>
        {SuccessStories.map((item, index) => {
          const { title, text, location, img } = item
          return (
            <SuccessCard
              key={index}
              title={title}
              location={location}
              img={img}
              text={text}
            />
          )
        })}
      </Wrapper>
      <BtnDiv>
        <Button width="343px">Get my plan</Button>
      </BtnDiv>
    </Container>
  )
}

export default SuccessStoriesLayout
