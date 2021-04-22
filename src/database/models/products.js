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
        price: {
            type: dataTypes.INTEGER
        },
        nameId: {
            type: dataTypes.INTEGER
        },
        sizeId: {
            type: dataTypes.INTEGER
        },
        colourId: {
            type: dataTypes.INTEGER
        },
        brandId: {
            type: dataTypes.INTEGER
        },
        styleId: {
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
            foreignKey: "brandId"
        })
        Product.belongsTo(modelos.colour,{
            as:"colours",
            foreignKey: "colourId"
        })
        Product.belongsTo(modelos.style,{
        as:"styles",
        foreignKey: "styleId"
})
       Product.belongsToMany(models.User,{
        as: "productUser",
        through:"productUsers", 
        foreignKey: "productId",
        orderKey:"userId",
        timestamps: false
})  
        Product.belongsTo(modelos.name,{
        as:"names",
        foreignKey: "nameId"
})
        Product.belongsTo(modelos.size,{
        as:"sizes",
        foreignKey: "sizeId"
})

}
    return Product;

}

