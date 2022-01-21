const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {body,check} = require('express-validator');

const loggedMiddleware = require('../middlewares/loggedMiddleware')
const notLoggedMiddleware = require('../middlewares/notLoggedMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware');


/////////////////////MULTER///////////////////
const uploadProducts = require('../middlewares/multerProducts')

const storageUser = multer.diskStorage({ 
   destination: function (req, file, cb) {cb(null, './public/img/');},
   
   filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
      cb(null, file.originalname) }})



const uploadUsers = multer({storage: storageUser});


//EXPRESS VALIDATOR
let dataCheckRegister = [
   body('nombre').notEmpty().withMessage('Debes completar el campo de nombre').bail()
   .isLength({ min: 2}).withMessage('El nombre debe tener más de 2 carácteres'),

   body('apellido').notEmpty().withMessage('Debes completar el campo de apellido').bail()
   .isLength({ min: 2}).withMessage('El nombre debe tener más de 2 carácteres'),

   body('usuario').notEmpty().withMessage('Debes completar el campo de usuario').bail(),

   body('email').notEmpty().withMessage('Debes completar el campo de email').bail()
   .isEmail().withMessage('Debes completar el campo con un email válido'),

   body('domicilio').notEmpty().withMessage('Debes completar el campo de domicilio'),

   body('imagen').notEmpty().withMessage('Debes completar el campo de foto de perfil').bail()
  .matches(/\.(jpg|jpeg|png|gif)$/i).withMessage('Debe tener extencion gif|jpg|jpeg|png)') ,

   body('password').notEmpty().withMessage('Debes completar el campo de contraseña').bail()
   .isLength({ min: 8}).withMessage('La contraseña debe ser o tener más de 8 carácteres').bail()
   .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('La contraseña debe tener al menos un carácter especial, una letra mayúscula y una letra minúscula')

];
let dataCheckLogin = [
   body('email').notEmpty().withMessage('Completar el email').bail()
   .isEmail().withMessage('Verifique el email '),

   body('password').notEmpty().withMessage("Completar la Contraseña")
]
let dataCheckAgregarProducto = [
   body('nombre').notEmpty().withMessage('Debes completar el campo de nombre').bail()
   .isLength({ min: 5 }).withMessage('El nombre del producto deberá tener al menos 5 caracteres'),

   body('descripcion').isLength({ min: 20})
   .withMessage('La descripción del producto debe tener al menos 20 caracteres.'),

   body('categoria').notEmpty().withMessage('Debes elegir el campo de categoría'),

   body('sub_categoria').notEmpty().withMessage('Debes elegir el campo de categoría'),
]
let dataCheckEditarUsuario = [
   body('nombreEditado').isLength({ min: 2}).withMessage('El nombre debe tener más de 2 carácteres'),

   body('apellidoEditado').isLength({ min: 2}).withMessage('El nombre debe tener más de 2 carácteres'),

   body('emailEditado').isEmail().withMessage('Debes completar el campo con un email válido')
]

let dataCheckEditarProducto = [
   body('nombre').notEmpty().withMessage('Debes completar el campo de nombre').bail()
   .isLength({min: 5}).withMessage('El nombre del producto deberá tener al menos 5 caracteres'),
   body('descripcion').isLength({min: 20}).withMessage('La descripción del producto debe tener al menos 20 caracteres.')
]

let validPassword = [
   body('passwordEditado').notEmpty().withMessage('Debes completar el campo de contraseña').bail()
   .isLength({min: 8}).withMessage('La contraseña debe ser o tener más de 8 carácteres').bail()
   .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('La contraseña debe tener al menos un carácter especial, una letra mayúscula y una letra minúscula')
]


/////////////////////MAIN CONTROLLER///////////////////
const mainController = require("../controllers/mainController.js")
router.get("/", mainController.index) //home




/////////////////////PRODUCTOS CONTROLLER///////////////////
const productosController = require("../controllers/productosController.js")
router.get("/productos", productosController.lista) //todos los productos
router.get("/detalleProducto/:id", uploadProducts.single("imagen"), productosController.detalleProducto) //unProducto


//Carrito de productos
router.get("/cart", notLoggedMiddleware, productosController.cart)
router.post('/cart/:id', uploadProducts.single("imagen"), productosController.agregarAlCarrito)
router.delete('/cart/:id', productosController.eliminarCart);

// Agregar un producto 
router.get("/agregar", notLoggedMiddleware, adminMiddleware, productosController.agregar)
router.post('/productos', uploadProducts.single("imagen"),dataCheckAgregarProducto, productosController.guardar);

// Editar un producto 
router.get('/editar/:id', notLoggedMiddleware, adminMiddleware, productosController.editar);
router.put('/detalleProducto/:id'/* , dataCheckEditarProducto */,uploadProducts.single("imagen"), productosController.actualizar);


// Eliminar un producto 
router.delete('/productos/:id', productosController.eliminar);

//Buscar
router.post('/productosBuscados', uploadProducts.single("imagen"), productosController.buscar);

//Filtrar Home
router.post('/productosBuscados/:nombreCategoria', uploadProducts.single("imagen"), mainController.productoPorCategoria);
router.post('/productosBuscadosPorMarca/:nombreMarca', uploadProducts.single("imagen"), mainController.productoPorMarca);
router.post('/productosBuscadosPorSubCategoria/:nombreCategoria', uploadProducts.single("imagen"), mainController.productoPorSubCategoria);


/////////////////////USUARIOS CONTROLLER///////////////////
const usuariosController = require('../controllers/usuariosController');
const ApiProductController = require("../controllers/api/productsControllerApi");

// Registrarse
router.get('/register', loggedMiddleware, usuariosController.formRegister);
router.post('/log', uploadUsers.single("imagen"),dataCheckRegister, usuariosController.registrarse);

// Iniciar Sesión
router.get('/login', loggedMiddleware, usuariosController.formLogin);
router.post('/', dataCheckLogin, usuariosController.inciarSesion);

//Usuarios
router.get('/log', adminMiddleware, uploadUsers.single("imagen"), usuariosController.logs)

//Cerrar Sesión
router.get('/logout', usuariosController.logout);

//Eliminar Cuenta
router.delete('/log', usuariosController.eliminarCuenta);

//Mi Cuenta
router.get('/perfil', notLoggedMiddleware, uploadUsers.single("imagen"), usuariosController.perfil)
router.get('/noSession', usuariosController.noSession)
router.get('/noAdmin', usuariosController.noAdmin)

//Recuperar contraseña
router.get('/recuperar', usuariosController.recuperarForm)
router.put('/login',validPassword, usuariosController.recuperar)

//Editar cuenta
router.get('/editarUsuario', notLoggedMiddleware, usuariosController.editar)
router.put('/', /* dataCheckEditarUsuario, */ uploadUsers.single("imagen"), usuariosController.actualizar)



module.exports = router;