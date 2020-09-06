const path = require('path')

const OLD_NORSE_JSON = path.join(`${__dirname}/../../json/oldNorseToEnglish.json`)
const ENGLISH_JSON = path.join(`${__dirname}/../../json/englishToOldNorse.json`)

module.exports = {
  OLD_NORSE_JSON,
  ENGLISH_JSON,
}
