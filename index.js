require('./connection')

const Product = require('./models/Product')
const User = require('./models/User')

async function main() {
    const product1  = new Product({
        name: 'laptop',
        description: 'Lenovo',
        price: 850.00
    })
    
    const productSaved = await product1.save();

    const user1 = new User({
        username: 'carla',
        password: '1234'
    })
    const userSaved = await user1.save();

    const user2 = new User({
        username: 'luis',
        password: '1234'
    })
    await user2.save();

    
    console.log(productSaved);
    console.log(userSaved);
 }
    main();