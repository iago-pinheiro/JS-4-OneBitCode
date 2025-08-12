// Nesse exercício você irá treinar uma habilidade muito importante para qualquer programador, a capacidade de aprender a utilizar bibliotecas de terceiros.
// Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no terminal a idade dessa pessoa no dia atual, sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo aniversário dela. Para isso, você deverá utilizar o módulo **dayjs**, disponível no npm.
// Para aprender a utilizar o dayjs você deverá acessar o site do npm (https://www.npmjs.com/) e pesquisar por esse módulo. A página da dayjs no npm irá mostrar como utilizar essa biblioteca. Você também deve consultar a documentação do dayjs, disponível em https://day.js.org/.
// Nessa aplicação você não utilizará o browser, **você deverá utilizar o Node.js**. Para executar seu arquivo com o Node.js basta acessar a pasta onde ele está localizado com o terminal e digitar o comando `node seu_arquivo.js`. Além disso, **você deverá utilizar a sintaxe dos módulos CommonJS** para trabalhar com o dayjs, ou seja, a função `require()`.
// **Dica:** Para resolver o exercício tente procurar pelos métodos de adicionar um intervalo de tempo a uma data (add), calcular a diferença entre uma data e outra (diff) e exibir uma data em um formato específico (format).

const dayjs = require("dayjs")
const customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

function dateOfBirth(dateString){
  const birthDate = dayjs(dateString, 'DD/MM/YYYY')
  const currentAge = dayjs().diff(birthDate, 'year')

  const thisYearBirthday = birthDate.year(dayjs().year())
  const nextAnniversary = thisYearBirthday.add(1, 'year')

  const daysForTheNextBirthday = nextAnniversary.diff(dayjs(), 'days')

  return console.log(`Idade no dia atual: ${currentAge}\nPróxima data de aniversário: ${nextAnniversary.format('DD/MM/YYYY')}\nQuantos dias para o próximo aniverśario: ${daysForTheNextBirthday}`)
}

dateOfBirth('23/03/2007')