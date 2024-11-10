import type { PropsWithChildren } from "react"

type TWeathers = "rain" | "sunny" | "fog"

export type TWeather = {
  typeWeather: TWeathers
} & PropsWithChildren
