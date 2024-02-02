import { type FC, useState } from "react"

import {
  Preloader,
  Pagination,
  hooksCommons,
  axiosCustom,
  endpoints,
} from "@/shared"

import NewsItem from "./NewsItem"
import SortingPanel from "../SortingPanel/SortingPanel"
import {
  dataSortingByDate,
  dataSortingByMood,
  dataSortingBySource,
} from "../../config/dataSorting"
import { hooks } from "../../"
import * as Styled from "./NewsList.styled"

const NewsList: FC = () => {
  const [page, setPage] = useState(1)

  const {
    setValDate,
    setValMoods,
    setValSource,
    urlSorting,
  } = hooks.useFilterNews(page)

  const [newsList, loading, error] = hooksCommons.useAxios(
    `${endpoints.cryptoNewsList}${urlSorting}`,
    axiosCustom
  )

  const dataFilterPanel = {
    date: {
      onChange: (newValue: string) => {
        setValDate(newValue)
        setPage(1)
      },
      dataItems: dataSortingByDate,
      placeholder: "By date ...",
    },
    source: {
      onChange: (newValue: string) => {
        setValSource(newValue)
        setPage(1)
      },
      dataItems: dataSortingBySource,
      placeholder: "By source ...",
    },
    mood: {
      onChange: (newValue: string) => {
        setValMoods(newValue)
        setPage(1)
      },
      dataItems: dataSortingByMood,
      placeholder: "By mood ...",
    },
  }

  return (
    <Styled.Wrap>
      <SortingPanel dataSortingPanel={dataFilterPanel} />

      {loading ? (
        <Styled.WrapPreloader>
          <Preloader />
        </Styled.WrapPreloader>
      ) : error ? (
        <Styled.ErrorBlock>
          Something wrong, we can't get news, try again!
        </Styled.ErrorBlock>
      ) : newsList && newsList.data.length > 0 ? (
        <Styled.NewsList>
          {newsList &&
            newsList.data.map(
              (
                {
                  title,
                  text,
                  date,
                  news_url,
                  image_url,
                  sentiment,
                  topics,
                  source_name,
                  tickers,
                },
                id
              ) => (
                <NewsItem
                  key={id}
                  {...{
                    title,
                    text,
                    date,
                    news_url,
                    image_url,
                    sentiment,
                    topics,
                    source_name,
                    tickers,
                  }}
                />
              )
            )}
        </Styled.NewsList>
      ) : (
        <Styled.EmptyBlock>
          We haven't result for this query
        </Styled.EmptyBlock>
      )}

      <Styled.Pagination
        as={Pagination}
        totalPages={newsList?.total_pages}
        pageActive={page}
        onPagination={setPage}
      />
    </Styled.Wrap>
  )
}

export default NewsList
