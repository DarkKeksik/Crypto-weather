import type { FC } from "react"
import { BrowserRouter } from "react-router-dom"

import { mockAdapter } from "@/shared"
import Routes from "./Pages"
import GlobalStyles from "./global.styles"

mockAdapter()

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
