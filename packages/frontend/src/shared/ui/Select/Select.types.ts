export type TItems = {
  text: string
  value: string
}

export type TSelect = {
  placeholder?: string
  id?: string
  dataItems: Array<TItems>
  onChange?: (val: string) => void
}
