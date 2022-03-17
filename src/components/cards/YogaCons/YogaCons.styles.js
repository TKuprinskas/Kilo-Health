import styled from 'styled-components'
import { breakpoints } from '../../../styles/styles'

export const Container = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 351px;
  height: 40px;
  left: 0px;
  top: 0px;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
`

export const IconDiv = styled.div`
  align-self: flex-start;
  position: static;
  width: 40px;
  height: 40px;
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
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
`

export const Title = styled.div`
  position: static;
  width: 311px;
  height: 40px;
  left: 40px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
  @media (max-width: ${breakpoints.xs.max}) {
    width: 95%;
  }
`
