import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
  }
`

export const DiscountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 56px;
  left: 0px;
  top: 0px;
  background: #90caf9;
  p {
    position: absolute;
    width: 266px;
    height: 20px;
    left: calc(50% - 266px / 2 + 22px);
    top: calc(50% - 20px / 2);
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
  }
`

export const IconWrap = styled.div`
  position: absolute;
  width: 24x;
  height: 24px;
  left: calc(50% - 24px / 2 - 139px);
  top: calc(50% - 26px / 2);
`

export const HeaderContainer = styled.div`
  margin: 56px auto;
  height: 72px;
  text-align: center;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  @media (max-width: ${breakpoints.xs.max}) {
    margin-bottom: 16px;
  }
`

export const ImgBox = styled.div`
  height: 72px;
  img {
    width: 73.34px;
    height: 32.08px;
    margin-top: 20px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  position: static;
  width: 730px;
  height: 84px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    margin-bottom: 24px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    margin-bottom: 24px;
  }
`

export const Title = styled.div`
  position: static;
  width: 730px;
  height: 56px;
  left: calc(50% - 730px / 2);
  top: calc(50% - 56px / 2 + 14px);
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  color: #22222c;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    font-size: 28px;
    line-height: 36px;
    color: #000000;
    text-align: left;
    margin-top: 8px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
    font-size: 28px;
    line-height: 36px;
    color: #000000;
    margin-top: 8px;
  }
`

export const Subtitle = styled.div`
  position: static;
  width: 343px;
  height: 20px;
  left: calc(50% - 343px / 2);
  top: calc(50% - 20px / 2 - 32px);
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #22222c;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    text-align: left;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
  }
`
