import styled from "styled-components"

export const Wrap = styled.div`
  user-select: none;
  min-width: 8rem;
  max-width: max-content;
  width: 100%;
  cursor: pointer;
`

export const SelectHide = styled.select`
  display: none;
`

export const SelectCustom = styled.div`
  position: relative;
  color: white;
  font-size: 1.3rem;
  padding: 0.2rem;
`

export const WrapAnimation = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  overflow: hidden;
  transition: transform 0.2s ease-out;
  height: auto;
  transform: scaleY(1);
  transform-origin: top;
  z-index: 2;
`

export const Values = styled.div<{ isActive: boolean }>`
  max-height: 200px;
  margin-top: 2px;
  height: auto;
  width: 100%;
  background: #1e2331f7;
  overflow: hidden auto;
  transition: transform 0.2s ease-out;
  transform: scaleY(
    ${({ isActive }) => (isActive ? 1 : 0)}
  );
  transform-origin: top;
`

export const ValueSelected = styled.div`
  border-bottom: 2px solid #ffffff9e;
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 2px;
  transition-duration: 0.3s;

  &:first-letter {
    text-transform: capitalize;
  }

  &:hover {
    color: #4ef6ff;
  }
`

export const OptionCustom = styled.div`
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  width: 100%;
  transition-duration: 0.3s;

  &:first-letter {
    text-transform: capitalize;
  }

  &:hover {
    color: #4ef6ff;
    background: #414758;
  }
`
