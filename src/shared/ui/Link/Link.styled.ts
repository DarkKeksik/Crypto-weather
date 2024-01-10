import styled from "styled-components"

export const Link = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  transition-duration: 0.3s;
  color: ${({ isActive }) =>
    isActive ? "#4ef6ff" : "white"};

  &:hover {
    color: #4ef6ff;
  }
`
