const db = require("../data/database");

module.exports = {
    obtenerUsuarios: () => db.usuarios,

    obtenerUsuarioPorId: (id) => db.usuarios.find(u => u.id === id),

    crearUsuario: (usuario) => {
        usuario.id = db.generarId();
        db.usuarios.push(usuario);
        return usuario;
    },

    actualizarUsuario: (id, datos) => {
        const usuario = db.usuarios.find(u => u.id === id);
        if (!usuario) return null;

        Object.assign(usuario, datos);
        return usuario;
    },

    eliminarUsuario: (id) => {
        const index = db.usuarios.findIndex(u => u.id === id);
        if (index === -1) return false;

        db.usuarios.splice(index, 1);
        return true;
    }
};

