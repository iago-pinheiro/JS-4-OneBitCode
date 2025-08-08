function group() { // função comum a ser exportada depois
  console.log('Export nomeado não-inline (agrupado)')
}

function a () {}
function b () {}
function c () {}
function d () {}

function exportDefault() { // será o default
  console.log('Export default não-inline')
}

export { group, a, b, c, d } // export nomeado em bloco (pode exportar várias)

export default exportDefault // export default separado