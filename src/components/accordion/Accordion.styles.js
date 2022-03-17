import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  position: static;
  width: 736px;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    margin-top: 24px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    margin-top: 48px;
  }
`

export const ItemContainer = styled.div`
  padding: 16px;
  margin-bottom: 8px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 16px;
  @media (max-width: ${breakpoints.xs.max}) {
    margin: 0 auto;
    margin-bottom: 8px;
    width: 95%;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    margin: 0 auto;
    margin-bottom: 8px;
    width: 95%;
  }
`

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
  }
`

export const Question = styled.div`
  position: static;
  width: 664px;
  height: 24px;
  left: 16px;
  top: 16px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #212121;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    font-size: 14px;
    line-height: 20px;
  }
`

export const IconBox = styled.div``

export const Answer = styled.div`
  position: static;
  width: 704px;
  height: auto;
  left: 16px;
  top: 0px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  mix-blend-mode: normal;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
  }
`

export const Title = styled.div`
  position: static;
  width: 736px;
  left: calc(50% - 736px / 2);
  top: 0%;
  bottom: 91.21%;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #22222c;
  margin-bottom: 8px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    text-align: left;
    margin-left: 8px;
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    font-size: 20px;
    line-height: 28px;
  }
`

export const BtnDiv = styled.div`
  text-align: center;
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: ${breakpoints.xs.max}) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
