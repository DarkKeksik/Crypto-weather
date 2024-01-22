import type { FC } from "react"
import { useRef, useEffect } from "react"

import { rainPaint } from "../../lib/rain"
import * as Styled from "./Rain.styled"

const Rain: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    rainPaint(canvasRef.current)
  }, [])

  return <Styled.Canvas ref={canvasRef} />
}

export default Rain
