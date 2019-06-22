function miniMaxSum(arr) {
    arr.sort()
    let primeiro = arr.shift()
    let maior = 0
    let menor = 0
    for (let i = 0; i < arr.length; i++) {
        maior += arr[i]
    }
    console.log(arr)
    arr.unshift(primeiro)
    arr.pop()
    for (let i = 0; i < arr.length; i++) {
        menor += arr[i]
    }
    console.log(menor, maior)
}
console.log(miniMaxSum([7, 69, 2, 221, 8974]))