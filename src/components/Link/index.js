import React from "react"
import styled from "styled-components"

const A = styled.a`
  color: ${props => props.color};
  font-size: ${props => props.size + `px`};
  text-decoration: ${props => props.decoration};
  cursor: pointer;
`

const Link = ({ to, color, size, decoration, children }) => (
  <A color={color} size={size} decoration={decoration} href={to}>
    {children}
  </A>
)

export default Link
