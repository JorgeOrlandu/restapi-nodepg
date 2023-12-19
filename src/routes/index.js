//importar una función Router del módulo express
const { Router } = require('express');
//ejecuto la función y me devuelve un objeto que lo guardo en la cons router
const router = Router();
//voy a requerir lo qeu viene de la const ubicada en 
const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

//router es un objeotque me permite definir las rutas de mis servidor
module.exports = router;