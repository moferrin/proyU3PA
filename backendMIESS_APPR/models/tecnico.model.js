const mongoose = require("mongoose");
const { Schema } = mongoose;

const tecnicoSchema = new Schema({
    tec_id: {type: String, required:true},
    sup_id: {type: String, required:true},
    tec_nombre: {type: String, required:true},
    tec_apellido: {type: String, required:true},
    tec_cedula: {type: String, required:true},
    tec_telefono: {type: String, required:true},
    tec_correo: {type: String, required:true},
    tec_direccion: {type: String, required:true},
    tec_contrasenia: {type: String, required:true}
});

module.exports = mongoose.model("Tecnico", tecnicoSchema);
