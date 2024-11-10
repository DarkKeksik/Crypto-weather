import { type FC } from "react"
import * as Styled from "./TagsPanel.styled"
import { type TTagsPanel } from "./TagsPanel.types"

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
