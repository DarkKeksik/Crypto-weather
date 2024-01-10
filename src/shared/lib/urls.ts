export const buildUrlWithToken = (
  token: string,
  ...partsUrl: Array<string>
) => {
  const builtUrl: string = partsUrl.reduce(
    (acc, item) => `${acc}${item}`
  )

  return `${builtUrl}&token=${token}`
}
