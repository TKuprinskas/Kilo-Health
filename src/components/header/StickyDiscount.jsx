import React from 'react'
import PropTypes from 'prop-types'
import { DiscountContainer, IconWrap } from './Header.styles'
import { Icon } from '@iconify/react'

const StickyDiscount = (props) => {
  return (
    <DiscountContainer>
      <IconWrap>
        <Icon icon="ic:round-local-offer" color="#FFFFFF" />
      </IconWrap>
      <div>
        <p>{props.text}</p>
      </div>
    </DiscountContainer>
  )
}

export default StickyDiscount

StickyDiscount.propTypes = {
  text: PropTypes.string.isRequired,
}
