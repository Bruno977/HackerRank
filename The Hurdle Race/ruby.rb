def hurdleRace(k, height)
contador = 0
maximo = 0
  for numero in height do
        if maximo < numero
          maximo = numero
        end
  end
  if k > maximo
      return 0
  else
      return maximo - k
  end
end
vetor = [1, 6, 3, 5, 2]
tamanhok = 4
print hurdleRace tamanhok, vetor