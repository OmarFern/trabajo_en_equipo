module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        rol: {type: dataTypes.STRING(50)}};
    let config = {
        tableName: 'roles',
        timestamps: false};
    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function (models) {
        Rol.hasMany(models.Usuario, {
            as: 'usuario',
            foreignKey: 'fkRol'})}

    return Rol;
}