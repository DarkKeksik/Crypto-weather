import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #ffffff8a;
  z-index: 10;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 500px;
  min-width: 350px;
  max-width: 60%;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px #00000061;
  border-radius: 16px;
  overflow: hidden;
`

export const Modal = styled.section``

export const Header = styled.header`
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #2f1a23;
  color: white;
`

export const Title = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 70%;
`

export const Main = styled.main``

export const Footer = styled.footer``
