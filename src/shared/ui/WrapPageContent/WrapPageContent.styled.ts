import styled, { css } from "styled-components"

export const PageWrap = styled.section<{
  bgColor?: string
}>`
  box-sizing: border-box;
  background: ${({ bgColor }) =>
    bgColor
      ? css`
          ${bgColor}
        `
      : "inherit "};
`

export const PageAlign = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0px auto;
  padding: 0 4rem;
  box-sizing: border-box;
`
