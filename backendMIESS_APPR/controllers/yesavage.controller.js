const Yesavage = require("../models/yesavage.model");

const yesavageCtrl = {};

yesavageCtrl.getYesavageTest = async(req, res, next) => {
    const yesavagetest = await Yesavage.find();
    res.json(yesavagetest);
};

yesavageCtrl.createYesavage = async(req, res, next) => {
    const test_yesavage = new Yesavage({
        //ey_id: req.body.ey_id,
        ef_id: req.body.ef_id,
        ey_p1_satisfecho: req.body.ey_p1_satisfecho,
        ey_p2_actividades: req.body.ey_p2_actividades,
        ey_p3_vacio: req.body.ey_p3_vacio,
        ey_p4_aburrido: req.body.ey_p4_aburrido,
        ey_p5_animo: req.body.ey_p5_animo,
        ey_p6_preocupado: req.body.ey_p6_preocupado,
        ey_p7_feliz: req.body.ey_p7_feliz,
        ey_p8_desamparado: req.body.ey_p8_desamparado,
        ey_p9_cosas: req.body.ey_p9_cosas,
        ey_p10_memoria: req.body.ey_p10_memoria,
        ey_p11_estar_vivo: req.body.ey_p11_estar_vivo,
        ey_p12_inutil_despreciable: req.body.ey_p12_inutil_despreciable,
        ey_p13_energia: req.body.ey_p13_energia,
        ey_p14_esperanza_actual: req.body.ey_p14_esperanza_actual,
        ey_p15_cree_mejor: req.body.ey_p15_cree_mejor,
        ey_tiempo_inicial: req.body.ey_tiempo_inicial,
        ey_tiempo_final: req.body.ey_tiempo_final,
        ey_tiempo_total: req.body.ey_tiempo_total,
        ey_estado: req.body.ey_estado,
        ey_puntaje_total: req.body.ey_puntaje_total,
    });
    await test_yesavage.save();
    res.json({ status: "Se añadieron correctamente los datos a la colección" });
};

yesavageCtrl.getYesavage = async(req, res, next) => {
    const { id } = req.params;
    const test_yesavage = await Yesavage.findById(id);
    res.json(test_yesavage);
};

yesavageCtrl.obtenerTestByIdEnc = async (req, res) => {
    const {id} = req.params;
    console.log('id: ' + id);
    try {
        const test_yesavage = await Yesavage.find({"ef_id":id});
        res.json(test_yesavage);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = yesavageCtrl;