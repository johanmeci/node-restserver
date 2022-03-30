const { response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const usersGet = (req, res = response)  => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey
    });
}

const usersPost = async(req, res = response)  => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    //Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    //Insert DB
    await user.save();

    res.json({
        user
    });
}

const usersPut = async(req, res = response)  => {

    //request -> lo que se esta solicitando al usuario
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        //Encrypt password
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const userUpdate = await User.findByIdAndUpdate(id, rest);

    res.json({
        msg: 'put API - Controller',
        userUpdate
    });
}

const usersPatch = (req, res = response)  => {
    res.json({
        msg: 'patch API - Controller'
    });
}

const usersDelete = (req, res = response)  => {
    res.json({
        msg: 'delete API - Controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}