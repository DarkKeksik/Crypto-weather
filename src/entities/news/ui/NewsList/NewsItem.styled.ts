import styled, { css } from "styled-components"

export const Image = styled.div<{ source: string }>`
  min-height: 12.5rem;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  background: url(${({ source }) => source || ""});
  background-position: center top;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  transition-duration: 0.3s;
`

export const NewsItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  &:hover ${Image} {
    background-size: 115%;
  }
`

export const NewsHeader = styled.header`
  box-sizing: border-box;
  background: #1e2331;
  padding: 0.8rem 0.7rem;
  border-radius: 0.625rem 0.625rem 0 0;
`
export const NewsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  min-height: 9.375rem;
`
export const NewsFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
`

export const Title = styled.p`
  max-width: 100%;
  font-size: 1.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 0.5px;
  color: white;
`

export const WrapPanels = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`

export const ListCryptocurrencies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-template-rows: max-content;
  grid-gap: 5px;
  width: 100%;
`

export const Cryptocurrency = styled.p`
  background: rgba(30, 35, 49, 0.9);
  max-width: 100px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.33) 4px 8px 5px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  color: white;
`

export const TagPanel = styled.div``

export const Tag = styled.p<{
  status: "positive" | "neutral" | "negative"
}>`
  background: ${({ status }) => {
    if (status === "positive") {
      return css`rgba(59, 231, 201, .9)`
    } else if (status === "neutral") {
      return css`rgba(30, 35, 49, .9)`
    } else {
      return css`rgba(173, 82, 82, .9)`
    }
  }};
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
`

export const Description = styled.article`
  color: #bcbcbc;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1px;

  &::first-letter {
    color: #d94257;
  }
`

export const CreationInfo = styled.div`
  font-size: 0.875rem;
`

export const DataTime = styled.div`
  display: flex;
  gap: 5px;
`

export const Date = styled.p`
  color: white;
`

export const Time = styled.p`
  text-align: center;
  color: white;
`

export const Author = styled.p`
  color: white;
`

export const Link = styled.a``
