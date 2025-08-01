// Objeto user com dados aninhados (objetos dentro de objetos)
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

//! Sem encadeamento opcional - daria erro se alguma propriedade não existisse
//! console.log(user.friends[0].phone.ddd)

//? Com encadeamento opcional (?.) - verifica se cada propriedade existe antes de acessar
//? Se user existe, se friends existe, se friends[0] existe, se phone existe, então acessa ddd
console.log(user?.friends[0]?.phone?.ddd) // undefined (friends[0] não tem phone)

//? Verifica se user existe, se brothers existe, então acessa length
//? Como brothers não existe, retorna undefined em vez de erro
console.log(user?.brothers?.length) // undefined

//* Encadeamento opcional com colchetes (?.[]) para acessar índices de array
//? Se brothers existisse e tivesse índice 5, acessaria o name
console.log(user.brothers?.[5].name) // undefined