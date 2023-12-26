import { FC, PropsWithChildren } from "react"
import * as Styled from "./Description.styled"

type TDescription = {
  color?: string
} & PropsWithChildren

const Description: FC<TDescription> = ({
  children,
  color,
}) => (
  <Styled.Description color={color}>
    {children}
  </Styled.Description>
)

export default Description
