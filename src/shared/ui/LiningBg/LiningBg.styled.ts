import styled, { css } from "styled-components"

export const Wrap = styled.div`
  position: relative;
  height: 60vh;
`

export const BgImage = styled.div<{
  source?: string
  bgColor?: string
}>`
  ${({ source }) =>
    source &&
    css`
      background-image: url(${source});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    `}
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`

export const Content = styled.div`
  position: inherit;
  height: 100%;
  width: 100%;
  z-index: 2;
`
