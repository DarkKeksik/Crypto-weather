import { useRoutes } from "react-router-dom"
import { AddNews, ListNews, Page404 } from "@/pages"

const Routes: any = () =>
  useRoutes([
    {
      path: "/",
      element: <ListNews />,
    },
    {
      path: "/add-news",
      element: <AddNews />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ])

export default Routes
