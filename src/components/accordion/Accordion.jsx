import React from 'react'
import { AccordionItemsList } from '../../content/AccordionItemsList'
import AccordionItem from './AccordionItem'
import { Container, Title, BtnDiv } from './Accordion.styles'
import Button from '../../components/button/Button'

const Accordion = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      {AccordionItemsList.map(({ index, question, answer }) => (
        <AccordionItem key={index} question={question} answer={answer} />
      ))}
      <BtnDiv>
        <Button width="343px">Get my plan</Button>
      </BtnDiv>
    </Container>
  )
}

export default Accordion
