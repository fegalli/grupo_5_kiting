module.exports = (sequelize, dataTypes) =>{
    let alias = 'Size';
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

    Size.associate = function(modelos){
        Size.hasMany(modelos.size,{
            as:"product",
            foreignKey: "size_id"
        })
    }
    return Size;

}