import { FC, PropsWithChildren } from "react"
import * as Styled from "./WrapPageContent.styled"

export const PageWrap: FC<PropsWithChildren> = ({
  children,
}) => (
  <Styled.PageWrap>
    <Styled.PageAlign>{children}</Styled.PageAlign>
  </Styled.PageWrap>
)

export default PageWrap
