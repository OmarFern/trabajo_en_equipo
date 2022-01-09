module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
    let cols = {
                id: {
                    type: dataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true },
                cantidad: { type: dataTypes.INTEGER},
                total: {type: dataTypes.DECIMAL},
                fkUsuario: {type: dataTypes.INTEGER} };
    let config = {tableName: 'carrito',timestamps: false};

    const Carrito = sequelize.define(alias, cols, config)

    Carrito.associate = function(models){
        Carrito.belongsTo(models.Usuario,{foreignKey: 'fkUsuario',as: 'usuario' })
        Carrito.belongsToMany(models.Producto,{
            as: 'producto',
            through: 'carritoProductos',
            foreignKey: 'fkCarrito',
            timestamps: false
        })
    } 

    return Carrito;
}