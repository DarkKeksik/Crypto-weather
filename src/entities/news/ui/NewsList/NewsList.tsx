import {
  type FC,
  useEffect,
  useState,
  Fragment,
} from "react"

import { requests, Preloader, Pagination } from "@/shared"
import NewsItem from "./NewsItem"
import * as Styled from "./NewsList.styled"

const NewsList: FC = () => {
  const [page, setPage] = useState(1)
  const [news, setNews] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      await requests.readNewsCoindesk(
        `&items=3&page=${page}`,
        data => setNews(data),
        () => setIsLoading(false)
      )
    })()
  }, [page])

  if (isLoading) {
    return (
      <Styled.WrapPreloader>
        <Preloader />
        <Pagination
          totalPages={news?.total_pages}
          pageActive={page}
          onPagination={setPage}
        />
      </Styled.WrapPreloader>
    )
  }

  return (
    <>
      <Styled.NewsList>
        {news &&
          news.data.map(
            (
              {
                title,
                text,
                date,
                news_url,
                image_url,
                sentiment,
                topics,
              },
              id
            ) => (
              <Fragment key={id}>
                <NewsItem
                  {...{
                    title,
                    text,
                    date,
                    news_url,
                    image_url,
                    sentiment,
                    topics,
                  }}
                />
              </Fragment>
            )
          )}
      </Styled.NewsList>
      <Pagination
        totalPages={news?.total_pages}
        pageActive={page}
        onPagination={setPage}
      />
    </>
  )
}

export default NewsList
