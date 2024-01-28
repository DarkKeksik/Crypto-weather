import { FC } from "react"

import { TTagsPanel } from "./TagsPanel.types"
import * as Styled from "./TagsPanel.styled"

const TagsPanel: FC<TTagsPanel> = ({ tags, viewType }) => {
  return (
    <Styled.Wrap viewType={viewType}>
      {tags.map(({ type, textVal }) => (
        <Styled.Tag type={type}>{textVal}</Styled.Tag>
      ))}
    </Styled.Wrap>
  )
}

export default TagsPanel
