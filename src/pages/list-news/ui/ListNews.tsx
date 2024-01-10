import { type FC } from "react"

import { Header } from "@/widgets"
import { NewsList, GreetingBlock } from "@/entities"
import { WrapPageContent } from "@/shared"

export const ListNews: FC = () => {
  return (
    <>
      <Header />
      <GreetingBlock />
      <WrapPageContent>
        <NewsList />
      </WrapPageContent>
    </>
  )
}
