import { type FC } from "react"

import { Logo } from "@/entities/logo/ui"
import * as Styled from "./Page404.styled"

export const Page404: FC = () => {
  return (
    <Styled.WrapPage>
      <Logo />
    </Styled.WrapPage>
  )
}
