module.exports = (sequelize, dataTypes) =>{
    let alias = 'Name';
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
    Name.associate = function(modelos){
        Name.hasMany(modelos.name,{
            as:"product",
            foreignKey: "nameId"
        })
    }


    return name;

}