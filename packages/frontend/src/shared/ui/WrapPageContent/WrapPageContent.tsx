import { type FC, type PropsWithChildren } from "react"
import * as Styled from "./WrapPageContent.styled"

type TPageWrap = {
  bgColor?: string
} & PropsWithChildren

export const PageWrap: FC<TPageWrap> = ({
  bgColor,
  children,
}) => (
  <Styled.PageWrap bgColor={bgColor}>
    <Styled.PageAlign>{children}</Styled.PageAlign>
  </Styled.PageWrap>
)

export default PageWrap
