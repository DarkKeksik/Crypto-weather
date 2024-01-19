import styled from "styled-components"

const minHeightNewsValue = "50vh"

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ErrorBlock = styled.div`
  font-size: 1.5rem;
  color: white;
`

export const EmptyBlock = styled.div`
  font-size: 1.5rem;
  color: white;
`

export const WrapPreloader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${minHeightNewsValue};
`

export const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  min-height: ${minHeightNewsValue};

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Pagination = styled.div`
  margin-top: 1.5rem;
  background: red;
`
