// @flow
import React from "react"
import styled from "styled-components"

type AvatartProps = {
  src: string,
  width: number,
  height: number,
  borderRadius: number,
}

const AvatarImage = styled.img`
  width: ${props => props.width + `px`};
  height: ${props => props.height + `px`};
  border-radius: ${props => props.borderRadius + `px`};
  object-fit: contain;
`

const Avatar = ({ src, width, height, borderRadius }: AvatartProps) => (
  <AvatarImage src={src} width={width} height={height} borderRadius={borderRadius} />
)

export default Avatar
