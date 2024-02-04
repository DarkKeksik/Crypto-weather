import { lazy, Suspense } from "react"
import type { FC } from "react"

import * as Styled from "./Weather.styled"

import { Preloader } from "@/shared"
import { TWeather } from "./Weather.types"

/** All weathers components */
const RainComponent = lazy(() => import("../Rain/Rain"))
const FogComponent = lazy(() => import("../Fog/Fog"))
const SunnyComponent = lazy(() => import("../Sunny/Sunny"))

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
