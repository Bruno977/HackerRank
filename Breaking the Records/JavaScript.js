function breakingRecords(scores) {
    let maximo = scores[0]
    let minimo = scores[0]
    let contadormax = 0
    let contadormin = 0
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maximo) {
            maximo = scores[i]
            contadormax++
        }
        if (scores[i] < minimo) {
            minimo = scores[i]
            contadormin++
        }
    }
    return [contadormax, contadormin]
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])