import { FC } from "react"

import { LiningBg } from "@/shared"
import * as Styled from "./GreetingBlock.styled"
import cryptoHouseImg from "./cryptoHouse.png"

const GreetingBlock: FC = () => {
  return (
    <Styled.Wrap>
      <LiningBg source={cryptoHouseImg} />
    </Styled.Wrap>
  )
}

export default GreetingBlock
