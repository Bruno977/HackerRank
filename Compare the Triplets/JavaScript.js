let a = [11, 5, 6, 8, 1, 5, 4]
let b = [6, 2, 9, 4, 6, 5, 4]
function compareTriplets(a, b) {
    let ContadorAlice = 0
    let ContadorBob = 0
    for (let i = 0; (i < a.length) || (i < b.length); i++) {
       if (a[i] > b[i]){
            ContadorAlice++
       }
       else if (b[i] > a[i]){
           ContadorBob++
       }
    }
    let resultado = ("Alice " + ContadorAlice + ' Bob ' +  ContadorBob)
    return (resultado)
}
console.log(compareTriplets())
