import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.styles'

const ButtonComponent = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      width={props.width}
    >
      {props.children}
    </StyledButton>
  )
}

export default ButtonComponent

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
}
