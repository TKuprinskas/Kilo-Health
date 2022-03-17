import styled from 'styled-components'
import { breakpoints } from '../../../styles/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 0 auto;
  margin-top: 22px;
  position: static;
  width: 343px;
  height: 48px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
    margin-top: 8px;
    margin-bottom: 18px;
  }
  @media (max-width: ${breakpoints.sm.max}) {
    width: 95%;
    margin-top: 8px;
    margin-bottom: 18px;
    justify-content: center;
  }
`

export const IconDiv = styled.div`
  position: static;
  width: 48px;
  height: 48px;
  left: 0px;
  top: 0px;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 279px;
  height: 42px;
  left: 64px;
  top: 0px;
`

export const Title = styled.div`
  margin-left: 10px;
  position: static;
  width: 279px;
  height: 48px;
  left: 0px;
  top: 0px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #22222c;
  padding: 0px 5px;
  text-align: left;
`

export const Subtitle = styled.div`
  margin-left: 10px;
  position: static;
  width: 279px;
  height: 36px;
  left: 0px;
  top: 24px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #22222c;
  opacity: 0.64;
  padding: 0px 5px;
  text-align: left;
`
