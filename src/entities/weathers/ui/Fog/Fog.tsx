import type { FC, PropsWithChildren } from "react"
import { useRef, useEffect, useState } from "react"
import FOG from "vanta/dist/vanta.fog.min.js"

import * as Styled from "./Fog.styled"

const Fog: FC<PropsWithChildren> = ({ children }) => {
  const refEl = useRef<HTMLCanvasElement>(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: refEl.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          highlightColor: 0xefefef,
          midtoneColor: 0x909090,
          lowlightColor: 0x777777,
          baseColor: 0xefefef,
          blurFactor: 0.52,
          speed: 1,
          zoom: 1.4,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Styled.Wrap>
      <Styled.Fog ref={refEl} />
      {children}
    </Styled.Wrap>
  )
}

export default Fog
