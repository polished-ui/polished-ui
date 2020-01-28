import styled from "styled-components"

const Button = styled.button`
  width: ${props => props.width + `px`};
  height: ${props => props.height + `px`};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  color: ${props => props.textColor};
  font-size: ${props => props.sizeText + `px`};
  border-radius: ${props => props.radius + `px`};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`

/** @component */
export default Button
