import { useMemo, type FC, useEffect } from "react"

import { Link, dateUtils } from "@/shared"
import * as Styled from "./NewsItem.styled"

type TNewsItem = {
  title?: string
  text?: string
  url?: string
  date?: string
  news_url?: string
  image_url?: string
  sentiment?: string
  topics?: Array<string>
}

const NewsItem: FC<TNewsItem> = ({
  title = "This news has no title",
  text = "This news has no description",
  date,
  news_url,
  image_url,
  sentiment,
  topics,
}) => {
  const [day, mounth, year] = useMemo(
    () => date && dateUtils.parseDateFromString(date),
    [date]
  )

  const sentimentLowerCase = sentiment?.toLowerCase()

  return (
    <Styled.NewsItem>
      <Styled.NewsHeader>
        <Styled.Title title={title}>{title}</Styled.Title>
      </Styled.NewsHeader>

      <Styled.NewsMain>
        {image_url && (
          <Styled.Image source={image_url}>
            <Styled.TagPanel>
              <Styled.Tag status={sentimentLowerCase}>
                {sentimentLowerCase}
              </Styled.Tag>
            </Styled.TagPanel>
          </Styled.Image>
        )}

        <Styled.Description>{text}</Styled.Description>
      </Styled.NewsMain>

      <Styled.NewsFooter>
        <Styled.Link
          as={Link}
          target="__blank"
          linkHref={news_url}
        >
          More details
        </Styled.Link>
        <Styled.Data>{`${day}.${mounth}.${year}`}</Styled.Data>
      </Styled.NewsFooter>
    </Styled.NewsItem>
  )
}

export default NewsItem
