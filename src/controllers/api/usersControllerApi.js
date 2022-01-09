const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

/* let array = []; */

const usuariosControllerApi = {
  list: (req, res) => {
    let promesaUsuario = db.Usuario.findAll({
      where: { deleted: 0 },
      attributes: {
        exclude: [
          "usuario",
          "password",
          "imagen",
          "fkRol",
          "deleted",
          "domicilio",
        ],
      },
    });

    promesaUsuario.then((usuarios) => {
      usuarios.forEach((element) => {
        element.dataValues.detail =
          "http://localhost:4010/api/usuarios/detail/" + element.id;
      });
      let json = {
        status: 200,
        meta: { usuariosLength: usuarios.length },
        datos: { usuarios },
        url: 'api/usuarios'
      };
      res.json(json);
    });
  },
  detail: (req, res) => {
    db.Usuario.findOne({
      where: { id: req.params.id, deleted: 0 },
      attributes: {
        exclude: [
          "usuario",
          "password",
          "fkRol",
          "deleted",
          "domicilio",
        ],
      },
    }).then((usuario) => {
      usuario.dataValues.imagen =
        "http://localhost:4010/img/users/" + usuario.imagen;

      let json = {
        status: 200,
        meta: "detalle",
        data: usuario,
        url: 'api/usuarios'
      };
      res.json(json);
    });
  },
};

module.exports = usuariosControllerApi;
