import MockAdapter from "axios-mock-adapter"

import { endpoints } from "../config"
import { axiosCustom } from "../lib"

const axiosMockAdapter: any = (skip: boolean) => {
  if (skip) {
    return
  }

  const mock = new MockAdapter(axiosCustom, {
    delayResponse: 2000,
  })

  mock
    .onGet(
      `${endpoints.rootCryptoNews}${endpoints.cryptoNewsCoindesk}`
    )
    .reply(200, { test: "News list coindesk" })

    .onPost(
      `${endpoints.rootCryptoNews}${endpoints.cryptoNewsCreate}`
    )
    .reply(200, { test: "Created news" })

    .onPatch(
      `${endpoints.rootCryptoNews}${endpoints.cryptoNewsUpdate}`
    )
    .reply(200, { test: "Update news" })

    .onDelete(
      `${endpoints.rootCryptoNews}${endpoints.cryptoNewsDelete}`
    )
    .reply(200, { test: "Delete news" })

    .onAny()
    .passThrough()
}

export default axiosMockAdapter
