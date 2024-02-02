import { useMemo } from "react"
import type { FC } from "react"

import type { TypesSelect } from "@/shared"
import { Select } from "@/shared"
import dataTickers from "../config/tickers.json"

const SelectCryptocurrency: FC<TypesSelect.TSelect> = ({
  onChange,
  ...propsOther
}) => {
  const dataTickersSelect = useMemo(
    () =>
      dataTickers.data.map(({ ticker, name }) => ({
        text: name,
        value: ticker,
      })),
    []
  )
  return (
    <Select
      dataItems={dataTickersSelect}
      onChange={onChange}
      placeholder="Select cryptocurrency"
      {...propsOther}
    />
  )
}

export default SelectCryptocurrency
