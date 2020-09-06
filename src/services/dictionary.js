const { oldNorseToEnglish, englishToOldNorse } = require('old-norse-ordbok')

const getAll = async () => {
  const oldNorse = await oldNorseToEnglish()
  const english = await englishToOldNorse()

  return {
    oldNorse,
    english,
  }
}

module.exports = {
  getAll,
}
