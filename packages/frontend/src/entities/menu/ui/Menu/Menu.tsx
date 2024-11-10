import { FC } from "react"

import { routing, Link } from "@/shared"
import * as Styled from "./Menu.styled"

const Menu: FC = () => {
  const keysDataLinks = Object.values(routing.dataLinks)

  return (
    <Styled.Wrap>
      {keysDataLinks.map((elem, id) => (
        <Styled.Link
          key={id}
          as={Link}
          linkHref={elem.route}
        >
          {elem.title}
        </Styled.Link>
      ))}
    </Styled.Wrap>
  )
}

export default Menu
