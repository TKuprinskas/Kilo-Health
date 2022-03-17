import React from 'react'
import { YogaConsList } from '../../content/YogaConsList'
import { YogaCons } from '../../components/cards/YogaCons/YogaCons'
import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  LeftImgBox,
  RightImgBox,
  LeftBody,
  RightBody,
} from './Yoga.styles'
import activity from '../../assets/images/activity.png'
import articles from '../../assets/images/articles.png'

const YogaLayout = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Start your yoga journey now!</Title>
        <LeftBody>
          <LeftImgBox>
            <img src={activity} alt="Activity" />
          </LeftImgBox>
          <RightImgBox>
            <img src={articles} alt="Articles" />
          </RightImgBox>
        </LeftBody>
      </LeftContainer>
      <RightContainer>
        <Title>Is Positive Yoga right for me?</Title>
        <RightBody>
          {YogaConsList.map((item, index) => {
            return <YogaCons key={index} title={item.title} />
          })}
        </RightBody>
      </RightContainer>
    </Container>
  )
}

export default YogaLayout
