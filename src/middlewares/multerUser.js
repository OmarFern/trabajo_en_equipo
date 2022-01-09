/* const multer = require("multer");
const path = require("path");

const storageUser = multer.diskStorage({ 
    destination: function (req, file, cb) {
       cb(null, './public/img/users');
    },
    filename: function (req, file, cb) {
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
       cb(null, file.originalname)
    }
 })
 
 
 
 const uploadUsers = multer({storage: storageUser});
  
 module.exports = uploadUsers; */