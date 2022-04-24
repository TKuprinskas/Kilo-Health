import React from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  width?: string
  children: React.ReactNode
}

const ButtonComponent = (props: ButtonProps) => {
  const { onClick, disabled, width, children } = props
  return (
    <StyledButton onClick={onClick} disabled={disabled} width={width}>
      {children}
    </StyledButton>
  )
}

export default ButtonComponent
