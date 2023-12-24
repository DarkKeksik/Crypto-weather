import { useEffect, type FC } from "react"

import { mockAdapter, requests } from "@/shared/api"

mockAdapter()

const App: FC = () => {
  useEffect(() => {
    requests.readNewsCoindesk()
    requests.createNewsCoindesk()
  }, [])

  return <p>d21d2d</p>
}

export default App
