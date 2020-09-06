const dictionary = require('./services/dictionary.js')
const { write } = require('./services/writer.js')
const { read } = require('./services/reader.js')
const { ENGLISH_JSON, OLD_NORSE_JSON } = require('./constants/paths')

const toJson = async () => {
  const { oldNorse, english } = await dictionary.getAll()

  write(oldNorse, OLD_NORSE_JSON)
  write(english, ENGLISH_JSON)
}

const getEnglish = () => {
  const words = read(ENGLISH_JSON)

  return words
}

const getOldNorse = () => {
  const words = read(OLD_NORSE_JSON)

  return words
}

module.exports = {
  toJson,
  getEnglish,
  getOldNorse,
}
