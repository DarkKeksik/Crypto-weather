import type { FC, PropsWithChildren } from "react"
import * as Styled from "./Modal.styled"

type TModal = {
  title?: string
  Header?: React.ReactNode
  Footer?: React.ReactNode
  hasFooter?: boolean
  onClose: () => void
} & PropsWithChildren

const Modal: FC<TModal> = ({
  title = "",
  Header,
  Footer,
  hasFooter = true,
  children,
  onClose,
}) => {
  return (
    <Styled.Wrap onClick={onClose}>
      <Styled.Content
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <Styled.Header>
          {Header || (
            <>
              <Styled.Title title={title}>
                {title}
              </Styled.Title>
            </>
          )}
        </Styled.Header>
        <Styled.Main>{children}</Styled.Main>
        {hasFooter && (
          <Styled.Footer>
            {Footer || <div>Footer</div>}
          </Styled.Footer>
        )}
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default Modal
