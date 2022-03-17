import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Container = styled.div`
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 989px;
  height: 663px;
  left: 65.5px;
  top: 935px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    height: auto;
    margin: 0 auto;
    margin-top: 24px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 48px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.xs.max}) {
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.md.max}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Title = styled.div`
  margin-bottom: 24px;
  position: static;
  width: 989px;
  left: calc(50% - 989px / 2);
  top: 0%;
  bottom: 95.17%;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #22222c;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 100%;
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
  @media (max-width: ${breakpoints.md.max}) {
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`

export const BtnDiv = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: ${breakpoints.xs.max}) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media (max-width: ${breakpoints.md.max}) {
    margin-top: 32px;
    margin-bottom: 0px;
  }
`
