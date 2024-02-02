import { lazy, Suspense } from "react"
import type { FC } from "react"

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
        return <RainComponent>{children}</RainComponent>
      case "fog":
        return <FogComponent>{children}</FogComponent>
      case "sunny":
        return <SunnyComponent>{children}</SunnyComponent>
      default:
        return children
    }
  }

  return (
    <Suspense fallback={<Preloader />}>
      <WeatherByType />
    </Suspense>
  )
}

export default Weather
