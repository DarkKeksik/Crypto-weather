import type { FC } from "react"
import * as Styled from "./Pagination.styled"

type TTablePanel = {
  totalPages: number
  pageActive: number
  onPagination: (arg: number) => void
  paginationTotal?: number
}

// @TODO need refactoring and optimisation
const Pagination: FC<TTablePanel> = ({
  totalPages,
  pageActive = 1,
  onPagination,
}) => {
  const getPagesList = () => {
    if (totalPages <= 5) {
      return Array(totalPages)
        .fill("")
        .map((item, val) => val + 1)
    }

    switch (pageActive) {
      case 1:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 2:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 3:
        return [
          pageActive - 1,
          pageActive,
          pageActive + 1,
          pageActive + 2,
        ]
      case totalPages - 1:
        return [pageActive - 2, pageActive - 1, pageActive]
      case totalPages - 2:
        return [
          pageActive - 2,
          pageActive - 1,
          pageActive,
          pageActive + 1,
        ]
      case totalPages:
        return [pageActive - 2, pageActive - 1, pageActive]
      default:
        return [
          pageActive - 2,
          pageActive - 1,
          pageActive,
          pageActive + 1,
          pageActive + 2,
        ]
    }
  }

  const isVisibleButtons = () => {
    return [
      pageActive !== 1 &&
        totalPages >= 5 &&
        pagesListArr[0] !== 1,
      pageActive !== totalPages &&
        totalPages >= 5 &&
        totalPages !== pagesListArr.at(-1),
    ]
  }

  const pagesListArr = getPagesList()
  const [isButtonStart, isButtonLast] = isVisibleButtons()

  if (!totalPages) {
    return null
  }

  return (
    <Styled.Pagination>
      {isButtonStart && (
        <>
          <Styled.Item
            onClick={() => {
              onPagination(1)
            }}
          >
            1
          </Styled.Item>
          <p>...</p>
        </>
      )}

      <Styled.Items>
        {pagesListArr.map((item, id) => (
          <Styled.Item
            key={id}
            onClick={() => {
              onPagination(item)
            }}
            isActive={item === pageActive}
          >
            {item}
          </Styled.Item>
        ))}
      </Styled.Items>

      {isButtonLast && (
        <>
          <p>...</p>
          <Styled.Item
            onClick={() => {
              onPagination(totalPages)
            }}
          >
            {totalPages}
          </Styled.Item>
        </>
      )}
    </Styled.Pagination>
  )
}

export default Pagination
