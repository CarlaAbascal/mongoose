const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/mywebstore'

mongoose.connect(uri);
mongoose.connection.on('open', _ => {
    console.log('Database is connected to ', uri);
})
mongoose.connection.on('error', err => {
    console.log(err);
})
