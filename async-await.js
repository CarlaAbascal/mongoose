require('./connection')

const Product = require('./models/Product')

async function main(){
    const product = new Product ({
        name: 'keyboard',
        description: 'Gaming RGB',
        price: 100
    })
    
    const productSaved = await product.save();
    return productSaved
}
main()
    .then(productSaved =>console.log(productSaved))
    .catch(err => console.log(err))

