import React from "react"
import styled from "styled-components"

const AvatarImage = styled.img`
  width: ${props => props.width + `px`};
  height: ${props => props.height + `px`};
  border-radius: ${props => props.borderRadius + `px`};
  object-fit: contain;
`

const Avatar = ({ src, width, height, borderRadius }) => (
  <AvatarImage src={src} width={width} height={height} borderRadius={borderRadius} />
)

export default Avatar
