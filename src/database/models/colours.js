module.exports = (sequelize, dataTypes) =>{
    let alias = 'Colours';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colour: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        tableName: 'kiting',
        timestamps: false
    }   
    const Colour = sequelize.define(alias,cols,config);
    return Colour;

}