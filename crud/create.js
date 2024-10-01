require('../connection')

const Product = require('../models/Product')


const createProduct = async () => {
   const pc =  new Product({
        name: 'hp',
        description: 'hp intel i7',
        price: 700
    })
    await pc.save();

    const tv =  new Product({
        name: 'TV',
        description: 'LG',
        price: 1850
    })
    await tv.save();
 }
 createProduct();