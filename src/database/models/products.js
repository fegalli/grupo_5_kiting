module.exports = (sequelize, dataTypes) =>{
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comments: {
            type: dataTypes.TEXT
        },
        created: {
            type: dataTypes.DATETIME
        },
        updated: {
            type: dataTypes.DATETIME
        },
        price: {
            type: dataTypes.INTEGER
        },
        name_id: {
            type: dataTypes.INTEGER
        },
        size_id: {
            type: dataTypes.INTEGER
        },
        colour_id: {
            type: dataTypes.INTEGER
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        style_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Product = sequelize.define(alias,cols,config);
    
    Product.associate = function(modelos){
        Product.belongsTo(modelos.brand,{
            as:"brand",
            foreignKey: "brand_id"
        })
        Product.belongsTo(modelos.colour,{
            as:"colour",
            foreignKey: "colour_id"
    })
        Product.belongsTo(modelos.style,{
        as:"style",
        foreignKey: "style_id"
})
       Product.belongsTo(models.User,{
        as: "products_user",
        through:"productsusers", 
        foreignKey: "product_id",
        orderKey:"user_id",
        timestamps: false
})  
        Product.belongsTo(modelos.name,{
        as:"name",
        foreignKey: "name_id"
})
        Product.belongsTo(modelos.size,{
        as:"size",
        foreignKey: "size_id"
})

}
    return Product;

}

