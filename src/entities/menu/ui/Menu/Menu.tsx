import { FC } from "react"

import { routing, Link } from "@/shared"
import * as Styled from "./Menu.styled"

const Menu: FC = () => {
  const keysDataLinks = Object.values(routing.dataLinks)

  return (
    <Styled.Wrap>
      {keysDataLinks.map(elem => (
        <Link linkHref={elem.route}>{elem.title}</Link>
      ))}
    </Styled.Wrap>
  )
}

export default Menu
