//* 1. FUNÇÃO TRADICIONAL (declaração de função)
//? Sintaxe: function nome(parâmetros) { return resultado }
function normalSum(a, b){
  return a + b
}
console.log(`Soma normal: 2 + 2: ${normalSum(2, 2)}`)

//* 2. FUNÇÃO ANÔNIMA (função armazenada em uma variável)
//? Sintaxe: const nome = function(parâmetros) { return resultado }
const anonymousSum = function(a, b) {
  return a + b
} 
console.log(`Soma anônima: 2 + 2: ${anonymousSum(2, 2)}`)

//* 3. ARROW FUNCTION com bloco de código (precisa do return)
//? Sintaxe: const nome = (parâmetros) => { return resultado }
const arrowSum = (a,b) => {
  return a + b
}
console.log(`Soma arrow function: 2 + 2: ${arrowSum(2, 2)}`)

//* 4. ARROW FUNCTION simplificada (sem chaves, return implícito)
//? Sintaxe: const nome = (parâmetros) => resultado
const subtract = (a, b) => a - b
console.log(`Subtração: ${subtract(5, 2)}`)

//* 5. ARROW FUNCTION com apenas UM parâmetro (não precisa de parênteses)
//? Sintaxe: const nome = parâmetro => resultado
const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(double(number))

//* 6. CASO PRÁTICO: Arrow functions em métodos de array
//* Muito usado com filter, map, forEach, etc.
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//* filter() com arrow function: filtra cidades que começam com 'P'
//? town => town[0] === 'P' é uma arrow function que retorna true/false
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)