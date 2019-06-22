function plusMinus(arr){
    let positivo = 0
    let negativo = 0
    let zero = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivo++
        }
        if (arr[i] < 0) {
            negativo++
        }
        if (arr[i] == 0){
            zero ++
        }
    }
    let respPositivo = positivo / arr.length
    let respNegativo = negativo / arr.length
    let respzero = zero / arr.length
    console.log (respPositivo.toFixed(6))
    console.log (respNegativo.toFixed(6))
    console.log (respzero.toFixed(6))  
}
plusMinus([-4, 3, -9, 0, 4, 1 ])
