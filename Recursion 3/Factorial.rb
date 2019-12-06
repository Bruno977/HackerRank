def factorial(n)
  contador = 1
  auxfatorial = n
  while n > contador
    auxfatorial = auxfatorial * contador
    contador += 1
  end
    print auxfatorial
end
factorial 11