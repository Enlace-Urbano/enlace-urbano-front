import styled from "styled-components";

export const MainCardStyle = styled.div<{ color: string }>`
background-color: ${props => props.color};
`