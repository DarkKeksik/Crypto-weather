/**
 * @TODO should move to a file for objects entities
 */

import {
  authKeys,
  urlsUtils,
  axiosCustom,
  endpoints,
} from "@/shared"

type TCallback = () => void
type TCallbackResolve = (data: Array<any>) => void
type TQuery = string

type TAxiosCustom = {
  extraQueryFields?: TQuery
  callbackResolve?: TCallbackResolve
  callbackFinally?: TCallback
  callbackError?: TCallback
}

const defaultParamsRead = "&items=1"

/**
 * C - Created
 * R - Read
 * U - Update
 * D - Delete
 */
export const createNews = async (
  extraQueryFields: TQuery,
  callbackFinally?: TCallback,
  callbackError?: TCallback
) =>
  await axiosCustom
    .post(
      `${endpoints.cryptoNewsCreate}${extraQueryFields}`
    )
    .then(({ data }) => data)
    .catch(() => {
      callbackError && callbackError()
    })
    .finally(() => {
      callbackFinally && callbackFinally()
    })

export const readNewsAll = async ({
  extraQueryFields,
  callbackResolve,
  callbackFinally,
  callbackError,
}: TAxiosCustom) =>
  await axiosCustom
    .get(
      urlsUtils.buildUrlWithToken(
        authKeys.cryptonewsApi,
        endpoints.cryptoNewsList,
        defaultParamsRead,
        extraQueryFields
      )
    )
    .then(({ data }) => {
      callbackResolve && callbackResolve(data)
    })
    .catch(() => {
      callbackError && callbackError()
    })
    .finally(() => {
      callbackFinally && callbackFinally()
    })

export const updateNews = async (
  extraQueryFields: TQuery,
  callbackFinally?: TCallback,
  callbackError?: TCallback
) =>
  await axiosCustom
    .patch(
      `
        ${endpoints.cryptoNewsUpdate}${extraQueryFields}
        `
    )
    .then(({ data }) => data)
    .catch(() => {
      callbackError && callbackError()
    })
    .finally(() => {
      callbackFinally && callbackFinally()
    })

export const deleteNews = async (
  extraQueryFields: TQuery,
  callbackFinally?: TCallback,
  callbackError?: TCallback
) =>
  await axiosCustom
    .delete(
      `${endpoints.cryptoNewsDelete}${extraQueryFields}`
    )
    .then(({ data }) => data)
    .catch(() => {
      callbackError && callbackError()
    })
    .finally(() => {
      callbackFinally && callbackFinally()
    })
