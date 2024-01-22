import type { FC } from "react"

import { Header, CryptoWeathers } from "@/widgets"
import { NewsList } from "@/entities"
import { WrapPageContent } from "@/shared"

export const ListNews: FC = () => {
  return (
    <>
      <Header />
      <CryptoWeathers />
      <WrapPageContent bgColor="#101820">
        <NewsList />
      </WrapPageContent>
    </>
  )
}
