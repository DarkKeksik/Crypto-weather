import { lazy, Suspense } from "react"
import type { FC } from "react"
import { Preloader } from "@/shared"
import * as Styled from "./Weather.styled"
import { type TWeather } from "./Weather.types"

/** All weathers components */
const RainComponent = lazy(
  async () => await import("../Rain/Rain")
)
const FogComponent = lazy(
  async () => await import("../Fog/Fog")
)
const SunnyComponent = lazy(
  async () => await import("../Sunny/Sunny")
)

const Weather: FC<TWeather> = ({
  typeWeather,
  children,
}) => {
  const WeatherByType = () => {
    switch (typeWeather) {
      case "rain":
        return (
          <RainComponent>
            <Styled.WrapChildren>
              {children}
            </Styled.WrapChildren>
          </RainComponent>
        )
      case "fog":
        return (
          <FogComponent>
            <Styled.WrapChildren>
              {children}
            </Styled.WrapChildren>
          </FogComponent>
        )
      case "sunny":
        return (
          <SunnyComponent>
            <Styled.WrapChildren>
              {children}
            </Styled.WrapChildren>
          </SunnyComponent>
        )
      default:
        return (
          <Styled.WrapChildren>
            {children}
          </Styled.WrapChildren>
        )
    }
  }

  return (
    <Suspense fallback={<Preloader />}>
      <WeatherByType />
    </Suspense>
  )
}

export default Weather
