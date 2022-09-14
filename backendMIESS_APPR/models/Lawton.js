const mongoose = require('mongoose');

const LawtonSchema = mongoose.Schema({
    idEncabezado: {type: String,required: true},
    lb_p1: { type: String, required: true },
    lb_p2: { type: String, required: true },
    lb_p3: { type: String, required: true },
    lb_p4: { type: String, required: true },
    lb_p5: { type: String, required: true },
    lb_p6: { type: String, required: true },
    lb_p7: { type: String, required: true },
    lb_p8: { type: String, required: true },
    tiempo_inicial: {type: String,required: true},
    tiempo_final: {type: String, required: true},
    tiempo_total: {type: String,required: true},
    estado: {type: String,required: true},
    puntaje_total: {type: Number,required: true}
});

module.exports = mongoose.model('test_Lawton', LawtonSchema);