export const listToStringWithComma = (list: string[]) => {
  if (list.length === 0) return ''
  let replacedStr = ''
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      replacedStr += list[i]
    } else {
      replacedStr += `, ${list[i]}`
    }
  }
  return replacedStr
}
