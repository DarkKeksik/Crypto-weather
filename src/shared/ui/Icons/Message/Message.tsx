import { type FC } from "react"

type TIconMessage = {
  size?: string | number
  color?: string
}

export const IconMessage: FC<TIconMessage> = ({
  size = 30,
  color = "#000000",
}) => {
  return (
    <svg
      width={size}
      height={size}
      version="1.0"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M31.23,113.89,30,115.11a5.2,5.2,0,0,1-9-3.48V99.45H19.39A9,9,0,0,1,13,96.79a9.28,9.28,0,0,1-1.82-2.61h-.44A10.75,10.75,0,0,1,0,83.45V10.73A10.68,10.68,0,0,1,2.8,3.56l.36-.4A10.72,10.72,0,0,1,10.73,0h94.41A10.81,10.81,0,0,1,115.7,8.79a9.2,9.2,0,0,1,4.51,2.47,9.05,9.05,0,0,1,2.67,6.4V90.38a9.08,9.08,0,0,1-9.07,9.07h-54L37.39,120.93a3.54,3.54,0,0,1-6.16-2.37v-4.67ZM27.94,60.37a3.54,3.54,0,0,1,0-7.07H76.87a3.54,3.54,0,1,1,0,7.07Zm0-23a3.54,3.54,0,0,1,0-7.07h60a3.54,3.54,0,0,1,0,7.07ZM26.1,111.63,49.71,89h55.43a5.55,5.55,0,0,0,5.54-5.53V10.73a5.58,5.58,0,0,0-5.54-5.53H10.73A5.59,5.59,0,0,0,5.2,10.73V83.45A5.57,5.57,0,0,0,10.73,89H26.1v22.65Z" />
    </svg>
  )
}
