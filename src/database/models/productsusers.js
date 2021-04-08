module.exports = (sequelize, dataTypes) =>{
    let alias = 'Productsusers';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
        
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Productuser = sequelize.define(alias,cols,config);
    return Productuser;

}