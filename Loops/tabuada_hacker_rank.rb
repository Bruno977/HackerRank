n = gets.to_i
contador = 0
tabuada = 0
while contador <= 9
  contador += 1
  tabuada = contador * n
  puts "#{n} x #{contador} = #{tabuada}"
end