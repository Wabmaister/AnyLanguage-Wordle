import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"D",
  "u",
  "t",
  "c",
  "h"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
