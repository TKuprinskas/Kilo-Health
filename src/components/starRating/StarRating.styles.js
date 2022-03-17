import styled from 'styled-components'

export const Container = styled.div`
  margin-left: -5px;
`

export const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.color === 'on' ? '#FFCC80' : '#ccc')};
`

export const Star = styled.span`
  width: 24px;
  height: 24px;
`
