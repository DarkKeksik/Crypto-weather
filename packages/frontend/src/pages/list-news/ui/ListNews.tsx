import type { FC } from "react"

import { Header, CryptoWeathers } from "@/widgets"
import { NewsList } from "@/entities"
import { WrapPageContent } from "@/shared"

import * as Styled from "./ListNews.styled"

export const ListNews: FC = () => {
  return (
    <>
      <Header />
      <Styled.MainContent>
        <WrapPageContent bgColor="linear-gradient(rgba(253, 119, 163, 1), rgba(16, 24, 32, 1))">
          <CryptoWeathers />
        </WrapPageContent>

        <WrapPageContent bgColor="#101820">
          <NewsList />
        </WrapPageContent>
      </Styled.MainContent>
    </>
  )
}
