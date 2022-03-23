const { response } = require('express');

const usersGet = (req, res = response)  => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey
    });
}

const usersPost = (req, res = response)  => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const usersPut = (req, res = response)  => {

    //request -> lo que se esta solicitando al usuario
    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
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