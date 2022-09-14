const mongoose = require("mongoose");
const { Schema } = mongoose;

const supervisorSchema = new Schema({
    sup_nombre: {type: String, required:true},
    sup_apellido: {type: String, required:true},
    sup_cedula: {type: String, required:true},
    sup_contrasenia: {type: String, required:true}
});

module.exports = mongoose.model("Supervisor", supervisorSchema);
