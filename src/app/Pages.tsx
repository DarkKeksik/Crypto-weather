import { useRoutes } from "react-router-dom"

import { dataLinks } from "@/shared"
import { AddNews, ListNews, Page404 } from "@/pages"

const Routes: any = () =>
  useRoutes([
    {
      path: dataLinks.pageMain.route,
      element: <ListNews />,
    },
    {
      path: dataLinks.PageAddNews.route,
      element: <AddNews />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ])

export default Routes
