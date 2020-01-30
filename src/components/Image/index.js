import styled from "styled-components"

const Image = styled.img`
  width: ${props => props.width + `px`};
  height: ${props => props.height + `px`};
  object-fit: ${props => (props.cover && "cover") || (props.contain && "contain")};
  src: url(${props => props.src});
`
/** @component */
export default Image
