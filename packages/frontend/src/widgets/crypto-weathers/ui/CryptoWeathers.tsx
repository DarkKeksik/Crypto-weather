import { useState } from "react"
import type { FC } from "react"

import { Weather, SelectCryptocurrency } from "@/entities"
import {
  hooksCommons,
  axiosCustom,
  TagsPanel,
  Preloader,
  Description,
} from "@/shared"

import * as Styled from "./CryptoWeathers.styled"

/** Have to rework whit component */
const CryptoWeathers: FC = () => {
  const [ticker, setTicker] = useState("BTC")
  const [dataSentiment, loading, error] =
    hooksCommons.useAxios(
      `/stat?&tickers=${ticker}&date=last30days&page=1`,
      axiosCustom
    )

  const getTypeWeather = (sentimentScore: number) => {
    if (sentimentScore <= 0.1) return "rain"
    else if (sentimentScore >= 0.3) return "sunny"
    else return "fog"
  }

  const dataWeatherToTags = {
    sunny: "positive",
    rain: "negative",
    fog: "neutral",
  }

  return (
    <Styled.WrapCryptoWeathers>
      <Styled.WrapDescription>
        <Styled.Title>
          Cryptocurrency sentiment analytics
        </Styled.Title>

        <Description>
          The service allows you to&nbsp;analyze a
          cryptocurrency unit based on&nbsp;news sentiment
          from different sources and visually display
          sentiment in&nbsp;weather equivalent, try
          it&nbsp;for free!
        </Description>

        <Styled.DescriptionPanel>
          <Description>Select cryptocurrency:</Description>
          <SelectCryptocurrency onChange={setTicker} />
        </Styled.DescriptionPanel>
      </Styled.WrapDescription>

      {loading ? (
        <Preloader />
      ) : error ? (
        "Error"
      ) : dataSentiment &&
        Boolean(
          dataSentiment.total[ticker] &&
            dataSentiment.total[ticker]["Sentiment Score"]
        ) ? (
        <Weather
          typeWeather={getTypeWeather(
            dataSentiment.total[ticker]["Sentiment Score"]
          )}
        >
          <Styled.AlignRight>
            <TagsPanel
              size="m"
              viewType="col"
              tags={[
                { type: "neutral", textVal: ticker },
                {
                  type: dataWeatherToTags[
                    getTypeWeather(
                      dataSentiment.total[ticker][
                        "Sentiment Score"
                      ]
                    )
                  ],
                  textVal:
                    dataWeatherToTags[
                      getTypeWeather(
                        dataSentiment.total[ticker][
                          "Sentiment Score"
                        ]
                      )
                    ],
                },
                {
                  type: "neutral",
                  textVal: "30 days",
                },
              ]}
            />
            <Styled.DescriptionsExtra>
              <Styled.DescriptionsExtraItem>
                Total news:{" "}
                {dataSentiment.total[ticker][
                  "Total Positive"
                ] +
                  dataSentiment.total[ticker][
                    "Total Negative"
                  ] +
                  dataSentiment.total[ticker][
                    "Total Neutral"
                  ]}
              </Styled.DescriptionsExtraItem>
              <Styled.DescriptionsExtraItem>
                Positive:{" "}
                {
                  dataSentiment.total[ticker][
                    "Total Positive"
                  ]
                }
              </Styled.DescriptionsExtraItem>
              <Styled.DescriptionsExtraItem>
                Negative:{" "}
                {
                  dataSentiment.total[ticker][
                    "Total Negative"
                  ]
                }
              </Styled.DescriptionsExtraItem>
              <Styled.DescriptionsExtraItem>
                Neutral:{" "}
                {
                  dataSentiment.total[ticker][
                    "Total Neutral"
                  ]
                }
              </Styled.DescriptionsExtraItem>
            </Styled.DescriptionsExtra>
          </Styled.AlignRight>
          <Styled.CryptoHouseImg />
        </Weather>
      ) : (
        "There are no news"
      )}
    </Styled.WrapCryptoWeathers>
  )
}

export default CryptoWeathers
