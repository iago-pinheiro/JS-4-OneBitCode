// REST PARAMETERS (...nome)
// Permite que uma função receba QUALQUER quantidade de parâmetros
// Todos os parâmetros passados viram automaticamente um ARRAY

//* SINTAXE: function nome(...parametros) { }
//? O "...numbers" coleta TODOS os números em um array
function sum(...numbers) { 
  //? numbers agora é um array com todos os valores passados
  //* Ex: se chamar sum(1,2,3) → numbers = [1,2,3]
  return numbers.reduce((accum, num) => accum + num, 0)
}

// EXEMPLOS: pode passar quantos números quiser!
console.log(sum(1,1))                        // numbers = [1,1] → resultado: 2
console.log(sum(2,2,2,2,2,2,2,2,2,2,2))     // numbers = [2,2,2...] → resultado: 22  
console.log(sum(32, 5, 74, 7, 1, 9, 90))    // numbers = [32,5,74...] → resultado: 218 PARAMETERS: Permite que uma função receba qualquer quantidade de parâmetros e os trate como um array