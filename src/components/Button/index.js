import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border: 0;
  background-color: ${props => (props.default ? "#CCC" : props.primary ? "#90caf9" : null)};
`

const Button = ({ children, type }) => <StyledButton type>{children}</StyledButton>

export default Button
