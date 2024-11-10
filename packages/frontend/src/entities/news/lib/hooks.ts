import { useMemo, useState, useEffect } from "react"
import { libFiltering } from ".."

type TParam = string

export const useFilterNews = (pageNumber: string) => {
  const [valDate, setValDate] = useState<TParam>("")
  const [valMoods, setValMoods] = useState<TParam>("")
  const [valSource, setValSource] = useState<TParam>("")

  const urlSorting = useMemo(
    () =>
      libFiltering.getUrlSorting({
        valDate,
        valMoods,
        valSource,
        pageNumber,
      }),
    [valDate, valMoods, valSource, pageNumber]
  )

  useEffect(() => {}, [
    valDate,
    valMoods,
    valSource,
    pageNumber,
  ])

  return {
    setValDate,
    setValMoods,
    setValSource,
    urlSorting,
  }
}
