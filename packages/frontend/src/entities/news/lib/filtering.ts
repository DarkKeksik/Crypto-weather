import { endpoints } from "@/shared"

type TGetUrlSorting = {
  [keys: string]: string
}

/**
 * @TODO need refactoring getUrlSorting
 */
export const getUrlSorting = ({
  pageNumber,
  valDate,
  valMoods,
  valSource,
}: TGetUrlSorting) => {
  const {
    cryptoNewsSortingByDate,
    cryptoNewsSortingByMood,
    cryptoNewsSortingBySource,
  } = endpoints

  const objUrl = {
    valDefault: `&items=6&page=${pageNumber}`,
    valDate: "",
    valMoods: "",
    valSource: "",
  }

  if (valDate.length) {
    objUrl.valDate = `${cryptoNewsSortingByDate}${valDate}`
  } else {
    objUrl.valDate = ""
  }

  if (valMoods.length) {
    objUrl.valMoods = `${cryptoNewsSortingByMood}${valMoods}`
  } else {
    objUrl.valMoods = ""
  }

  if (valSource.length) {
    objUrl.valSource = `${cryptoNewsSortingBySource}${valSource}`
  } else {
    objUrl.valSource = ""
  }

  return Object.values(objUrl).reduce(
    (acc, item) => `${acc}${item}`
  )
}
