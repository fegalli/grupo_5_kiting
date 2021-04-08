module.exports = (sequelize, dataTypes) =>{
    let alias = 'Names';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const name = sequelize.define(alias,cols,config);
    return name;

}