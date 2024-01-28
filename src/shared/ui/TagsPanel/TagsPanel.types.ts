export type TTagTypes = "positive" | "neutral" | "negative"

export type TType = {
  type?: TTagTypes
}

export type TViewTypes = "col" | "row"

export type TViewType = { viewType: TViewTypes }

export type TTag = {
  textVal?: string
} & TType

export type TTagsPanel =
  | {
      tags: Array<TTag>
    }
  | TViewType
