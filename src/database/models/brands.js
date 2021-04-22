module.exports = (sequelize, dataTypes) =>{
    let alias = 'Brand';
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
    Brand.associate = function(modelos){
        Brand.hasMany(modelos.brand,{
            as:"product",
            foreignKey: "brand_id"
        })
    }
    
    
    return Brand;

}
