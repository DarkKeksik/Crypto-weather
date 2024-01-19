import styled, { css } from "styled-components"

export const Wrap = styled.div`
  height: 60vh;
`

export const BgImage = styled.div<{ source?: string }>`
  ${({ source }) =>
    source &&
    css`
      background-image: url(${source}),
        linear-gradient(
          rgba(253, 119, 163, 1),
          rgba(16, 24, 32, 1)
        );
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    `}
  height: 100%;
`

export const Content = styled.div``
