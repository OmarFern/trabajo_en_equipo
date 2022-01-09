module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true },
        nombre: { type: dataTypes.STRING(50) }};
    let config = {
        tableName: 'marcas',
        timestamps: false};

    const Marca = sequelize.define(alias, cols, config)

    
     Marca.associate = function(models){
        Marca.hasMany(models.Producto,{
            as: 'producto',
            foreignKey: 'fkMarca' })
    } 

    return Marca;
}