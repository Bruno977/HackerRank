'use strict'
function compareTriplets(a, b) {
    let contadorana = 0
    let contadorbob = 0
    for (let i = 0; i < b.length; i++) {
        if (a[i] > b[i]) {
            contadorana++
        }
        if (a[i] < b[i]){
            contadorbob++
        }
    }
    return[contadorana, contadorbob]  
}
let ana = [5,6,7]
let bob = [3,6,10]
console.log(compareTriplets(ana, bob))
