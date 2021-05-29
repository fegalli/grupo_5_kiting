const path = require('path');
const db = require('../../database/models');

module.exports = {
    index : (req,res) => {
        const products = db.Product.findAll()
        const brands = db.Brand.findAll()
        const sizes = db.Size.findAll()
        Promise.all([products, brands,sizes])
        .then(([products, brands,sizes]) => {
            let respuesta = {
                meta : {
                    status : 200,
                    total: 3,
                    url: 'api/home/index'
                },
                data : {
                    totalProducts : products.length,
                    totalBrands : brands.length,
                    totalsizes : sizes.length
                }
            }
            res.json(respuesta)
        })
    }
}


// .then(products => {
//     let respuesta = {
//         meta: {
//             status : 200,
//             total: products.length,
//             url: 'api/products'
//         },
//         data: products
//     }
//         res.json(respuesta);
//     })