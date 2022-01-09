module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true },
        nombre: {type: dataTypes.STRING(50)},
        apellido: {type: dataTypes.STRING(50)  },
        usuario: {type: dataTypes.STRING(50)  },
        email: { type: dataTypes.STRING(100)   },
        password: { type: dataTypes.STRING(255)    },
        imagen: { type: dataTypes.STRING(255)  },
        domicilio: {  type: dataTypes.STRING(50)  },
        fkRol: { type: dataTypes.INTEGER },
        deleted:{  type: dataTypes.BOOLEAN    } };
    let config = {
        tableName: 'usuarios',
        timestamps: false, };

    const Usuario = sequelize.define(alias, cols, config)

     Usuario.associate = function(models){
        Usuario.belongsTo(models.Rol,{
            as: 'rol',
            foreignKey: 'fkRol'})
     Usuario.hasOne(models.Carrito,{
            as: 'carrito',
            foreignKey: 'fkUsuario' })  } 

    return Usuario;
}