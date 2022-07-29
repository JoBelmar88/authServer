const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req, res = response) => {

    const { email, nombre, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        };

        dbUser = new Usuario( req.body );

        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        await dbUser.save();

        const token = await generarJWT();

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            nombre
        })

        

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

    // Verificar si no existe un correo igual


    // Encriptar la contraseña (Hashear la contraseña).


    // Generar el JWT

    // Generar respuesta exitosa

    
};

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Crear usuario /'
    });
};

const tokenUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Token de usuario /renew'
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    tokenUsuario
}