import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #ff9b4e;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 40px 8px 40px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 56px;
  border: none;
  &:hover {
    background-color: #90caf9;
  }
`
