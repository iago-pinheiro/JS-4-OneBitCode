//* ARRAY ORIGINAL
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//? Mostra o array completo: ['Prontera', 'Izlude', ...]
console.log(towns)

//* OPERADOR SPREAD (...) "espalha" os elementos do array
//? Em vez de mostrar o array, mostra cada elemento separado
//? Resultado: Prontera Izlude Payon Alberta Geffen Morroc
console.log(...towns)

//* Spread em uma STRING (towns[0] = 'Prontera')
//? "Espalha" cada letra da palavra: P r o n t e r a
console.log(...towns[0])

//! CÓPIA POR REFERÊNCIA (PERIGOSO!)
//? townsCopy aponta para o MESMO array que towns, porque ele tem towns como referência
//? Mudanças em townsCopy afetam towns também!
const townsCopy = towns

townsCopy.pop()      // Remove 'Morroc'
townsCopy.pop()      // Remove 'Geffen'
townsCopy.push('Juno') // Adiciona 'Juno'

//! PROBLEMA: tanto towns quanto townsCopy foram alterados!
console.log({ towns, townsCopy })

//* CÓPIA REAL COM SPREAD (SEGURO!)
//? [...towns] cria um NOVO array com os mesmos elementos
//? townsClone é independente de towns
const townsClone = [...towns]

townsClone.push('Aldebaran') //? Adiciona só no clone

//? Agora: towns permanece inalterado, só townsClone mudou
console.log({ towns, townsCopy, townsClone }) 

//* SPREAD COM OBJETOS
//? {...towns} converte o array em objeto usando índices como chaves
//? Resultado: { 0: 'Prontera', 1: 'Izlude', 2: 'Payon', 3: 'Alberta' }
const townsObj = { ...towns }

//* CLONANDO OBJETOS COM SPREAD
//? Cria uma cópia independente do objeto townsObj
const townsObjClone = { ...townsObj}

//? Adiciona uma propriedade só no clone
townsObjClone.test = "Test"

//? townsObj permanece sem a propriedade 'test'
//? townsObjClone tem a propriedade 'test' adicionada
console.log({ townsObj, townsObjClone})