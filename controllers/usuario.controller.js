const { Usuario } = require("../models/usuario.model");
const bcrypt = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt");


module.exports.createUsuario = async (request, response) => {
    
    try{
        console.log(request.body);
        usuario = Usuario(request.body);
        
        // ENCRIPTAR CLAVE
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(usuario.password, salt);
        
        await usuario.save();

        const token = await generarJWT(usuario._id, usuario.correo,usuario.nombre, usuario.apellido)

        response.json({ _id: usuario._id, nombre: `${usuario.nombre} ${usuario.apellido}`, token });
    }
    catch(error){
        response.status(400).json(error);
    }
}

module.exports.loginUsuario = async (request, response) => {
    try{
        console.log(request.body);
        usuario = await Usuario.findOne({ correo: request.body.correo });

        const validPassword = bcrypt.compareSync(request.body.password, usuario.password);

        if(validPassword){
            const token = await generarJWT(usuario._id, usuario.correo,usuario.nombre, usuario.apellido)

            return response.json({ _id: usuario._id, nombre: `${usuario.nombre} ${usuario.apellido}` , token });
        }else {
            return response.status(401).json({ message: "Contraseña incorrecta" });
        }
    }
    catch(error){
        response.status(400).json(error);
    }
}


module.exports.todosLosUsuarios = async (req, res) => {
    try {

        console.log("ESTO VIENE DEL TOKEN PASADO AL REQUEST CORREO:", req.email);

        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports.todosLosUsuariosporUsuario = async (req, res) => {
    try {

        console.log("ESTO VIENE DEL TOKEN PASADO AL REQUEST CORREO:", req.email);
        console.log("ESTO ES ALGO NUEVO MODIFICADO")

        const usuarios = await Usuario.find({_id: req.uid});
        res.json(usuarios);
    } catch (error) {
        res.status(500).json(error);
    }
}