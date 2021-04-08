module.exports = (sequelize, dataTypes) =>{
    let alias = 'Users';
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
    return User;

}