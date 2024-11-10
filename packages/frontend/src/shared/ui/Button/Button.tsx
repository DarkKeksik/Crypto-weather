import type { PropsWithChildren, FC } from "react"
import * as Styled from "./Button.styled"

type TButton = {
  onClick?: () => void
} & PropsWithChildren

const Button: FC<TButton> = ({ children, onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      {children}
    </Styled.Button>
  )
}

export default Button
