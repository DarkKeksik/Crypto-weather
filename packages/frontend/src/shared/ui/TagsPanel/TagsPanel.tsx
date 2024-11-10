import { FC } from "react"

import { TTagsPanel } from "./TagsPanel.types"
import * as Styled from "./TagsPanel.styled"

const TagsPanel: FC<TTagsPanel> = ({
  tags,
  viewType,
  size = "s",
}) => {
  return (
    <Styled.Wrap viewType={viewType} size={size}>
      {tags.map(({ type, textVal }, id: number) => (
        <Styled.Tag key={id} type={type}>
          {textVal}
        </Styled.Tag>
      ))}
    </Styled.Wrap>
  )
}

export default TagsPanel
