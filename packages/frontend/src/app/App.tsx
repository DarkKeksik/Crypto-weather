import type { FC } from "react"
import { BrowserRouter } from "react-router-dom"
import { mockAdapter } from "@/shared"
import GlobalStyles from "./global.styles"
import Routes from "./Pages"

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
