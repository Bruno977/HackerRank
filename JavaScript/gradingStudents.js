let gradingStudents = (grades) => {
  let array = []
  grades.forEach((number) => { 
    if((number + 2) % 5 === 0 && number >= 38){
      array.push(number + 2)
    }else  if((number + 1) % 5 === 0 && number >= 38){
      array.push(number + 1)
    }
    else{array.push(number)}
  })
  return array
}
gradingStudents([ 74, 67, 38, 33 ])
