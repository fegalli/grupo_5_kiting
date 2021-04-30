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
        tableName: 'names',
        timestamps: false
    }   
    const Name = sequelize.define(alias,cols,config);
    
    Name.associate = function(modelos){
        Name.hasMany(modelos.Product,{
            as:"product",
            foreignKey: "nameId"
        })
    }
    return Name;
}