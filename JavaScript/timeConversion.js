let timeConversion = (hour) => {
    let removePm = hour.split("PM")
    hour.split("").forEach(element => {
        if (element === "P") {
            console.log(removePm.split(":"))
        }
    });
}
timeConversion("07:05:45PM")