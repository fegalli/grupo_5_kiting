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
        nameId: {
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
            as:"brands",
            foreignKey: "brand_id"
        })
        Product.belongsTo(modelos.colour,{
            as:"colours",
            foreignKey: "colour_id"
    })
        Product.belongsTo(modelos.style,{
        as:"styles",
        foreignKey: "style_id"
})
       Product.belongsToMany(models.User,{
        as: "productUser",
        through:"productUsers", 
        foreignKey: "product_id",
        orderKey:"user_id",
        timestamps: false
})  
        Product.belongsTo(modelos.name,{
        as:"names",
        foreignKey: "name_id"
})
        Product.belongsTo(modelos.size,{
        as:"sizes",
        foreignKey: "size_id"
})

}
    return Product;

}

