"use strict"
let array = []
function exibeNumero(entrada) {
    for (let i = 1; i < entrada; i++) {
        array.push("#".repeat(i))
  }
  for (const linha of array) {
    console.log(linha.padStart(entrada-1, ' '))
}
}
exibeNumero(10)