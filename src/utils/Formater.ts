export const secondsSeparator = (time: number = 0) => {
  console.log('####### Length', time)
  const minutes = Math.floor(time / 60)
  console.log('####### minutes', minutes)
  const seconds = time - minutes * 60
  const hours = Math.floor(time / 3600)

  return [seconds, minutes, hours]
}
