let timeConversion = (hour) => {
    let array = []
    hour.split("").forEach(element => {
        array.push(element)
        if (element === "P" || element === "A" || element === "M") {
            array.pop()
        }
    });
    array.join("").split(":")
}
timeConversion("07:05:45PM")