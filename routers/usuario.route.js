const UsuarioController = require('../controllers/usuario.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

module.exports = function(app){
    app.post('/api/auth/register', UsuarioController.createUsuario);
    app.post('/api/auth/login', UsuarioController.loginUsuario);

    app.get('/api/usuarios', validarJWT,  UsuarioController.todosLosUsuarios);
    app.get('/api/usuarios/propio', validarJWT,  UsuarioController.todosLosUsuariosporUsuario);
}