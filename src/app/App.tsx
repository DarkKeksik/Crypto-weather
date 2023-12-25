import { type FC } from "react"
import { BrowserRouter } from "react-router-dom"

import { mockAdapter } from "@/shared/api"
import Routes from "./Pages"

mockAdapter()

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
