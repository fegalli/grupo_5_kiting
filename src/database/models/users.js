module.exports = (sequelize, dataTypes) =>{
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.TEXT
        },
        created: {
            type: dataTypes.DATETIME
        },
        password: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const User = sequelize.define(alias,cols,config);

    User.associate =function (modelos){
        User.belongsTo(modelos.Product,{
            as: "products_user",
            through:"productsusers", 
            foreignKey: "user_id",
            orderKey:"product_id",
            timestamps: false

    })
}
    return User;

}