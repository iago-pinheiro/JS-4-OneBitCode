function store(){
  console.log("Salvando as informações no banco de dados...")
}

// module.exports = EXPORTA esta função para outros arquivos poderem usar  
// Agora qualquer arquivo pode fazer require("./store.js") e usar esta função
module.exports = store