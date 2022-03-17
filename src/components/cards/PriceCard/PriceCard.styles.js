import styled from 'styled-components'
import { breakpoints } from '../../../styles/styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 352px;
  height: 131px;
  position: static;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  margin-bottom: 16px;
  margin-top: -6px;
  cursor: pointer;
  border: ${(props) =>
    props.border ? '2px solid #ff9b4e' : '2px solid rgba(0, 0, 0, 0.08)'};
  @media (max-width: ${breakpoints.xs.max}) {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 292px;
  height: 99px;
  left: 0px;
  top: 0px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 292px;
  left: 0px;
  top: 0%;
  bottom: 75.76%;
`

export const HeaderTitle = styled.div`
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.4px;
  color: #22222c;
`

export const HeaderDiscount = styled.div`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 77px;
  height: 24px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  background: #ffe082;
  border-radius: 6px;
  margin: 0px 8px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  position: static;
  width: 292px;
  left: 0px;
  top: 0%;
  bottom: 0%;
`

export const BodyPrice = styled.div`
  position: static;
  left: 0%;
  right: 68.84%;
  top: 0%;
  bottom: 0%;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #22222c;
`

export const BodyMonth = styled.div`
  margin-left: 5px;
  position: static;
  left: 32.53%;
  right: 50%;
  top: 27.27%;
  bottom: 0%;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  color: #22222c;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 292px;
  height: 20px;
  left: 0px;
  top: 48px;
`

export const FooterOldPrice = styled.div`
  position: static;
  left: 0%;
  right: 82.19%;
  top: 0%;
  bottom: 0%;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #22222c;
  mix-blend-mode: normal;
`

export const FooterTotalPrice = styled.div`
  position: static;
  margin-left: 5px;
  left: 20.55%;
  right: -4.45%;
  top: 0%;
  bottom: 0%;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ff9b4e;
`

export const FooterText = styled.div`
  position: static;
  margin-left: 5px;
  left: 80%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  color: #22222c;
`

export const IconDiv = styled.div`
  align-self: center;
  width: 24px;
  height: 24px;
`
