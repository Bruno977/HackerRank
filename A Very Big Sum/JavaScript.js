function aVeryBigSum(ar) {
    let soma = 0
    for (const numeros of ar) {
        soma += numeros
    }
    return(soma)
}
console.log(aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]))