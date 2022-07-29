const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, tokenUsuario, loginUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Crear usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    validarCampos
] , loginUsuario);

// Login de usuario
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre debe tener un mínimo de 6 caracteres').isLength({min: 6}),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    validarCampos
], crearUsuario);

// Validar y revalidar token
router.get('/renew', tokenUsuario);








module.exports = router;