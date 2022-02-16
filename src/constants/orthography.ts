import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "a",
  "b",
  "c",
  "d",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
