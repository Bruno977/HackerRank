def solve(meal_cost, tip_percent, tax_percent)
    resultado_com_imposto = (meal_cost * tip_percent) / 100
    resultado_imposto = (meal_cost * tax_percent) / 100
    resultado_final =  meal_cost + resultado_com_imposto + resultado_imposto
    return resultado_final.round
end
puts "Valor Da Refeição"
meal = gets.to_f
puts "Valor Da Refeição Com Imposto"
tip = gets.to_i
puts "Valor Apenas Do Imposto"
tax = gets.to_i
puts "Valor Total : #{solve meal, tip, tax}"

