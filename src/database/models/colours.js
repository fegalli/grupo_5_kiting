module.exports = (sequelize, dataTypes) =>{
    let alias = 'Colour';
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
    Colour.associate = function(modelos){
        Colour.hasMany(modelos.colour,{
            as:"product",
            foreignKey: "colourId"
        })
    }
    
    
    
    return Colour;

}