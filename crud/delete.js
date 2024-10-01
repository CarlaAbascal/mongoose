require('../connection')

const User = require('../models/User')
//eliminar usuario pepe
const someFunction = async () => {
    const result = await User.deleteMany({username: 'pepe'});
    console.log(result)
 }
 someFunction();