require('../connection')

const User = require('../models/User')
//actualizar nueva contraseña 
async function updateUsers() {
    const user = await User.updateMany({username: 'carla'}, {
        password:'12345'
    });
    console.log(user)
 }
 updateUsers();