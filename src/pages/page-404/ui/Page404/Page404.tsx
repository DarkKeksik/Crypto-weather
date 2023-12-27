import { type FC } from "react"

import { Description, Link } from "@/shared"
import { Logo } from "@/entities"
import * as Styled from "./Page404.styled"

export const Page404: FC = () => {
  return (
    <Styled.WrapPage>
      <Logo />
      <Description color="white">
        <Styled.Title>Oyy sheep, 404!</Styled.Title>
        <p>
          But, don't worry and try again from
          <Link>main page.</Link>
        </p>
      </Description>
    </Styled.WrapPage>
  )
}
