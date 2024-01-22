import styled from "styled-components"

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border: 2px solid #d94257;
  max-width: 7rem;
  width: 100%;
  padding: 0.4rem;
  background: #d94257;
  color: white;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.33) 4px 8px 5px;
  font-size: 0.875rem;
  letter-spacing: 1px;
  border-radius: 100px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition-duration: 0.3s;

  &:hover {
    background-color: inherit;
  }
`
