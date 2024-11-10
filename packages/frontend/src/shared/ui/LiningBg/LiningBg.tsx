import { type FC, type PropsWithChildren } from "react"
import * as Styled from "./LiningBg.styled"

type TLiningBg = {
  source?: string
  bgColor?: string
} & PropsWithChildren

const LiningBg: FC<TLiningBg> = ({ children, source }) => {
  return (
    <Styled.Wrap>
      <Styled.BgImage source={source} />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrap>
  )
}

export default LiningBg
