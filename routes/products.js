const express  = require('express');
const app = express();
const ctrlProducts = require('../controllers/products')
/////METODOS DE ENVIO PARA PRODUCTOS
app.get("/", ctrlProducts.obtenerProducts);

app.get("/:id", ctrlProducts.obtenerProductId);

app.post("/add-product", ctrlProducts. agregarProduct);

app.put("/update/:id", ctrlProducts.actualizarProduct);
  
app.delete("/delete/:id", ctrlProducts.deleteProduct);

module.exports = app;
