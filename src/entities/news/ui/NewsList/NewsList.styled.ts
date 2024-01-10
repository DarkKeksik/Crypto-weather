import styled from "styled-components"

export const WrapPreloader = styled.div`
  min-height: 350px;
`

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  min-height: 350px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
