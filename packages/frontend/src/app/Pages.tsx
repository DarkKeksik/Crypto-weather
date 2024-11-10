import { useRoutes } from "react-router-dom"
import { AddNews, ListNews, Page404 } from "@/pages"
import { dataLinks } from "@/shared"

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
