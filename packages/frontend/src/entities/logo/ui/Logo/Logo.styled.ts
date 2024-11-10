import styled from "styled-components"

export const WrapLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: max-content;
`

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  width: max-content;
  user-select: none;
  background: linear-gradient(
    to right,
    rgb(78, 247, 255) 0%,
    white
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 640px) {
    display: none;
  }
`
