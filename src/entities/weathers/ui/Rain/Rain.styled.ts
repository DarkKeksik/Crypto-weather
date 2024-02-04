import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    height: 50px;
    width: 100%;
    background: repeating-linear-gradient(
      0deg,
      #101820b3,
      #10182000,
      transparent 100px
    );
    z-index: 2;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`
