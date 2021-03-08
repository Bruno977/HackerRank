let matriz = (arr) => {
    let rigthToLeft = arr.length
    let leftToRigth = 0
    let sumLeft = 0
    let sumRigth = 0
    arr.forEach(element => {
        rigthToLeft--
        sumRigth += element[rigthToLeft]
        sumLeft += (element[leftToRigth])
        leftToRigth++
    });
    return (Math.abs(sumLeft - sumRigth))
}
console.log(matriz([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
