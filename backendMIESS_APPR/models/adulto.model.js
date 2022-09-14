const mongoose = require("mongoose");
const { Schema } = mongoose;

const adultoSchema = new Schema({
    am_ci: {type: String, required:true},
    tec_id: {type: String, required:true},
    am_nombres: {type: String, required:true},
    am_apellidos: {type: String, required:true},
    am_genero: {type: String, required:true},
    am_fecha_nac: {type: String, required:true},
    am_etnia: {type: String, required:true},
    am_dir: {type: String, required:true},
    am_origen: {type: String, required:true},
    am_fecha_reg: {type: String, required:true}
});

module.exports = mongoose.model("Adultos", adultoSchema);
