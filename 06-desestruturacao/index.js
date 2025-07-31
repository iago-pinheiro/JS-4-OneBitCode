//* DESESTRUTURAÇÃO DE OBJETOS:
const person = {
  name: 'Luke',
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

//* JEITO "antigo" - pegando propriedade uma por uma
const name = person.name

//* JEITO ESPERTO (destructuring) - extraindo múltiplas propriedades de uma vez
//? Cria as variáveis 'job' e 'parents' automaticamente com os valores do objeto
const { job, parents } = person

//* Resultado: name="Luke", job="Farmer", parents=["Anakin", "Padme"]
console.log(name, job, parents)

//--------------------------------------------------------------------------------------------
//* DESESTRUTURAÇÃO DE ARRAYS
//? Como arrays não têm "nomes" nas posições, ele usa a ORDEM/SEQUÊNCIA
//? father = posição [0] = "Anakin" 
//? mother = posição [1] = "Padme"
//? Você escolhe os nomes das variáveis!
const [father, mother] = parents

//---------------------------------------------------------------------------------------------
//* DESESTRUTURAÇÃO EM FUNÇÕES

//* JEITO "antigo" - função recebe o objeto inteiro
// function createUser(person){
//   const id = Math.floor(Math.random() * 9999)
//   return {
//     id,
//     name: person.name,      //? Precisa acessar person.name
//     job: person.job,        //? Precisa acessar person.job
//     parents: person.parents //? Precisa acessar person.parents
//   }
// }

//* JEITO ESPERTO - destructuring nos PARÂMETROS da função
//? A função já "extrai" as propriedades que precisa automaticamente
//? Em vez de receber 'person', recebe diretamente { name, job, parents }
function createUser({ name, job, parents }){
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,      //? name: name (já extraído)
    job,       //? job: job (já extraído)
    parents    //? parents: parents (já extraído)
  }
}

//? Passa o objeto person, mas a função só pega o que precisa
const luke = createUser(person)
console.log(luke)