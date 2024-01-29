import { useRef, useId, useState, useEffect } from "react"
import type { FC } from "react"

import * as Styled from "./Select.styled"

type TItems = {
  text: string
  value: string
}

type TSelect = {
  placeholder?: string
  id?: string
  dataItems?: Array<TItems>
  onChange?: (val: string) => void
}

const Select: FC<TSelect> = ({
  dataItems,
  onChange,
  id = "idSelect",
  placeholder,
}) => {
  const [selectedValue, setSelectedValue] =
    useState(placeholder)
  const [isActive, setIsActive] = useState(false)
  const selectRef = useRef(null)
  const idUnique = useId()

  const onChangeSelect = (
    text: string,
    value: string | number
  ) => {
    selectRef.current.value = value
    setSelectedValue(text)
    setIsActive(false)
    onChange && onChange(value)
  }

  return (
    <Styled.Wrap>
      <Styled.SelectHide
        id={`${id}_${idUnique}`}
        ref={selectRef}
      >
        {dataItems?.map(({ value, text }, id) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </Styled.SelectHide>

      <Styled.SelectCustom>
        <Styled.ValueSelected
          onClick={() => setIsActive(!isActive)}
        >
          {selectedValue}
        </Styled.ValueSelected>

        <Styled.WrapAnimation>
          <Styled.Values isActive={isActive}>
            {dataItems?.map(({ text, value }, id) => (
              <Styled.OptionCustom
                key={id}
                onClick={() => onChangeSelect(text, value)}
              >
                {text}
              </Styled.OptionCustom>
            ))}
          </Styled.Values>
        </Styled.WrapAnimation>
      </Styled.SelectCustom>
    </Styled.Wrap>
  )
}

export default Select
