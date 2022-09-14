const mongoose = require("mongoose");
const { Schema } = mongoose;

const yesavageSchema = new Schema({
    //ey_id: { type: String, required: true },
    ef_id: { type: String, required: true },
    ey_p1_satisfecho: { type: String, required: true },
    ey_p2_actividades: { type: String, required: true },
    ey_p3_vacio: { type: String, required: true },
    ey_p4_aburrido: { type: String, required: true },
    ey_p5_animo: { type: String, required: true },
    ey_p6_preocupado: { type: String, required: true },
    ey_p7_feliz: { type: String, required: true },
    ey_p8_desamparado: { type: String, required: true },
    ey_p9_cosas: { type: String, required: true },
    ey_p10_memoria: { type: String, required: true },
    ey_p11_estar_vivo: { type: String, required: true },
    ey_p12_inutil_despreciable: { type: String, required: true },
    ey_p13_energia: { type: String, required: true },
    ey_p14_esperanza_actual: { type: String, required: true },
    ey_p15_cree_mejor: { type: String, required: true },
    ey_tiempo_inicial: { type: String, required: true },
    ey_tiempo_final: { type: String, required: true },
    ey_tiempo_total: { type: String, required: true },
    ey_estado: { type: Boolean, required: true },
    ey_puntaje_total: { type: Number, required: true },

});

module.exports = mongoose.model("test_yesavage", yesavageSchema);