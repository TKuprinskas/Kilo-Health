import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 148px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 734px;
  height: 422px;
  left: 193px;
  top: 1750px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    flex-direction: column;
    height: auto;
    margin-top: 16px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 16px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
    justify-content: center;
    margin-top: 32px;
  }
`

export const Title = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #22222c;
  margin-bottom: 24px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    font-size: 20px;
    line-height: 28px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 8px;
  }
`

export const LeftBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: static;
  width: 343px;
  height: 366px;
  left: 0px;
  top: 56px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
    margin: 0 auto;
    justify-content: space-between;
  }
`

export const RightBody = styled.div`
  position: static;
  width: 343px;
  height: 366px;
  left: 0px;
  top: 56px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 351px;
  height: 288px;
  left: 383px;
  top: 0px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 351px;
  height: 422px;
  left: 0px;
  top: 0px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    margin-bottom: 24px;
  }
`

export const LeftImgBox = styled.div`
  margin-top: 16px;
  img {
    width: 157px;
    height: 325px;
  }
  @media (max-width: ${breakpoints.xs.max}) {
    margin-top: 16px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    margin-top: 8px;
  }
`

export const RightImgBox = styled.div`
  margin-top: 48px;
  img {
    width: 157px;
    height: 325px;
  }
  @media (max-width: ${breakpoints.xs.max}) {
    margin-top: 48px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    margin-top: 32px;
  }
`
