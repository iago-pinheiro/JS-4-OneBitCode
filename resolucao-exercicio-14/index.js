// 📊 FUNÇÃO 1: MÉDIA ARITMÉTICA SIMPLES
// Calcula a média simples: soma todos os números e divide pela quantidade
const average = (...numbers) => {
  // ...numbers = rest parameter - pega TODOS os argumentos e coloca num array
  // Ex: average(3, 6, 10, 9) → numbers = [3, 6, 10, 9]
  
  // reduce() = percorre o array somando tudo
  // accum = acumulador (começa em 0)
  // num = cada número do array
  // a cada volta: accum = accum + num
  const sum = numbers.reduce((accum, num) => accum + num, 0) 
  
  // Divide a soma pela quantidade de números
  return sum / numbers.length
}

// Testa a função: (3+6+10+9)/4 = 28/4 = 7
console.log(`Média Aritmética Simples:${average(3, 6, 10, 9)}`)

// 📊 FUNÇÃO 2: MÉDIA PONDERADA 
// Cada número tem um "peso" diferente na média
const weightedAverage = (...entries) => {
  // entries = array de objetos: [{number: 9, weight: 3}, {number: 7}, ...]
  
  // Soma cada número multiplicado pelo seu peso
  // { number, weight } = desestruturação do objeto
  // weight ?? 1 = se weight não existir, usa 1 (coalescência nula)
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
  
  // Soma todos os pesos (para dividir depois)
  // entry.weight ?? 1 = se não tem peso, considera peso 1
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  
  // Divide a soma ponderada pela soma dos pesos
  return sum / weightSum
}

// Testa: (9×3 + 7×1 + 10×1) ÷ (3+1+1) = (27+7+10) ÷ 5 = 44÷5 = 8.8
console.log(`Média Ponderada: ${weightedAverage(
  { number: 9, weight: 3 }, // 9 com peso 3
  { number: 7 },            // 7 com peso 1 (padrão)
  { number: 10, weight: 1 }, // 10 com peso 1
)}`)

// 📊 FUNÇÃO 3: MEDIANA
// É o número do meio quando você organiza em ordem crescente
const median = (...numbers) => {
  // [...numbers] = cria uma CÓPIA do array original (não modifica o original)
  // sort((a, b) => a - b) = ordena do menor para o maior
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  
  // Math.floor() = arredonda para baixo
  // Acha a posição do meio do array
  const middle = Math.floor(orderedNumbers.length / 2) 
  
  // % = resto da divisão
  // Se o resto da divisão por 2 é diferente de 0, o número é ÍMPAR
  if (orderedNumbers.length % 2 !== 0) {
    // Se quantidade ímpar, pega o número do meio
    return orderedNumbers[middle]
  }
  
  // Se quantidade par, pega os dois números do meio
  const firstMedian = orderedNumbers[middle - 1]  // número antes do meio
  const secondMedian = orderedNumbers[middle]     // número depois do meio
  
  // Calcula a média dos dois números do meio
  return average(firstMedian, secondMedian)
}

// Teste 1: [2,4,5,7,42,99] → 6 números (par) → meio entre 5 e 7 → (5+7)/2 = 6
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
// Teste 2: [3,7,8,14,15] → 5 números (ímpar) → número do meio = 8
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

// 📊 FUNÇÃO 4: MODA
// É o número que mais aparece na lista
const mode = (...numbers) => {
  // Para cada número, cria um array com [número, quantas_vezes_aparece]
  const quantities = numbers.map(num => [
    num, // o próprio número
    numbers.filter(n => num === n).length // conta quantas vezes esse número aparece
  ])
  // Exemplo: [1,1,4,4,4] vira → [[1,2], [1,2], [4,3], [4,3], [4,3]]
  
  // Ordena pelos que mais aparecem primeiro
  // b[1] - a[1] = ordem decrescente pela quantidade (índice 1 do array)
  quantities.sort((a, b) => b[1] - a[1])
  
  // Pega o primeiro elemento (que mais aparece) e retorna só o número (índice 0)
  return quantities[0][0]
}

// Teste: o número 4 aparece 4 vezes (mais que qualquer outro)
console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)