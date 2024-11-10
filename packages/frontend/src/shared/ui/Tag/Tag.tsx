import type { FC, PropsWithChildren } from "react"
import type { TypesTag } from "@/shared"
import * as Styled from "./Tag.styled"

type TTag = TypesTag.TType & PropsWithChildren

const Tag: FC<TTag> = ({ children, type }) => {
  return <Styled.Tag type={type}>{children}</Styled.Tag>
}

export default Tag
