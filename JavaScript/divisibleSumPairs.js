function divisibleSumPairs(n, k, ar) { 
  let count = 0
  for(let i = 0; i < ar.length; i++){
    for(let j = 0; j < ar.length; j++){
      if((ar[i] + ar[j]) % k === 0){
        if(ar[i] < ar[j]){
          count ++
        }
      }
    }
  }
  return count
}divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
