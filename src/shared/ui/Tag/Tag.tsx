import type { FC, PropsWithChildren } from "react"

import { TTag } from "@/shared"
import * as Styled from "./Tag.styled"

type TTag = TTag.TType & PropsWithChildren

const Tag: FC<TTag> = ({ children, type }) => {
  return <Styled.Tag type={type}>{children}</Styled.Tag>
}

export default Tag
