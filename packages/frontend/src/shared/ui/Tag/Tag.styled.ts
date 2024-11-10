import styled, { css } from "styled-components"

import type { TypesTag } from "@/shared"

export const Tag = styled.p<TypesTag.TType>`
  color: white;
  max-width: 100px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  text-align: center;
  box-shadow: 4px 8px 5px #00000054;
  font-size: 1.1rem;
  letter-spacing: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  background: rgba(30, 35, 49, 0.9);

  background: ${({ type = "neutral" }) => {
    if (type === "positive") {
      return css`rgba(59, 231, 201, .9)`
    } else if (type === "neutral") {
      return css`rgba(30, 35, 49, .9)`
    } else {
      return css`rgba(173, 82, 82, .9)`
    }
  }};
`
