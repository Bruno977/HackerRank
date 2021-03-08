def reverse_array n
    espaco_string = ""
    n.reverse_each{|numeros| print "#{numeros} #{espaco_string}"}
end
reverse_array [10, 2, 5, 1, 9]
