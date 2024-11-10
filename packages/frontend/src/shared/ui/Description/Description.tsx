import { type FC, type PropsWithChildren } from "react"
import * as Styled from "./Description.styled"

type TDescription = {
  color?: string
  bgColor?: string
} & PropsWithChildren

const Description: FC<TDescription> = ({
  children,
  bgColor,
  color,
}) => (
  <Styled.Description bgColor={bgColor} color={color}>
    {children}
  </Styled.Description>
)

export default Description
