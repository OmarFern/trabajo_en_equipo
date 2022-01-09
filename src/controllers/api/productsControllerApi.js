const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

/* let array = []; */

const productosControllerApi = {
  list: (req, res) => {
    let promesaProducto = db.Producto.findAll({
      where: { deleted: 0 },
      attributes: {
        exclude: [
          "precio",
          "fkMarca",
          "fkSubCategoria",
          "fkCategoria",
          "deleted",
          "stock",
          "enOferta",
        ],
      },
      include: [
        {
          model: db.Marca,
          as: "marca",
          attributes: {
            exclude: ["id"],
          },
        },
        {
          model: db.Categoria,
          as: "categoria",
          attributes: {
            exclude: ["id", "imagen"],
          },
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
          attributes: {
            exclude: ["id", "fkCategoria"],
          },
        },
      ],
    });
    let promesaCategoriaPr = db.Categoria.count({
      include: [
        {
          model: db.Producto,
          as: "producto",
        },
      ],
      group: ["nombre"],
    });

    Promise.all([promesaProducto, promesaCategoriaPr]).then(
      ([productos, categorias]) => {

        productos.forEach((element) => {
          element.dataValues.detail =
            "http://localhost:4010/api/productos/detail/" + element.id;
            element.dataValues.imagen =
            "http://localhost:4010/img/products/" + element.imagen;
        });

        let json = {
          meta: { length: productos.length },
          datos: { productos, categorias },
          url: '/api/productos'
        };
        res.json(json);
      }
    );
  },
  detail: (req, res) => {
    db.Producto.findOne({
      where: { id: req.params.id, deleted: 0 },
      attributes: {
        exclude: ["fkMarca", "fkSubCategoria", "fkCategoria", "deleted"],
      },
      include: [
        {
          model: db.Marca,
          as: "marca",
          attributes: {
            exclude: ["id"],
          },
        },
        {
          model: db.Categoria,
          as: "categoria",
          attributes: {
            exclude: ["id", "imagen"],
          },
        },
        {
          model: db.SubCategoria,
          as: "subcategoria",
          attributes: {
            exclude: ["id", "fkCategoria"],
          },
        },
      ],
    }).then((producto) => {
      producto.dataValues.imagen =
        "http://localhost:4010/img/products/" + producto.imagen;

      let json = {
        meta: "detalle",
        data: producto,
        url: '/api/productos'
      };
      res.json(json);
    });
  },
  lastProduct: (req, res) => {
    db.Producto.findAll({ order: [['id', 'DESC']], limit: [1], raw: true,
    attributes:{exclude: ["fkMarca", "fkSubCategoria", "fkCategoria", "deleted"]} },
     ) 
        .then(products => { res.status(200).json(
                    { meta: {
                            
                            data:products,
                            count: 1,
                            status: 200,
                          },
                            
                           } ); } )}

};

module.exports = productosControllerApi;
