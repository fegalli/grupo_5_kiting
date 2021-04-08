module.exports = (sequelize, dataTypes) =>{
    let alias = 'Products';
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
    return Product;

}