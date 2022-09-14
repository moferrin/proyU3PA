const mongoose = require('mongoose');

const MiniMentalSchema = mongoose.Schema({
    idEncabezado: { type: String, required: true },
    orientacion_tiempo: {
        mim_p1_dia: {
            type: String,
            required: true
        },
        mim_p1_mes: {
            type: String,
            required: true
        },
        mim_p1_anio: {
            type: String,
            required: true
        },
        mim_p1_semana: {
            type: String,
            required: true
        },
        mim_p1_hora: {
            type: String,
            required: true
        },
    },
    orientacion_en_el_espacio: {
        min_p2_lugar: {
            type: String,
            required: true
        },
        min_p2_piso: {
            type: String,
            required: true
        },
        min_p2_barrio: {
            type: String,
            required: true
        },
        min_p2_ciudad: {
            type: String,
            required: true
        },
        min_p2_pais: {
            type: String,
            required: true
        },
    },
    memoria: {
        mim_p3_papel: {
            type: String,
            required: true
        },
        mim_p3_bicicleta: {
            type: String,
            required: true
        },
        mim_p3_cuchara: {
            type: String,
            required: true
        },
    },
    atencion_y_calculo: {
        mim_p4_calculo_1: {
            type: String,
            required: true
        },
        mim_p4_calculo_2: {
            type: String,
            required: true
        },
        mim_p4_calculo_3: {
            type: String,
            required: true
        },
        mim_p4_calculo_4: {
            type: String,
            required: true
        },
        mim_p4_calculo_5: {
            type: String,
            required: true
        },
    },
    memoria_diferida: {
        mim_p5_papel: {
            type: String,
            required: true
        },
        mim_p5_bicicleta: {
            type: String,
            required: true
        },
        mim_p5_cuchara: {
            type: String,
            required: true
        },
    },
    denominacion: {
        mim_p6_mlapiz: {
            type: String,
            required: true
        },
        mim_p6_mreloj: {
            type: String,
            required: true
        },
    },
    repeticion_de_una_frase: { type: String,required: true },
    comprension_ejecucion_de_orden: {
        mim_p8_mderecha: {
            type: String,
            required: true
        },
        mim_p8_doblar: {
            type: String,
            required: true
        },
        mim_p8_dejar: {
            type: String,
            required: true
        },
    },
    lectura: { type: String, required: true },
    escritura: { type: String, required: true },
    copia_de_un_dibujo: {type: String,  required: true },
    tiempo_inicial: { type: String, required: true },
    tiempo_final: { type: String, required: true },
    tiempo_total: { type: String, required: true },
    puntaje_total: { type: Number, required: true }
});

module.exports = mongoose.model('test_MiniMental', MiniMentalSchema);