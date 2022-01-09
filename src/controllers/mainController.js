const fs = require('fs');
const path = require('path');
const {setEnvironmentData} = require('worker_threads');
const db = require('../database/models');
const {lista} = require('./productosController');
const Sequelize = require('sequelize');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
	index: (req, res) => {
		const session = req.session.usuario;
		/* console.log('SESSION INDEX'); */
		/* console.log(session); */

		let promiseProducto = db.Producto.findAll({where:{deleted:0,enOferta: 1}})
		let promiseCategoria = db.Categoria.findAll();
		let promiseMarca = db.Marca.findAll();

		Promise.all([promiseProducto, promiseCategoria, promiseMarca])
			   .then(([lista_productos, categorias, marcas]) => {
				/* console.log(categorias) */
				res.render('index', {
					lista_productos,
					categorias,
					marcas: marcas,
					session: session})})
			    .catch(error => res.send(error))},

	productoPorCategoria: (req, res) => {
		const session = req.session.usuario;

		db.Producto.findAll({
			where: {deleted: 0},
			include: [{
				model: db.Categoria,
				as: 'categoria',
				where: {nombre: req.params.nombreCategoria}}]})
		.then(lista_productos => {
			/* console.log(lista_productos) */
		res.render('productosBuscados', {lista_productos,session: session})})
		.catch(error => console.log(error))},
	productoPorSubCategoria: (req, res) => {
		const session = req.session.usuario;

		db.Producto.findAll({
			where: {deleted: 0},
			include: [{
				model: db.SubCategoria,
				as: 'subcategoria',
				where: { nombre: req.params.nombreCategoria}}]})
		.then(lista_productos => {
			
		res.render('productosBuscadosPorSubcategoria', {

				lista_productos,session: session})})
		.catch(error => console.log(error))},
	productoPorMarca: (req, res) => {
		const session = req.session.usuario;

		db.Producto.findAll({
			where: {deleted: 0},
			include: [{
				model: db.Marca,
				as: 'marca',
				where: {nombre: req.params.nombreMarca}}]})
		.then(lista_productos => {
			/* console.log('PRODUCTOS POR MARCAS')
			console.log(lista_productos) */
		res.render('productosBuscadosPorMarca', {lista_productos,session: session})})
		.catch(error => res.send(error))}}

module.exports = mainController;