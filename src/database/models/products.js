module.exports = (sequelize, dataTypes) =>{
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
        tableName: 'products',
        timestamps: false
    }   
    const Product = sequelize.define(alias,cols,config);
    
    Product.associate = function(modelos){
        Product.belongsTo(modelos.Brand,{
            as:"brand",
            foreignKey: "brandId"
        })
        Product.belongsTo(modelos.Colour,{
            as:"colour",
            foreignKey: "colourId"
        })
        Product.belongsTo(modelos.Style,{
        as:"style",
        foreignKey: "styleId"
})
       Product.belongsToMany(modelos.User,{
        as: "Users",
        through:"productUsers", 
        foreignKey: "productId",
        orderKey:"userId",
        timestamps: false
})  
        Product.belongsTo(modelos.Name,{
        as:"name",
        foreignKey: "nameId"
})
        Product.belongsTo(modelos.Size,{
        as:"sizes",
        foreignKey: "sizeId"
})

}
    return Product;
}

