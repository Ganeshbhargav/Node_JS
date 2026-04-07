const getFirstNameFunc = require('../utilities/utils/index')
const names = require('../country/state/city/index')
function getPeopleInCity(names) {
  const firstName = getFirstNameFunc(names)
  return firstName
}
// getPeopleInCity(names)

module.exports = getPeopleInCity
