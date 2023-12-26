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
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  width: max-content;
  user-select: none;

  background: -webkit-linear-gradient(
    left,
    rgb(78, 247, 255) 0%,
    rgb(255, 205, 27)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
