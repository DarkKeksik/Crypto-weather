import { rootCryptoNews, rootRapidApi } from "./endpoints"

export const authKeys = {
  rapidApi:
    "b0a40b6f8dmsh7191941810eedc9p111a2djsnf203f4ecdd7e",
  cryptonewsApi: "l3euy62pj9szzapptdd49q8frjccgnoavua03pdu",
} as const

const axiosConfigDefault = {
  baseURL: rootCryptoNews.full,
  timeout: 10000,
} as const

export const axiosConfigRapidApi = {
  baseURL: rootCryptoNews.full,
  headers: {
    "X-RapidAPI-Key": authKeys.rapidApi,
    "X-RapidAPI-Host": rootRapidApi.short,
  },
  timeout: 10000,
} as const

export default axiosConfigDefault
