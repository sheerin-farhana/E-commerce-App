const express = require('express');

const userController = require('../controllers/user');


const router = express.Router();

router.post('/insert-data',userController.createUser);

router.get('/get-all-users',userController.getAllUsers);

router.delete('/delete-user/:id',userController.deleteUser);

module.exports = router;
