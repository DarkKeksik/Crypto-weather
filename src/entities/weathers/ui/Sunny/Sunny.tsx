import type { FC, PropsWithChildren } from "react"
import { useRef, useEffect, useState } from "react"
import CLOUDS from "vanta/dist/vanta.clouds.min.js"

import * as Styled from "./Sunny.styled"

const Sunny: FC<PropsWithChildren> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: canvasRef.current,
          gyroControls: false,
          touchControls: false,
          mouseControls: false,
          skyColor: "#fd77a4",
          sunColor: "#000",
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Styled.Wrap>
      <Styled.Sunny ref={canvasRef} />
      {children}
    </Styled.Wrap>
  )
}

export default Sunny
