function diagonalDifference(arr) {
    let leftToRight = 0
    let rigthToLeft = 0
    for (let lin = 0; lin < arr.length; lin++){
      for (let col = 0; col < arr.length; col++) {
        console.log(arr[col][lin])
        lin++
      }
    }
}diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])
