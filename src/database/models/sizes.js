module.exports = (sequelize, dataTypes) =>{
    let alias = 'Sizes';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Size = sequelize.define(alias,cols,config);
    return Size;

}