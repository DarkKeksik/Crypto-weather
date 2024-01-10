import styled from "styled-components"

export const Image = styled.div<{ source: string }>`
  min-height: 12.5rem;
  width: 100%;
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
  gap: 10px;
  height: 100%;
  min-height: 9.375rem;
`
export const NewsFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Title = styled.p`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  overflow: hidden;
  color: white;
`

export const TagPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Tag = styled.p<{
  status: "positive" | "neutral" | "negative"
}>`
  background: ${({ status }) => {
    if (status === "positive") {
      return "#3be7c9"
    } else if (status === "neutral") {
      return "#1e2331"
    } else {
      return "#ad5252"
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
  border-radius: 2.5rem;
  box-sizing: border-box;
  font-weight: 700;
`

export const Description = styled.article`
  color: #bcbcbc;
  font-size: 0.875rem;
`
export const Data = styled.p`
  font-size: 0.875rem;
  color: white;
`

export const Link = styled.a``
