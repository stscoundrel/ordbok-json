const { oldNorseToEnglish, englishToOldNorse } = require('old-norse-ordbok')
const fs = require('fs')
const path = require('path')

const toJson = async () => {
  const oldNorse = await oldNorseToEnglish()
  const english = await englishToOldNorse()

  fs.writeFileSync(path.join(`${__dirname}/../json/oldNorseToEnglish.json`), JSON.stringify(oldNorse))
  fs.writeFileSync(path.join(`${__dirname}/../json/englishToOldNorse.json`), JSON.stringify(english))
}

module.exports = {
  toJson,
}
