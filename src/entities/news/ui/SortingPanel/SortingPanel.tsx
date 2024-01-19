import type { FC } from "react"

import { Select } from "@/shared"
import * as Styled from "./SortingPanel.styled"

type TFilterPanel = {
  dataSortingPanel: any
}

const FilterPanel: FC<TFilterPanel> = ({
  dataSortingPanel,
}) => {
  return (
    <Styled.FilterPanel>
      {dataSortingPanel &&
        Object.keys(dataSortingPanel).map(filterName => (
          <Select
            onChange={dataSortingPanel[filterName].onChange}
            dataItems={
              dataSortingPanel[filterName].dataItems
            }
            placeholder={
              dataSortingPanel[filterName].placeholder
            }
          />
        ))}
    </Styled.FilterPanel>
  )
}

export default FilterPanel
