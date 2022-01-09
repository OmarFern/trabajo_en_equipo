const Categoria = require("./Categoria");
const SubCategoria = require("./SubCategoria");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true },
        nombre: {type: dataTypes.STRING(50) },
        precio: { type: dataTypes.DECIMAL  },
        descripcion: {type: dataTypes.TEXT },
        imagen: {type: dataTypes.BLOB },
        stock: {type: dataTypes.BOOLEAN },
        fkCategoria: { type: dataTypes.INTEGER },
        fkSubCategoria: {type: dataTypes.INTEGER},
        fkMarca: {type: dataTypes.INTEGER },
        enOferta:{ type: dataTypes.BOOLEAN   },
        deleted:{ type: dataTypes.BOOLEAN    }};
    let config = {
        tableName: 'productos',
        timestamps: false,};

    const Producto = sequelize.define(alias, cols, config)

    Producto.associate = function(models){
         Producto.belongsTo(models.Categoria,{
            foreignKey: 'fkCategoria',
            as: 'categoria'})
         Producto.belongsTo(models.SubCategoria,{
            foreignKey: 'fkSubCategoria',
            as: 'subcategoria'})
        Producto.belongsTo(models.Marca,{
            foreignKey: 'fkMarca',
            as: 'marca'}) 
        Producto.belongsToMany(models.Carrito,{
            as: 'carrito',
            through: 'carritoProductos',
            foreignKey: 'fkProducto',
           
            timestamps: false})} 

    return Producto;
}