import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import {
  ItemContainer,
  QuestionWrapper,
  Question,
  IconBox,
  Answer,
} from './Accordion.styles'

const AccordionItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <ItemContainer>
      <QuestionWrapper onClick={() => setIsActive(!isActive)}>
        <Question>{question}</Question>
        <IconBox>
          <Icon icon={isActive ? 'mdi-chevron-up' : 'mdi-chevron-down'} />
        </IconBox>
      </QuestionWrapper>
      {isActive && <Answer>{answer}</Answer>}
    </ItemContainer>
  )
}

export default AccordionItem

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}
