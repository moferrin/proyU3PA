const mongoose = require('mongoose');

const BarthelSchema = mongoose.Schema({
    idEncabezado: {
        type: String,
        required: true
    },
    p1_comer: {
        type: String,
        required: true
    },
    p2_retrasladarse: {
        type: String,
        required: true
    },
    p3_aseo: {
        type: String,
        required: true
    },
    p4_uso_retrete: {
        type: String,
        required: true
    },
    p5_bañarse: {
        type: String,
        required: true
    },
    p6_desplazarse: {
        type: String,
        required: true
    },
    p7_escaleras: {
        type: String,
        required: true
    },
    p8_vestirse: {
        type: String,
        required: true
    },
    p9_control_heces: {
        type: String,
        required: true
    },
    p10_control_orina: {
        type: String,
        required: true
    },
    tiempo_inicial: {
        type: String,
        required: true
    },
    tiempo_final: {
        type: String,
        required: true
    },
    tiempo_total: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    puntaje_total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('test_barthel', BarthelSchema);