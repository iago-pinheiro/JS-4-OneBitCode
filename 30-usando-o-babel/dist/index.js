"use strict";

// De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.

// Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).
var mediaAritmetica = function mediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var soma = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return soma / numbers.length;
};

// console.log(mediaAritmetica(2, 6, 3, 7, 4))

var mediaAritmeticaPonderada = function mediaAritmeticaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var somaNP = numbers.reduce(function (acumulador, num) {
    return acumulador + num.n * num.p;
  }, 0);
  var somaP = numbers.reduce(function (acumulador, num) {
    return acumulador + num.p;
  }, 0);
  return somaNP / somaP;
};

// console.log(mediaAritmeticaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))

var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  numbers.sort(function (a, b) {
    return a - b;
  });
  var parOuImpar = numbers.length % 2;
  if (parOuImpar === 0) {
    var meioUm = numbers.length / 2 - 1;
    var meioDois = numbers.length / 2;
    var media = (numbers[meioUm] + numbers[meioDois]) / 2;
    return media;
  } else {
    var meio = (numbers.length - 1) / 2;
    return numbers[meio];
  }
};

// console.log(mediana(2, 4, 5, 7, 42, 99))
// console.log(mediana(15, 14, 8, 7, 3))

var moda = function moda() {
  var contador = {};
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var numero = _numbers[_i];
    if (contador[numero]) {
      contador[numero]++;
    } else {
      contador[numero] = 1;
    }
  }
  var moda = 0;
  var maiorContagem = 0;
  for (var _numero in contador) {
    if (contador[_numero] > maiorContagem) {
      moda = _numero;
      maiorContagem = contador[_numero];
    }
  }
  return moda;
};
console.log(mediana(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));