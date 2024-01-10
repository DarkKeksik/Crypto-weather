export const parseDateFromString = (date: string) => {
  const instanceDate = new Date(date)

  return [
    `0${instanceDate.getDate()}`.slice(-2),
    `0${instanceDate.getMonth() + 1}`.slice(-2),
    instanceDate.getFullYear(),
    instanceDate.getHours(),
    instanceDate.getMinutes(),
  ]
}
