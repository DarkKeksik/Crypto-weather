import { axiosCustom, endpoints } from "@/shared"

export const readNewsFiltered = async (
  extraQueryFields,
  callbackFinally,
  callbackError
) =>
  await axiosCustom
    .post(
      `${endpoints.cryptoNewsCreate}${extraQueryFields}`
    )
    .then(({ data }) => data)
    .catch(() => {
      callbackError?.()
    })
    .finally(() => {
      callbackFinally?.()
    })
