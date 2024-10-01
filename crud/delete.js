require('../connection')

const User = require('../models/User')
//eliminar usuario laura
const someFunction = async () => {
    const result = await User.deleteMany({username: 'laura'});
    console.log(result)
 }
 someFunction();