const Categoria = require("./Categoria");

module.exports = (sequelize, dataTypes) => {
    let alias = 'SubCategoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        nombre: {type: dataTypes.STRING(50) },
        fkCategoria: {
            type: dataTypes.INTEGER,
            references: { model: Categoria, key: 'id',}}};
    let config = {
        tableName: 'subCategorias',
        timestamps: false };

    const SubCategoria = sequelize.define(alias, cols, config)

    SubCategoria.associate = function(models){
        SubCategoria.belongsTo(models.Categoria,{
            as: 'categoria',
            foreignKey: 'fkCategoria'})
        SubCategoria.hasMany(models.Producto,{
            as: 'producto',
            foreignKey: 'fkSubCategoria'})} 

    return SubCategoria;
}