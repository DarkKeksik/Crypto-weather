import { useMemo, useState } from "react"
import { createPortal } from "react-dom"
import type { FC } from "react"

import {
  Link,
  dateUtils,
  Button,
  Modal,
  Icons,
} from "@/shared"
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
  source_name?: string
}

const NewsItem: FC<TNewsItem> = ({
  title = "This news has no title",
  text = "This news has no description",
  date,
  news_url,
  image_url,
  sentiment,
  topics,
  source_name,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [day, mounth, year, hours, minutes] = useMemo(
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
        <Button
          onClick={() => {
            setShowModal(true)
          }}
        >
          <Icons.IconMessage color="white" size={20} />
          Discussion
        </Button>

        {showModal &&
          createPortal(
            <Modal
              hasFooter={false}
              title={`Discussion "${title}"`}
              onClose={() => setShowModal(false)}
            />,
            document.body
          )}

        <Styled.CreationInfo>
          <Styled.Author>
            by{" "}
            <Styled.Link
              isActive
              as={Link}
              target="__blank"
              linkHref={news_url}
            >
              {source_name}
            </Styled.Link>
          </Styled.Author>

          <Styled.DataTime>
            <Styled.Date>{`${day}.${mounth}.${year}`}</Styled.Date>
            <Styled.Time>
              at {hours}:{minutes}
            </Styled.Time>
          </Styled.DataTime>
        </Styled.CreationInfo>
      </Styled.NewsFooter>
    </Styled.NewsItem>
  )
}

export default NewsItem
