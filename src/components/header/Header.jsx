import React from 'react'
import logo from '../../assets/icons/Logo.png'
import { HeaderContainer, ImgBox } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ImgBox>
        <img src={logo} alt="logo" />
      </ImgBox>
    </HeaderContainer>
  )
}

export default Header
