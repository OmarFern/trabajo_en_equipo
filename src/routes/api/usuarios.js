const express = require('express');
const router = express.Router();
const usuariosControllerApi = require('../../controllers/api/usersControllerApi');

// RUTAS USUARIOS
router.get("/", usuariosControllerApi.list)
router.get("/detail/:id", usuariosControllerApi.detail) 

module.exports = router;