import { endpoints } from "@/shared"

export const authKey =
  "b0a40b6f8dmsh7191941810eedc9p111a2djsnf203f4ecdd7e"

export const axiosConfigDefault = {
  baseURL: endpoints.rootCryptoNews,
  headers: {
    "X-RapidAPI-Key": authKey,
    "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
  },
  timeout: 10000,
} as const
