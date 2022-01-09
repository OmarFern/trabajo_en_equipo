const session = require('express-session');
const fs = require('fs');
const path = require('path');
const { validationResult} = require("express-validator");
  
//DATABASE
const db = require('../database/models');
const {Op} = require("sequelize");


const productoController = {

    buscar: (req, res) => {  const session = req.session.usuario;
            db.Producto.findAll({ where: {nombre: {[Op.like]: `%${req.body.productoBuscado}%`}} })
            .then(lista_productos => {
                res.render('productosBuscados', {
                    lista_productos,
                    session: session})}) },
    lista: (req, res) => { const session = req.session.usuario;
    
        db.Producto.findAll({
            where: {
                deleted: 0,
                fkCategoria: { [Op.lte]: 6} }})
        .then(lista_productos => {
            res.render('productos', { "lista_productos": lista_productos, session: session});})},
    detalleProducto: (req, res) => {
        const session = req.session.usuario;
        db.Producto.findByPk(req.params.id, {
            include: [
                {model: db.Marca, as: 'marca', },
                { model: db.SubCategoria, as: 'subcategoria',},
                { model: db.Categoria, as: 'categoria',},]})
        .then(producto => {
            if(producto != undefined){
                res.render('detalleProducto', {"producto": producto, session: session}); }
            else{
                res.render('productNotExist');}})},
    cart: (req, res) => {
        let session = req.session.usuario;
        db.Carrito.findAll({
            where: {id: session.id },
            include: [
                { model: db.Usuario, as: 'usuario',},
                { model: db.Producto, as: 'producto',}]})
        .then(productosCarrito => {
            /*   console.log('PRODUCTOS AL CARRITO') */
            for (let i = 0; i < productosCarrito.length; i++) {

                /*    console.log(productosCarrito[i].producto[i].nombre) */
            }

            res.render('cart', {
                productosCarrito,
                session: session})})},
    eliminarCart: (req, res) => { },

    agregar: (req, res) => {
        let promiseCategoria = db.Categoria.findAll();
        let promiseSubCategoria = db.SubCategoria.findAll({
            include: [{ association: 'categoria'}] });
        let promiseMarca = db.Marca.findAll();
        Promise.all([promiseCategoria, promiseSubCategoria, promiseMarca])
            .then(([categorias, sub_categorias, marcas]) => {
                  res.render('agregar', {categorias, sub_categorias,marcas }) })
            .catch(error => res.send(error))},
    guardar: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {return res.render("agregar", { errors: errors.errors,});}
        else{
            db.Producto.create({
                nombre: req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                imagen: req.file ? req.file.filename : '',
                stock: req.body.stock ? req.body.stock = 1 : req.body.stock = 0,
                fkSubCategoria: req.body.sub_categoria,
                fkCategoria: req.body.categoria,
                fkMarca: req.body.marca,
                enOferta: req.body.oferta ? req.body.oferta = 1 : req.body.oferta = 0,
                deleted: 0
            }).then(() => {
                return res.redirect('/productos');
            })
            .catch(error => res.send(error)); }},

    editar: (req, res) => {
        const session = req.session.usuario;
        let promiseCategoria = db.Categoria.findAll();
        let promiseSubCategoria = db.SubCategoria.findAll({
            include: [{
                association: 'categoria'
            }]
        });
        let promiseMarca = db.Marca.findAll();
        let promiseProducto = db.Producto.findByPk(req.params.id)
        Promise.all([promiseCategoria, promiseSubCategoria, promiseMarca, promiseProducto])
               .then(([categorias, sub_categorias, marcas, producto]) => {
                res.render('editar', {
                    categorias,
                    sub_categorias,
                    marcas,
                    producto,
                    session: session
                })
                console.log('DATOS PRODUCTOS ANTES DE EDITAR')
                console.log(producto) })
               .catch(error => res.send(error))


    },
    actualizar: (req, res) => {
        db.Producto.findByPk(req.params.id).then(producto =>{
            db.Producto.update({
                nombre: req.body.nombre.length <= 0 ?  producto.nombre : req.body.nombre,
                precio: req.body.precio.length <= 0 ? producto.precio : req.body.precio,
                descripcion: req.body.descripcion.length <= 0 ? producto.descripcion : req.body.descripcion,
                imagen: req.file ? req.file.filename : producto.imagen,
                stock: req.body.stock ? req.body.stock = 1 : req.body.stock = 0,
                fkCategoria: req.body ? req.body.categoria : producto.fkCategoria,
                fkSubCategoria: req.body ? req.body.sub_categoria : producto.fkSubCategoria,
                fkMarca: req.body ? req.body.marca : producto.fkMarca,
                enOferta: req.body.oferta ? req.body.oferta = 1 : req.body.oferta = 0,
            },{where: {id: req.params.id}})
        })
        .then(res.redirect("/productos"))},

    filtrar: (req, res) => { },


    eliminar: (req, res) => {
        db.Producto.update({ deleted: 1}, {
            where: { id: req.params.id }})
            res.redirect('/productos')},


    agregarAlCarrito: (req, res) => { },


    
    


}


module.exports = productoController;