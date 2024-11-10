import type { FC, PropsWithChildren } from "react"
import { useRef, useEffect } from "react"
import { rainPaint } from "../../lib/rain"
import * as Styled from "./Rain.styled"

const Rain: FC<PropsWithChildren> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    rainPaint(canvasRef.current)
  }, [])

  return (
    <Styled.Wrap>
      <Styled.Canvas ref={canvasRef} />
      {children}
    </Styled.Wrap>
  )
}

export default Rain
