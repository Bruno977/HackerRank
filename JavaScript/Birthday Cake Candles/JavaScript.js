'use strict'
function birthdayCakeCandles(ar) {
    let contador = 0
    let aux = ar[0]
    ar.sort()
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == aux) {
            contador++
        } 
        if (ar[i] > aux){
            aux = ar[i]
            contador = 1
        }
    }
return(contador)
}
console.log(birthdayCakeCandles([3, 2, 1, 3]))