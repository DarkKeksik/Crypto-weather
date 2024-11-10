import type { FC, PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import * as Styled from "./Link.styled"

type TLink = {
  linkHref?: string
  target?: string
  isActive?: boolean
} & PropsWithChildren

const Link: FC<TLink> = ({
  children,
  linkHref = "/",
  target,
  isActive,
}) => (
  <Styled.Link
    as={NavLink}
    to={linkHref}
    target={target}
    isActive={isActive}
  >
    {children}
  </Styled.Link>
)

export default Link
