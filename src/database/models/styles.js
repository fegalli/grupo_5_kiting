module.exports = (sequelize, dataTypes) =>{
    let alias = 'Style';
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
        tableName: 'styles',
        timestamps: false
    }   
    const Style = sequelize.define(alias,cols,config);
    Style.associate = function(modelos){
        Style.hasMany(modelos.Product,{
            as:"products",
            foreignKey: "styleId"
        })
    }



    return Style;

}