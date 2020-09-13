# Orðbók JSON

JSON backup of the [Orðbók Old Norse dictionary](https://github.com/stscoundrel/old-norse-ordbok) dataset. In case the original source becomes unavailable.

Can also be used as data source in itself, if you're happy with using filesystem.

### Install

`yarn add ordbok-json`

Or just copy json files from `/json` folder in source.

### Update

To get latest dataset from online source, run in project:

`yarn create-json`

### Use JSON files programmatically

Repo is shipped with files & getters for them. 

```javascript
const { getEnglish, getOldNorse } = require('ordbok-json')

const englishWords  = getEnglish()
const oldNorseWords = getOldNorse()

// Get words starting with letter U
const startsWithU = oldNorseWords.filter(entry => entry.word.charAt(0) === 'u' )

// Get words associated with Old East Norse branch.
const oenWords = oldNorseWords.filter(entry => entry.branch === 'Old East Norse' )

// Get adjectives.
const adjectives = oldNorseWords.filter(entry => entry.type === 'Adjective' )

console.log(startsWithU)
console.log(oenWords)
console.log(adjectives)

```


### Sources

Scraped from word list compiled by [Vikings of Bjornstad](https://www.vikingsofbjornstad.com/Old_Norse_Dictionary_E2N.shtm). The sources for the compiled list come from:

- A. Richard Diebold Center for Indo-European Language and Culture, Linguistics Research Center, The University of Texas at Austin, Old Norse Online Base Form Dictionary, Jonathan Slocum and Todd B. Krause, http://www.utexas.edu/cola/depts/lrc/eieol/norol-BF.html
- E.V. Gordon, An Introduction to Old Norse, Oxford University Press; 2 edition (July 23, 1981), ISBN 9780198111849
- Jesse L. Byock, Viking Language 1, Jules William Press, © 2013, ISBN 9781480216440
- Ross G. Arthur, English-Old Norse Dictionary, www.yorku.ca/inpar/language/English-Old_Norse.pdf
- Jackson Crawford, YouTube Old Norse lecture series, Instructor of Nordic Studies and Nordic Program Coordinator, University of Colorado, Boulder
- Regia Anglorum: Mik Lawson: miklawson@yahoo.co.uk, http://www.mun.ca/mst/heroicage/issues/8/sayers.html
- The Society for Creative Anachronism: http://www.housebarra.com/EP/ep04/12norsecurse.html
- https://www.vikingeskibsmuseet.dk/en/professions/education/knowledge-of-sailing/the-ships-crew/crewmembers-in-the-viking-age/barber-surgeon
