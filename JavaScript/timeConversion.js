let timeConversion = (hour) => {
    hour.split("").forEach(element => {
        if (element === "P") {
            console.log("true")
        }
    });
}
timeConversion("07:05:45PM")