import styled from "styled-components"

export const Description = styled.div<{
  color?: string
  bgColor?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: ${({ color }) => color || "white"};
  background: ${({ bgColor }) => bgColor || "unset"};
`
