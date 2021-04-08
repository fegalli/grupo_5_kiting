module.exports = (sequelize, dataTypes) =>{
    let alias = 'Styles';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        style: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Style = sequelize.define(alias,cols,config);
    return Style;

}