// export = EXPORTA para outros arquivos poderem importar
// Diferente do module.exports, aqui você exporta na DECLARAÇÃO

// Exporta uma variável
export const name = "Iago"

// Exporta uma função
export function label(atrributes){
  const element = document.createElement('label')
  Object.assign(element, atrributes)  // Adiciona todos os atributos ao elemento
  return element
}

// Exporta outra função
export function input(attributes){
  const element = document.createElement('input')
  Object.assign(element, attributes)  // Adiciona todos os atributos ao elemento
  return element
}

// Exporta função simples
export function br(){
  const element = document.createElement('br')  // <br> não precisa de atributos
  return element
}