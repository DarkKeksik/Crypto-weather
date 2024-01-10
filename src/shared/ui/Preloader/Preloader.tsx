import { type FC } from "react"
import * as Styled from "./Preloader.styled"

const Preloader: FC = () => {
  return (
    <Styled.Preloader>
      <Styled.Loader />
    </Styled.Preloader>
  )
}

export default Preloader
