import React from "react"
import styled from "styled-components"

const StyledBadge = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding + `px`};
  border-radius: ${props => props.borderRadius + `px`};
  color: ${props => props.textColor};
  display: inline-table;
`

const Badge = ({ backgroundColor, padding, borderRadius, textColor, value }) => {
  return (
    <StyledBadge backgroundColor={backgroundColor} padding={padding} borderRadius={borderRadius} textColor={textColor}>
      {value}
    </StyledBadge>
  )
}

export default Badge
