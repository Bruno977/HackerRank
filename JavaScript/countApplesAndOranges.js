function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numberApples = 0
  let numberOranges = 0
   apples.forEach((position) => {
     let calcApples = a + position
     if(calcApples >= s && calcApples <= t){numberApples++}
   })
   oranges.forEach((position) => {
     let calcOranges = b + position
     if(calcOranges >=s && calcOranges <= t){numberOranges++}
   })
  console.log(numberApples)
  console.log(numberOranges)
}countApplesAndOranges(2, 3, 1, 5, [2], [-2])
