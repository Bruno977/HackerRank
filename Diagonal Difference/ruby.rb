def diagonalDifference(arr)
    contador = 0
    contador_2 = arr 
    soma = 0
    soma_2 = 0
      arr.each do |primeiro_array|
        soma = soma + primeiro_array[contador]
        soma_2 += primeiro_array[contador_2]
        contador += 1
        contador_2 -= 1
      end
      print soma
      print soma_2
  end
  diagonalDifference [[11, 2, 4], [4, 5, 6], [10, 8, -12]]