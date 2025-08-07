//* 📦 COMMONJS - SISTEMA DE MÓDULOS DO NODE.JS

// require() = IMPORTA código de outros arquivos
// É como "puxar" funções/variáveis de outros lugares para usar aqui
const render = require("./render.js")  // Importa tudo que foi exportado do render.js
const store = require("./store.js")    // Importa tudo que foi exportado do store.js

console.log('Aplicação iniciada')
// Agora posso usar as funções que importei
render()  // Executa a função que veio do arquivo render.js
store()   // Executa a função que veio do arquivo store.js
console.log("Aplicação finalizada")