export function inline() { // export nomeado (precisa do mesmo nome no import)
  console.log('Export nomeado inline')
}

export default function defaultInline() { // export default (pode importar com qualquer nome)
  console.log('Export default inline')
} //? só 1 default por arquivo