//* Operador de Coalescencia Nula: 
//? || → considera 0, "", false, null, undefined como "falsy" 
//? ?? → só considera null e undefined como "nulos"

//* Exemplo 1 - Valores null/undefined
let nome = null
let nomeCompleto = nome ?? "Usuário Anônimo"
console.log(nomeCompleto) // "Usuário Anônimo"

let idade = undefined
let idadeReal = idade ?? 18
console.log(idadeReal) // 18

//* Exemplo 2 - Valores que existem:
let nomePessoa = "João"
let nomePessoaCompleto = nome ?? "Usuário Anônimo"
console.log(nomePessoaCompleto) // "João" (usa o que já existe!)

//* Exemplo da OneBitCode
let a = 0

let b = a || 42

console.log({a, b}) // mostra 42, pois 0 é considerado como false

b = a ?? 42

console.log({a, b}) // mostra 0, pois 0 é um número