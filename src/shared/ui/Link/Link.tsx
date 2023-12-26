import { type FC, type PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"

import * as Styled from "./Link.styled"

type TLink = {
  linkHref?: string
} & PropsWithChildren

const Link: FC<TLink> = ({ children, linkHref = "/" }) => (
  <Styled.Link as={NavLink} to={linkHref}>
    {children}
  </Styled.Link>
)

export default Link
