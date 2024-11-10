import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    height: 50px;
    width: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgb(16 24 32 / 97%),
      rgba(16, 24, 32, 0),
      transparent 100px
    );
    z-index: 99;
  }
`

export const Fog = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
