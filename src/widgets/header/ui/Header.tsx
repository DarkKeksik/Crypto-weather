import { type FC } from "react"

import { Logo, Menu } from "@/entities"
import * as Styled from "./Header.styled"

const Header: FC = () => {
  return (
    <Styled.Wrap>
      <Logo />
      <Menu />
    </Styled.Wrap>
  )
}

export default Header
