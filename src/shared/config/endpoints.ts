/**
 *
 * #############
 *  Crypto News api doc:
 *  https://rapidapi.com/NovusAPI/api/crypto-news16/
 *  https://cryptonews-api.com/
 * #############
 */

// Roots
export const rootRapidApi = {
  short: "crypto-news16.p.rapidapi.com",
  full: "https://crypto-news16.p.rapidapi.com",
}

export const rootCryptoNews = {
  short: "cryptonews-api.com/api/v1",
  full: "https://cryptonews-api.com/api/v1",
}

// Endpoints rapidapi
export const rapidapiList = "/news"
export const rapidapiCoindesk = "/news/coindesk"
export const rapidapiCoincu = "/news/coincu"
export const rapidapiCoinTelegraph = "/news/cointelegraph"
export const rapidapiCoinJournal = "/news/coinjournal"
export const rapidapiCryptoNinjas = "/news/cryptoninjas"
export const rapidapiYahooFinance = "/news/yahoo"

export const rapidapiCreate = "/news/create"
export const rapidapiDelete = "/news/delete"
export const rapidapiUpdate = "/news/update"

// Endpoints crypto news
export const cryptoNewsList = "/category?section=alltickers"
export const cryptoNewsCoindesk = `${cryptoNewsList}&source=Coindesk`
export const cryptoNewsCoincu = `${cryptoNewsList}&source=coincu`
export const cryptoNewsCoinTelegraph = `${cryptoNewsList}=&source=cointelegraph`
export const cryptoNewsCoinJournal = `${cryptoNewsList}&source=coinjournal`
export const cryptoNewsCryptoNinjas = `${cryptoNewsList}&source=cryptoninjas`
export const cryptoNewsYahooFinance = `${cryptoNewsList}&source=yahoo`

export const cryptoNewsCreate = "/news/create"
export const cryptoNewsDelete = "/news/delete"
export const cryptoNewsUpdate = "/news/update"
