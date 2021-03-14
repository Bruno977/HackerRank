let timeConversion = (hour) => {
  let newHour = hour.split(":")
  if (hour.indexOf('PM') > -1) {
    let calcPm = Number(newHour[0]) + 12
    String(calcPm.splice(0, 1, `${calcPm}`))
  }
}
timeConversion("11:01:00PM")