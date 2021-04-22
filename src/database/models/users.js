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
        User.belongsToMany(modelos.Product,{
            as: "productsUser",
            through:"productsUsers", 
            foreignKey: "userId",
            orderKey:"productId",
            timestamps: false

    })
}
    return User;

}