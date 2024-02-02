import { FC } from "react"

import { Weather, SelectCryptocurrency } from "@/entities"

import {
  WrapPageContent,
  LiningBg,
  TagsPanel,
} from "@/shared"

import * as Styled from "./CryptoWeathers.styled"
import cryptoHouseImg from "./cryptoHouse.png"

const CryptoWeathers: FC = () => {
  return (
    <WrapPageContent bgColor="linear-gradient(rgba(253, 119, 163, 1), rgba(16, 24, 32, 1))">
      <Styled.WrapCryptoWeathers>
        <Styled.WrapDescription>
          <Styled.Title>
            Cryptocurrency sentiment analytics
          </Styled.Title>
          <Styled.DescriptionCryptoWeather>
            The service allows you to&nbsp;analyze a
            cryptocurrency unit based on&nbsp;news sentiment
            from different sources and visually display
            sentiment in&nbsp;weather equivalent, try
            it&nbsp;for free!
          </Styled.DescriptionCryptoWeather>
          <SelectCryptocurrency />
        </Styled.WrapDescription>
        <LiningBg source={cryptoHouseImg}>
          <Weather typeWeather="rain">
            <Styled.AlignRight>
              <TagsPanel
                viewType="col"
                tags={[
                  { type: "neutral", textVal: "BTC" },
                  { type: "negative", textVal: "Negative" },
                  { type: "neutral", textVal: "30 days" },
                ]}
              />
            </Styled.AlignRight>
          </Weather>
        </LiningBg>
      </Styled.WrapCryptoWeathers>
    </WrapPageContent>
  )
}

export default CryptoWeathers
