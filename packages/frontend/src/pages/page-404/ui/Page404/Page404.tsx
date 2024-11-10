import type { FC } from "react"
import { Logo } from "@/entities"
import { Description, Link } from "@/shared"
import * as Styled from "./Page404.styled"

export const Page404: FC = () => {
  return (
    <Styled.WrapPage>
      <Logo />
      <Description>
        <Styled.Title>Oyy sheep, 404!</Styled.Title>
        <Styled.Text>
          But, don't worry and try again from
          <Link isActive>main page.</Link>
        </Styled.Text>
      </Description>
    </Styled.WrapPage>
  )
}
