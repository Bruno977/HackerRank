let staircase = (element) => {
    for (let i = 1; i <= element; i++) {
        console.log(" ".repeat(element - i) + "#".repeat(i))
    }
}
staircase(6)