import React from 'react'
import { DiscountContainer, IconWrap } from './Header.styles'
import { Icon } from '@iconify/react'

interface Props {
  text: string
}

const StickyDiscount = (props: Props) => {
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
