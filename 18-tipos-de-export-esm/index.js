import { inline } from "./inline.js" // import de export nomeado (mesmo nome)
import defaultInline from "./inline.js" // import do export default (nome livre)
import { group } from "./non-inline.js" // outro export nomeado
import exportDefault from "./non-inline.js" // export default do arquivo

inline()
defaultInline()

group()
exportDefault()