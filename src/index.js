//requerri el módulo express y guardarlo en una constante del mismo nombre
const express = require('express');
//ejecutar el server que devuelve un objeto y lo guardo en una const ap
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app usa lo que voy a definir el en index de la carpeta routes 
app.use(require('./routes/index'));
// app quiero que escuches e el puereot 3000
app.listen(4000);
console.log('Server on port  4000');
