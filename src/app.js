const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const cookieMiddleware = require('./middlewares/cookieMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const marcasMiddleware = require('./middlewares/marcasMiddleware');
const categoriaRandomMiddleware = require('./middlewares/categoriaRandomMiddleware');



const public = path.resolve(__dirname, '../public')



//Rutas
const mainRoutes = require("./routes/main.js");
const apiProductos = require("./routes/api/productos")
const apiUsuarios = require("./routes/api/usuarios")


//Static Files
app.use(cors())
app.use(express.static(public))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(session({ secret : 'bloodstream'}))
app.use(cookieParser())
app.use(cookieMiddleware)
/* app.use(userLoggedMiddleware) */
app.use(categoriaRandomMiddleware)
app.use(marcasMiddleware)

/* app.use(accessRoutesMiddleware) */



//Set Views
app.engine('.html', require('ejs').__express);
app.set('views', './src/views')
app.set('css', '/css')
app.set('view engine', 'ejs')




//Port
app.listen(process.env.PORT||4010, ()=>{
    console.log('Esto anda http://localhost:4010')
})

//Route
app.use("/", mainRoutes);
app.use("/api/productos", apiProductos)
app.use("/api/usuarios", apiUsuarios)


