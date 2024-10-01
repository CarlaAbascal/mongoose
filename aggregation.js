require('./connection');

const Product = require('./models/Product')


const listPrice = async () => {
    const aggregation2 = await Product.aggregate([
        {
            $match:{price:{$gt:800}}
        }
    ]);
    console.log('Llista de productes amb un preu major de 800: ')
    console.log(aggregation2)
}
listPrice();


