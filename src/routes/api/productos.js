const express = require('express');
const router = express.Router();
const productosControllerApi = require('../../controllers/api/productsControllerApi');


// RUTAS PRODUCTOS
router.get("/", productosControllerApi.list)
router.get("/detail/:id", productosControllerApi.detail) 
//ultimo producto
router.get("/lastProduct", productosControllerApi.lastProduct); 
router.get("/productCateg", productosControllerApi.productCateg); 



module.exports = router;