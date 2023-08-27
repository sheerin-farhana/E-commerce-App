const User = require('../models/user');

exports.createUser = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phone;
    User.create({
        name:name,
        phonenumber:phonenumber,
        email:email
    })
    .then((result) => {
        console.log(result);
        res.status(201).json({ message: 'User created successfully', user: result });
    })
    .catch(err => console.log(err));
    res.status(500).json({ error: 'An error occurred while creating the user' });
}

exports.getAllUsers = (req,res,next) => {
    User.findAll()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        console.log(err);
    })
}

exports.deleteUser = (req,res,next) => {
    const userId = req.params.id;
    User.findByPk(userId)
    .then(user => {
        if(!user){
           return res.json({message:'User not found'});
        }

        return user.destroy();
    })
    .then(result => {
        console.log('User deleted Successfully');
    })
    .catch(err => console.log("Error deleting user")); 
}