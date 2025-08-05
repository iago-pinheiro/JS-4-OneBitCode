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

const mediana = (...numbers) => {
  numbers.sort((a, b) => a - b)
  const parOuImpar = numbers.length % 2
  if(parOuImpar === 0){
    const meioUm = (numbers.length / 2) - 1
    const meioDois = numbers.length / 2
    const media = (numbers[meioUm] + numbers[meioDois]) / 2
    return media
  } else{
    const meio = (numbers.length - 1) / 2
    return numbers[meio]
  }
}  

// console.log(mediana(2, 4, 5, 7, 42, 99))
// console.log(mediana(15, 14, 8, 7, 3))

const moda = (...numbers) => {
  const contador = {}
  for (let numero of numbers) {
    if (contador[numero]) {
      contador[numero]++      
    } else {
      contador[numero] = 1  
    }
  }

  let moda = 0 
  let maiorContagem = 0
  
  for (let numero in contador){
    if (contador[numero] > maiorContagem){
      moda = numero
      maiorContagem = contador[numero]
    }
  }

  return moda
}

console.log(mediana(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))