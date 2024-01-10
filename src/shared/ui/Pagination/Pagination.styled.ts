import styled, { css } from "styled-components"

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0.5rem 0;
  color: white;
`

export const Items = styled.div`
  display: flex;
  gap: 0.3rem;
`

export const Delimiter = styled.p``

export const Item = styled.p<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 2px;
  border-radius: 3px;
  font-size: 0.875rem;
  box-sizing: border-box;
  transition-duration: 0.3s;

  ${({ isActive }) =>
    isActive
      ? css`
          background: rgb(30 35 49);
        `
      : css`
          cursor: pointer;
          &:hover {
            background-color: #f4739e;
          }
        `}
`
