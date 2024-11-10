import styled, { css } from "styled-components"

import {
  TType,
  TViewType,
  Tsize,
  Tsizes,
} from "./TagsPanel.types"

const getStyledTagSize = (size: Tsizes) => {
  switch (size) {
    case "s":
      return css`
        padding: 0.2rem 0.5rem;
        font-size: 0.8rem;
        letter-spacing: 1px;
      `
    case "m":
      return css`
        padding: 0.3rem 0.6rem;
        font-size: 1rem;
        letter-spacing: 1px;
      `
    case "l":
      return css`
        padding: 0.4rem 0.7rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
      `
    default:
      return null
  }
}

export const Tag = styled.p<TType>`
  max-width: 100px;
  width: 100%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.33) 4px 8px 5px;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  color: white;

  background: ${({ type }) => {
    if (type === "positive") {
      return css`rgba(59, 231, 201, .9)`
    } else if (type === "neutral") {
      return css`rgba(30, 35, 49, .9)`
    } else {
      return css`rgba(173, 82, 82, .9)`
    }
  }};
`

export const Wrap = styled.div<TViewType & Tsize>`
  display: grid;
  grid-template-columns: repeat(
    ${({ viewType }) => {
      switch (viewType) {
        case "row":
          return 5
        case "col":
          return 1
      }
    }},
    max-content
  );
  grid-template-rows: max-content;
  gap: 5px;

  ${Tag} {
    ${({ size }) => size && getStyledTagSize(size)}
  }
`
