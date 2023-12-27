import { useRoutes } from "react-router-dom"

import { dataLinks } from "@/entities"
import { AddNews, ListNews, Page404 } from "@/pages"

const Routes: any = () =>
  useRoutes([
    {
      path: dataLinks.pageMain,
      element: <ListNews />,
    },
    {
      path: dataLinks.PageAddNews,
      element: <AddNews />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ])

export default Routes
