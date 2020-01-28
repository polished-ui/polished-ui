import React from "react"
import styled from "styled-components"
const A = styled.a``

const Link = ({ to, children }) => <A href={to}>{children}</A>

export default Link
