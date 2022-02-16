import { CONFIG } from './config'

export const VALIDGUESSES = [
"dirty",
"thing",
"avail",
"moose",
"annul",
"jokie",
"preen",
"felly",
"swack",
"roomy",
"denty",
"chirl",
"gully",
"eatin",
"awash",
"wadge",
"aizle",
"magic",
"blunt",
"toved",
"moyen",
"cowie",
"waist",
"nebby",
"awald",
"grump",
"pavie",
"scowp",
"yokie",
"plout",
"hoond",
"fadge",
"pikin",
"atter",
"sawer",
"champ",
"viled",
"hairy",
"gulph",
"mease",
"stime",
"cloup",
"windy",
"deith",
"oamin",
"froun",
"weary",
"peace",
"moust",
"denee",
"kenna",
"scush",
"cruet",
"otter",
"raker",
"sneer",
"spite",
"wheem",
"slate",
"swall",
"cakit",
"lease",
"oorie",
"spare",
"actor",
"short",
"weeny",
"eggle",
"three",
"bigly",
"tidin",
"weave",
"gruse",
"plowp",
"sloum",
"speck",
"cairn",
"gadge",
"stork",
"stake",
"spree",
"steid",
"alane",
"actin",
"issue",
"herts",
"threw",
"snoke",
"thaim",
"smack",
"grist",
"aixle",
"inlat",
"brats",
"pally",
"bygae",
"wytin",
"frame",
"glimp",
"neist",
"oulet",
"glaur",
"scart",
"beuch",
"rawly",
"dinky",
"ample",
"stour",
"guiss",
"quean",
"guess",
"forby",
"eatit",
"uggin",
"swang",
"whang",
"tangs",
"blunk",
"blend",
"think",
"jougs",
"basin",
"gypin",
"knife",
"glent",
"glaze",
"niver",
"thred",
"later",
"blind",
"prize",
"dytin",
"huird",
"iller",
"onpit",
"quail",
"noise",
"queek",
"sowel",
"wring",
"biled",
"gravy",
"mowes",
"creel",
"jabby",
"notar",
"hasky",
"while",
"gauge",
"plite",
"twine",
"teuch",
"douce",
"pouce",
"mauch",
"cleek",
"wifes",
"cawer",
"ontae",
"nosin",
"aitch",
"human",
"juice",
"cowan",
"crums",
"dytit",
"thrum",
"bribe",
"cairt",
"slaik",
"pouky",
"aiver",
"aweel",
"bodin",
"ortit",
"spill",
"fence",
"track",
"dukes",
"plump",
"anker",
"cater",
"smite",
"gliff",
"fruit",
"prood",
"liefu",
"aller",
"ammle",
"kiver",
"clink",
"mince",
"harns",
"plunk",
"ragin",
"equal",
"gusht",
"skint",
"ploum",
"marls",
"guile",
"stuir",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
