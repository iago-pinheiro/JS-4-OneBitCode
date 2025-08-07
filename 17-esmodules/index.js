//* 📦 ES MODULES - SISTEMA MODERNO DE MÓDULOS (ES6+)

// import { } = IMPORTA coisas específicas de outros arquivos
// É mais moderno que o require() do CommonJS
// Dentro das {} você lista EXATAMENTE o que quer importar
import { name, label, input, br } from "./functions.js"
// name = variável exportada
// label, input, br = funções exportadas
// "./functions.js" = arquivo de onde vem (SEMPRE precisa da extensão .js)

console.log(name)  // Usa a variável importada
console.log(label({ for: 'fullname', textContent: 'Nome Completo' }))  // Usa função importada
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }))
console.log(br())  // Função que não precisa de parâmetros