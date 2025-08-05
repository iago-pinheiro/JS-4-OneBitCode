// De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

// Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).
const mediaAritmetica = (...numbers) => {
  const soma = numbers.reduce((accum, num) => accum + num, 0)
  return soma / numbers.length
}

// console.log(mediaAritmetica(2, 6, 3, 7, 4))

const mediaAritmeticaPonderada = (...numbers) => {
  const somaNP = numbers.reduce((acumulador, num) => acumulador + num.n * num.p, 0)
  const somaP = numbers.reduce((acumulador, num) => acumulador + num.p, 0)
  return somaNP / somaP
}

// console.log(mediaAritmeticaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))

