import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  padding: 0px;
  position: static;
  width: 1120px;
  left: 0px;
  top: 0px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 100%;
  }
  @media (min-width: ${breakpoints.sm.min}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
  }
`

export const Title = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #22222c;
  margin-bottom: 8px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    font-size: 20px;
    line-height: 28px;
    text-align: left;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
    margin-top: 8px;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 352px;
  height: 771px;
  left: 0px;
  top: 0px;
  p {
    position: static;
    width: 352px;
    left: calc(50% - 352px / 2);
    top: 74.84%;
    bottom: 15.82%;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #39353c;
    padding: 5px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  left: 52.81%;
  right: 0.14%;
  top: 0%;
  bottom: 28.15%;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    margin-top: 24px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    margin-top: 24px;
    text-align: center;
  }
`

export const OrngText = styled.span`
  color: #ff9b4e;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${breakpoints.md.max}) {
    justify-content: space-evenly;
  }
`
