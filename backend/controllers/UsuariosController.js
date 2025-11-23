const UsuarioService = require("../services/UsuariosService");

module.exports = {
    obtenerUsuarios: (req, res) => {
        res.json(UsuarioService.obtenerUsuarios());
    },

    obtenerUsuarioPorId: (req, res) => {
        const usuario = UsuarioService.obtenerUsuarioPorId(Number(req.params.id));
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(usuario);
    },

    crearUsuario: (req, res) => {
        const nuevo = UsuarioService.crearUsuario(req.body);
        res.json(nuevo);
    },

    actualizarUsuario: (req, res) => {
        const actualizado = UsuarioService.actualizarUsuario(Number(req.params.id), req.body);
        if (!actualizado) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(actualizado);
    },

    eliminarUsuario: (req, res) => {
        const eliminado = UsuarioService.eliminarUsuario(Number(req.params.id));
        if (!eliminado) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ mensaje: "Usuario eliminado" });
    }
};
