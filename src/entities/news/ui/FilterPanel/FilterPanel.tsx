import type { FC } from "react"

import { Select } from "@/shared"
import * as Styled from "./FilterPanel.styled"

type TFilterPanel = {
  dataSortingPanel: any
}

const FilterPanel: FC<TFilterPanel> = ({
  dataSortingPanel,
}) => {
  return (
    <Styled.FilterPanel>
      {dataSortingPanel &&
        Object.keys(dataSortingPanel).map(
          (filterName, id) => (
            <Select
              key={id}
              onChange={
                dataSortingPanel[filterName].onChange
              }
              dataItems={
                dataSortingPanel[filterName].dataItems
              }
              placeholder={
                dataSortingPanel[filterName].placeholder
              }
            />
          )
        )}
    </Styled.FilterPanel>
  )
}

export default FilterPanel
