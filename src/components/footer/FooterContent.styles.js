import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

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
    height: auto;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
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
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    margin-bottom: 16px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    height: auto;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`

export const Wrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  margin-bottom: 100px;
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
