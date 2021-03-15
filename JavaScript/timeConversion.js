let timeConversion = (hour) => {
  let newHour = hour.slice(0, 8).split(":")
  if (hour.indexOf('PM') > -1 && newHour[0] != "12") {
    let calcPm = Number(newHour[0]) + 12
    newHour[0] = calcPm
  }
  if (hour.indexOf('AM') > -1 && newHour[0] === "12"){newHour[0] = "00"}
  return(newHour.join(":"))
}
timeConversion("00:01:00AM")
