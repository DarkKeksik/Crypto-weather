import styled from "styled-components"

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
