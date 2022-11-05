// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)
// !Local
const secret = 'super secret'
// share

const name1 = 'Lucas'
const name2 = 'Ron'
const name3 = 'Hermione'


const sayHi = require('./SayHi')

sayHi(name1)