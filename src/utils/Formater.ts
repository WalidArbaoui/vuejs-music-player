export const secondsSeparator = (time: number = 0) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.trunc(time - minutes * 60)
  const hours = Math.floor(time / 3600)
  const str = `${hours > 0 ? `${hours < 10 ? '0' : ''}${hours}:` : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

  return str
}
