module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true },
        nombre: { type: dataTypes.STRING(50)},
        imagen: { type: dataTypes.BLOB    },};
    let config = {
        tableName: 'categorias',
        timestamps: false};
    
    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = function(models){
        Categoria.hasMany(models.SubCategoria,{
            as: 'sub_categoria',
            foreignKey: 'fkCategoria' })
    Categoria.hasMany(models.Producto,{
            as: 'producto',
            foreignKey: 'fkCategoria'}) } 

    return Categoria;
}