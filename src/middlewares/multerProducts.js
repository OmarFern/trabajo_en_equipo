const multer = require("multer");
const path = require("path");

const storageProducts = multer.diskStorage({ 
   destination: function (req, file, cb) {
      cb(null, './public/img/products');
   },
   filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
      cb(null, file.originalname);
   }
})

const uploadProducts = multer({storage: storageProducts});

module.exports = uploadProducts;