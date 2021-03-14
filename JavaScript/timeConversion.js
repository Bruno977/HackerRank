let timeConversion = (hour) => {
    let array = []
    let count = 0
    hour.split("").forEach(element => {
        array.push(element)
        if(element === "P"){
          count++
          array.pop()
        }
        if (element === "A" || element === "M") {array.pop()}
    });
    let newArray = array.join(""). split(":")
    if(count === 1){
      let calcPm = Number(newArray[0]) + 12
      newArray.splice(0, 1, `${calcPm}`)
    }
  console.log(newArray)
}
timeConversion("11:01:00PM")
