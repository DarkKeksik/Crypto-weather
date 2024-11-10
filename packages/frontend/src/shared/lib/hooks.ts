import { useEffect, useState } from "react"
import {
  urlsUtils,
  authKeys,
  type typesCommons,
} from "@/shared"

type TUrl = string

type TAxiosConfigRequest = {
  method: typesCommons.TMethodRequest
  url: string
}

export const useAxios = (
  url: TUrl,
  axiosClient,
  axiosConfigRequest?: TAxiosConfigRequest
) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const urlWithToken = urlsUtils.buildUrlWithToken(
    authKeys.cryptonewsApi,
    url
  )

  const axiosConfig = axiosConfigRequest || {
    method: "get",
    url: urlWithToken,
  }

  const getData = async () => {
    await axiosClient(axiosConfig)
      .then(({ data }) => {
        setData(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    setError(false)
    getData()
  }, [url])

  return [data, loading, error]
}
