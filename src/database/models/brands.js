module.exports = (sequelize, dataTypes) =>{
    let alias = 'Brands';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Brand = sequelize.define(alias,cols,config);
    return Brand;

}